import * as React from "react";
import { createRef, RefObject } from "react";
import { projectsSourceCode } from "../../static/Projects";
import { hlight } from "../../utils/Highlighter";
import { ThemeContext } from "../../components/styling/ThemeContext";
import Navigation from "../../components/nav/Navigation";

type ProjectsProps = {};
type ProjectsState = {};

class Projects extends React.Component<ProjectsProps, ProjectsState> {
	ref: RefObject<HTMLPreElement>;

	constructor(props: ProjectsProps) {
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
			hlight(this.ref.current, projectsSourceCode[this.context.language], {
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

Projects.contextType = ThemeContext;
export default Projects;
