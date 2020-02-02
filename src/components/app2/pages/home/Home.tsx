import * as React from "react";
import { createRef, RefObject } from "react";
import hljs from "highlight.js";
import "../../../../../node_modules/highlight.js/styles/darcula.css";
import { pageNav, parseAnchors } from "../../utils/Utils";
import { firstNameFiglet, lastNameFiglet } from "../../static/Figlets";

// language=TEXT
let sourceCode = `#include <stdio.h>

${pageNav(window.location.pathname)}

${firstNameFiglet}

${lastNameFiglet}
int main(void) {
	printf("Hello, World!\\n");
	return 0;
}
`;

type HomeProps = {};
type HomeState = {
	source: string;
};


export default class Home extends React.Component<HomeProps, HomeState> {
	ref: RefObject<HTMLPreElement>;
	constructor(props: HomeProps) {
		super(props);
		this.ref = createRef();
		this.state = {source: sourceCode};

	}

	componentDidMount(): void {
		if (this.ref.current) {
			let highlighted = hljs.highlight("c", sourceCode).value;
			highlighted = parseAnchors(highlighted);
			this.ref.current.innerHTML = highlighted;
		}
	}

	render() {
		return (
			<div className="container">
				<pre id="home-dest" ref={this.ref} className="fg-accent-2 left-align" />
			</div>
		);
	};
};
