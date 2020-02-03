import * as React from "react";
import { createRef, RefObject } from "react";
import { aboutSourceCode } from "../../static/About";
import { hlight } from "../../utils/Highlighter";
import { ThemeContext } from "../../components/styling/ThemeContext";
import Navigation from "../../components/nav/Navigation";

type AboutProps = {};
type AboutState = {};


class About extends React.Component<AboutProps, AboutState> {
	ref: RefObject<HTMLPreElement>;

	constructor(props: AboutProps) {
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
			hlight(this.ref.current, aboutSourceCode[this.context.language], {
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
};
About.contextType = ThemeContext;
export default About;
