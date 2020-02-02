import * as React from "react";
import { skills } from "../../static/Skills";
import { pageNav, parseAnchors, parseTooltips, skillFmt } from "../../utils/Utils";
import { RefObject } from "react";
import { createRef } from "react";
import hljs from "highlight.js";

type SkillsProps = {};
type SkillsState = {};

// language=TEXT
let sourceCode = `
/*
 * These represent confidence I have in a certain language, technology or framework
 * Confidence values range from 0x00 to 0x${(100).toString(16)}
 */

#include <stdint.h>

${pageNav(window.location.pathname)}


${skills.map(skill => skillFmt(skill)).join("")}
`;

export default class Skills extends React.Component<SkillsProps, SkillsState> {
	ref: RefObject<HTMLPreElement>;

	constructor(props: SkillsProps) {
		super(props);
		this.ref = createRef();
	}

	componentDidMount(): void {
		if (this.ref.current) {
			let highlighted = hljs.highlight("c", sourceCode).value;
			highlighted = parseAnchors(highlighted);
			highlighted = parseTooltips(highlighted);
			this.ref.current.innerHTML = highlighted;
			// M.Tooltip.init(document.querySelectorAll(".tooltipped"), {});
		}
	}

	render() {
		return (
			<pre className="container fg-accent-2 left-align" ref={this.ref}/>
		);
	};
};
