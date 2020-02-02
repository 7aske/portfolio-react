import * as React from "react";
import { createRef, RefObject } from "react";
import { skills } from "../../static/Skills";
import { pageNav, skillFmt } from "../../utils/Utils";
import { hlight } from "../../utils/Highlighter";
import { ThemeContext } from "../../components/styling/ThemeContext";

type SkillsProps = {};
type SkillsState = {};

// language=TEXT
let sourceCode = `
/*
 * These represent confidence I have in a certain
 * language, technology or framework.
 * Confidence values range from 0x00 to 0x${(100).toString(16)}.
 * Naturally numbers are in hex.
 */

#include <stdint.h>

${pageNav(window.location.pathname)}

${skills.map(skill => skillFmt(skill)).join("")}
`;

class Skills extends React.Component<SkillsProps, SkillsState> {
	ref: RefObject<HTMLPreElement>;

	constructor(props: SkillsProps) {
		super(props);
		this.ref = createRef();
	}

	componentDidMount(): void {
		this.highlight();
	}

	componentDidUpdate(): void {
		this.highlight();
	}

	highlight() {
		if (this.ref.current) {
			hlight(this.ref.current, sourceCode, {
				language: this.context.language,
				classPrefix: this.context.theme,
			});
		}
	}

	render() {
		return (
			<pre className="container fg-accent-2 left-align" ref={this.ref}/>
		);
	};
}

Skills.contextType = ThemeContext;
export default Skills;
