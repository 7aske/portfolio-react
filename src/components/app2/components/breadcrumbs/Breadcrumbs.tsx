import * as React from "react";
import { createRef } from "react";
import { anchorFmt } from "../../utils/Utils";
import { hlight } from "../../utils/Highlighter";
import { themeContext } from "../styling/ThemeContext";

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

	componentDidUpdate(): void {
		this.highlight();
	}

	highlight() {
		if (this.ref.current) {
			let spaces = "";
			for (let i = 0; i < window.location.pathname.length + 2; i++) {
				spaces += " ";
			}
			let cc;
			let lang: ThemeContextLanguage = this.context.language;
			switch (lang) {
				case "c":
				case "go":
					cc = "//";
					break;
				case "rust":
					cc = "///";
					break;
				case "python":
					cc = "#";
					break;
				case "bash":
					cc = "#";
					break;
			}

			let sourceCode = `${cc} NAVIGATION
${cc} /root${window.location.pathname === "/" ? "" : window.location.pathname}
${cc} ${spaces}^
${cc} ${spaces}|
${cc} ${spaces.substring(12)}You are here
${cc} 
${cc} You can change the language or 
${cc} in the upper right corner`;

			let source = hlight(this.ref.current, sourceCode, {
				language: this.context.language,
				classPrefix: this.context.theme,
			});
			let res = source.match(/\/\w+/g);
			if (res) {
				res.forEach(match => {
					if (match !== "/span") {
						if (match === "/root") {
							source = source.replace(match, anchorFmt("/", match));
						} else if (match.length > 2) {
							source = source.replace(match, anchorFmt(match, match));
						}
					}
				});
			}
			this.ref.current.innerHTML = source;
		}
	}

	render() {
		return (
			<pre className="left-align bg-dark-0" ref={this.ref}/>
		);
	};
}

Breadcrumbs.contextType = themeContext;
export default Breadcrumbs;
