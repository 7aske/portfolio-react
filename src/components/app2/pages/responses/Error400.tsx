import * as React from "react";
import { createRef } from "react";
import { pageNav } from "../../utils/Utils";
import { hlight } from "../../utils/Highlighter";
import { ThemeContext } from "../../components/styling/ThemeContext";

let sourceCode = `
${pageNav(window.location.pathname)}

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
		return (<pre ref={this.ref} className="container left-align fg-accent-2"/>);
	}

}
Error400.contextType = ThemeContext;
export default Error400;
