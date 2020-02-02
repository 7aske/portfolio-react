import * as React from "react";
import { createRef, RefObject } from "react";
import { homeSourceCode } from "../../static/Home";
import { ThemeContext } from "../../components/styling/ThemeContext";
import { hlight } from "../../utils/Highlighter";
import Navigation from "../../components/nav/Navigation";


type HomeProps = {};
type HomeState = {};


class Home extends React.Component<HomeProps, HomeState> {
	ref: RefObject<HTMLPreElement>;

	constructor(props: HomeProps) {
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
			hlight(this.ref.current, homeSourceCode[this.context.language], {
				language: this.context.language,
				classPrefix: this.context.theme,
			});
		}
	}

	render() {
		return (
			<div className="container">
				<Navigation otherImports={["stdio.h"]}/>
				<pre ref={this.ref} className="fg-accent-2 left-align"/>
			</div>
		);
	};
}

Home.contextType = ThemeContext;
export default Home;
