import * as React from "react";
import hljs from "highlight.js";
import { createRef } from "react";
import { pageNav, parseAnchors } from "../../utils/Utils";

let message = `
${pageNav(window.location.pathname)}

#define ERR_TYP "404 NOT FOUND"
#define ERR_MSG "Page not found."
#define ERR_ALT "Go back to /*ANCHOR[$/root$,$/$]*/"

/*
 * Tap the 'go_back' function declaration to go back to home page
 * @param 'path' - redirects the browser to path
 */
extern void /*ANCHOR[$go_back$,$/$]*/(const char* path);
`;

export default class Error404 extends React.Component<any, any> {
	ref: React.RefObject<HTMLPreElement>;

	constructor(props: any) {
		super(props);
		this.ref = createRef();
	}

	componentDidMount(): void {
		if (this.ref.current) {
			let highlighted = hljs.highlight("c", message).value;
			highlighted = parseAnchors(highlighted);
			this.ref.current.innerHTML = highlighted;
		}
	}

	render() {
		return (<pre ref={this.ref} className="container left-align fg-accent-2"/>);
	}

}
