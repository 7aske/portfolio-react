import * as React from "react";
import { createRef } from "react";
import hljs from "highlight.js";
import { pageNav, parseAnchors } from "../../utils/Utils";
import { ThemeContext } from "styled-components";
import { hlight } from "../../utils/Highlighter";
import Navigation from "../../components/nav/Navigation";

let sourceCode = `
#define RESP_TYP "200 OK"
#define RESP_MSG "Thanks for contacting me. I will try to reply ASAP!"
#define RESP_ALT "Go back to /*ANCHOR[$/root$,$/$]*/"

/*
 * Tap the 'go_back' function declaration to go back to home page
 * @param 'path' - redirects the browser to path
 */
extern void /*ANCHOR[$go_back$,$/$]*/(const char* path);
`;

class Success200 extends React.Component<any, any> {
	ref: React.RefObject<HTMLPreElement>;

	constructor(props: any) {
		super(props);
		this.ref = createRef();
	}

	highlight() {
		if (this.ref.current) {
			hlight(this.ref.current, sourceCode, {
				language: this.context.language,
				classPrefix: this.context.theme,
			});
		}
	}

	componentDidMount(): void {
		this.highlight();
	}

	componentDidUpdate(): void {
		this.highlight();
	}


	render() {
		return (
			<div className="container">
				<Navigation otherImports={["nav.h"]}/>
				<pre ref={this.ref} className="fg-accent-2 left-align"/>
			</div>
		);
	}

}

Success200.contextType = ThemeContext;
export default Success200;
