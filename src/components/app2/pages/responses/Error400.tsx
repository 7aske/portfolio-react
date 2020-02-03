import * as React from "react";
import { createRef } from "react";
import { hlight } from "../../utils/Highlighter";
import { ThemeContext } from "../../components/styling/ThemeContext";
import Navigation from "../../components/nav/Navigation";

let sourceCode = `
#define ERR_TYP "400 BAD REQUEST"
#define ERR_MSG "Check your inputs please."
#define ERR_ALT "Go back to /*ANCHOR[$/root$,$/$]*/"

/*
 * Tap the 'go_back' function declaration to go back to home page
 * @param 'path' - redirects the browser to path
 */
extern void /*ANCHOR[$go_back$,$/$]*/(const char* path);
`;

class Error400 extends React.Component<any, any> {
	ref: React.RefObject<HTMLPreElement>;

	constructor(props: any) {
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
			<div className="container">
				<Navigation />
				<pre ref={this.ref} className="fg-accent-2 left-align"/>
			</div>
		);
	}

}

Error400.contextType = ThemeContext;
export default Error400;
