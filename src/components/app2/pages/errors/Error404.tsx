import * as React from "react";
import hljs from "highlight.js";
import { createRef } from "react";
import { pageNav, parseAnchors } from "../../utils/Utils";

let message = `
${pageNav(window.location.pathname)}

#define ERR_404 "NOT FOUND"
#define ERR_MSG "Page not found. Go back to /*ANCHOR[$/root$,$/$]*/"
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
		return (<div className="container left-align">
			<pre ref={this.ref}>

			</pre>
		</div>);
	}

}
