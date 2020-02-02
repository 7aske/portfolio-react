import * as React from "react";
import { createRef, RefObject } from "react";
import { skills, skillsSourceCode } from "../../static/Skills";
import { pageNav, skillFmt } from "../../utils/Utils";
import { hlight } from "../../utils/Highlighter";
import { ThemeContext } from "../../components/styling/ThemeContext";
import Navigation from "../../components/nav/Navigation";

type SkillsProps = {};
type SkillsState = {};

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
			hlight(this.ref.current, skillsSourceCode[this.context.language], {
				language: this.context.language,
				classPrefix: this.context.theme,
			});
		}
	}

	render() {
		return (
			<div className="container">
				<Navigation/>
				<pre ref={this.ref} className="fg-accent-2 left-align"/>
			</div>
		);
	};
}

Skills.contextType = ThemeContext;
export default Skills;
