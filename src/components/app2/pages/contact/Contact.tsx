import * as React from "react";
import { pageNav, parseAnchors, parseButtons, parseInputs, parseTextareas, parseTooltips } from "../../utils/Utils";
import { createRef, RefObject } from "react";
import axios from "axios";
import hljs from "highlight.js";
import "./contact.css";

type ContactProps = {};
type ContactState = {};

// retval = /*ANCHOR[$send_message$,$/send_message$]*/(name, email, message);

// language=TEXT
let sourceCode = `
#include <stdio.h>

#include "requests/contact.h"

${pageNav(window.location.pathname)}

/*
 * @param 'name' - Your name.
 * @param 'email' - Your email so I can respond back
 * @param 'message' - Message you're sending me.
 */
extern int send_message(char* name, char* email, char* message);

static int contact_me(){
  int retval;
  char* name = \n\t"/*INPUT[$text$,$name$]*/";
  char* mail = \n\t"/*INPUT[$text$,$email$]*/";
  char* message = \n\t"/*TEXTAREA[$message$]*/";
/*
 * After filling the required data tap on the
 * 'send_message' function call to submit!
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
	form: HTMLFormElement | null;

	constructor(props: ContactProps) {
		super(props);
		this.ref = createRef();
		this.sendMessage = this.sendMessage.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.form = null;
	}

	componentDidMount(): void {
		if (this.ref.current) {
			let source = hljs.highlight("c", sourceCode).value;
			source = parseAnchors(source);
			source = parseTooltips(source);
			source = parseInputs(source);
			source = parseTextareas(source);
			source = parseButtons(source);
			source = "<form id='form' method='POST' action='/mail/send_message'>" + source + "</form>";
			this.ref.current.innerHTML += source;
			this.form = this.ref.current.querySelector("form#form");
			if (this.form) {
				this.form.addEventListener("submit", this.handleSubmit);
			}
		}
	}

	async sendMessage(name: string, email: string, message: string) {
		const url = new URL(window.location.href);
		url.port = (window.location.port === "0" || window.location.port === "") ? "80" : window.location.port;
		url.pathname = "/mail/send";
		try {
			const res = await axios.post(url.href, {
				name,
				email,
				message,
			});
			if (res.status === 200) {
				window.location.pathname = "/200";
			}
		} catch (e) {
			if (e.response.status === 429) {
				window.location.pathname = "/429";
			} else if (e.response.status === 400) {
				window.location.pathname = "/400";
			}

		}
	}


	handleSubmit(ev: Event) {
		ev.preventDefault();
		if (ev.target) {
			const tar = ev.target as unknown as HTMLFormElement;
			const name = (tar["name"] as unknown as HTMLInputElement).value;
			const email = (tar["name"] as unknown as HTMLInputElement).value;
			const messenger = (tar["name"] as unknown as HTMLTextAreaElement).value;
			this.sendMessage(name, email, messenger);
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
