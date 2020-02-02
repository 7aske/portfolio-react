import * as React from "react";
import { pageNav, parseAnchors, parseButtons, parseInputs, parseTextareas, parseTooltips } from "../../utils/Utils";
import { createRef, RefObject } from "react";
import hljs from "highlight.js";
import "./contact.css";

type ContactProps = {};
type ContactState = {};

// retval = /*ANCHOR[$send_message$,$/send_message$]*/(name, email, message);

// language=TEXT
let sourceCode = `
#include <stdio.h>

#include "io/contact.h"
${pageNav(window.location.pathname)}

/*
 * @param 'name' - Your name.
 * @param 'email' - Your email so I can respond back
 * @param 'message' - Message you're sending me.
 */
extern int send_message(char* name, char* email, char* message);

static int contact_me(){
	int retval;
	char* name = \n\t"/*INPUT[$name$,$text$]*/";
	char* mail = \n\t"/*INPUT[$mail$,$email$]*/";
	char* message = \n\t"/*TEXTAREA[$message$]*/";
/*
 * After filling the required data tap on the
 * 'send_message' function call to send me a message!
 */
	retval = /*BUTTON[$send_message$,$submit$]*/(name, email, message);
	
	if (retval){
		fputs(stdout, "Message sent!");
	} else {
		fputs(stderr, "Sending message failed!");
	}
	return retval;
}
`;

export default class Contact extends React.Component<ContactProps, ContactState> {
	ref: RefObject<HTMLPreElement>;

	constructor(props: ContactProps) {
		super(props);
		this.ref = createRef();
	}

	componentDidMount(): void {
		if (this.ref.current) {
			let source = hljs.highlight("c", sourceCode).value;
			source = parseAnchors(source);
			source = parseTooltips(source);
			source = parseInputs(source);
			source = parseTextareas(source);
			source = parseButtons(source);
			source = "<form method='POST' action='/send_message'>" + source + "</form>";
			this.ref.current.innerHTML += source;

		}
	}

	render() {
		return (
			<div>
				<pre className="container left-align fg-accent-2" ref={this.ref}/>
			</div>
		);
	};
};
