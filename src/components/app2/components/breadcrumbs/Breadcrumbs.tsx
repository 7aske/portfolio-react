import * as React from "react";
import { createRef } from "react";
import { urlFmt } from "../../utils/Utils";
import { hlight } from "../../utils/Highlighter";
import { ThemeContext } from "../styling/ThemeContext";

type BreadcrumbsProps = {};
type BreadcrumbsState = { crumbs: string };

class Breadcrumbs extends React.Component<BreadcrumbsProps, BreadcrumbsState> {
	ref: React.RefObject<HTMLPreElement>;

	constructor(props: BreadcrumbsProps) {
		super(props);
		this.state = {crumbs: ""};
		this.ref = createRef();
	}

	componentDidMount(): void {
		this.highlight();
	}

	highlight() {
		if (this.ref.current) {
			let spaces = "";
			for (let i = 0; i < window.location.pathname.length + 2; i++) {
				spaces += " ";
			}
			let sourceCode = `/* NAVIGATION
 * /root${window.location.pathname === "/" ? "" : window.location.pathname}
 * ${spaces}^
 * ${spaces}|
 * ${spaces.substring(12)}You are here
 */`;

			let source = hlight(sourceCode, {
				language: this.context.language,
				classPrefix: this.context.theme,
			});
			let res = source.match(/\/\w+/g);
			if (res) {
				res.forEach(match => {
					if (match !== "/span") {
						if (match === "/root") {
							source = source.replace(match, urlFmt("/", match));
						} else if (match.length > 2) {
							source = source.replace(match, urlFmt(match, match));
						}
					}
				});
			}
			this.ref.current.innerHTML = source;
		}
	}

	render() {
		return (
			<pre className="left-align container bg-dark-0" ref={this.ref}/>
		);
	};
}
Breadcrumbs.contextType = ThemeContext;
export default Breadcrumbs;
