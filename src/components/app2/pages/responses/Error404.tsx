import * as React from "react";
import { createRef } from "react";
import { pageNav } from "../../utils/Utils";
import { hlight } from "../../utils/Highlighter";
import { ThemeContext } from "../../components/styling/ThemeContext";
import Navigation from "../../components/nav/Navigation";

let sourceCode = `
#define ERR_TYP "404 NOT FOUND"
#define ERR_MSG "Page not found."
#define ERR_ALT "Go back to /*ANCHOR[$/root$,$/$]*/"

/*
 * Tap the 'go_back' function declaration to go back to home page
 * @param 'path' - redirects the browser to path
 */
extern void /*ANCHOR[$go_back$,$/$]*/(const char* path);
`;

class Error404 extends React.Component<any, any> {
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
				<Navigation otherImports={["nav.h"]}/>
				<pre ref={this.ref} className="fg-accent-2 left-align"/>
			</div>
		);
	}

}

Error404.contextType = ThemeContext;
export default Error404;
