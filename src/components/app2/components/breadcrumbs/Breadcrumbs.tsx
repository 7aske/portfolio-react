import * as React from "react";
import hljs from "highlight.js";
import { createRef } from "react";
import { urlFmt } from "../../utils/Utils";

type BreadcrumbsProps = {};
type BreadcrumbsState = { crumbs: string };

export default class Breadcrumbs extends React.Component<BreadcrumbsProps, BreadcrumbsState> {
	ref: React.RefObject<HTMLPreElement>;

	constructor(props: BreadcrumbsProps) {
		super(props);
		this.state = {crumbs: ""};
		this.ref = createRef();
	}

	componentDidMount(): void {
		if (this.ref.current) {
			let spaces = "";
			for (let i =0; i < window.location.pathname.length + 2; i ++){
				spaces += " ";
			}
			let template = `/* NAVIGATION
 * /root${window.location.pathname === "/" ? "" : window.location.pathname}
 * ${spaces}^
 * ${spaces}|
 * ${spaces.substring(12)}You are here
 */`;

			let crumbs = hljs.highlight("c", template).value;
			let res = crumbs.match(/\/\w+/g);
			if (res) {
				res.forEach(match => {
					if (match !== "/span") {
						if (match === "/root") {
							crumbs = crumbs.replace(match, urlFmt("/", match));
						} else if (match.length > 2) {
							crumbs = crumbs.replace(match, urlFmt(match, match));
						}
					}
				});
			}
			console.log(res);
			this.ref.current.innerHTML = crumbs;

		}
	}


	render() {
		return (
			<pre className="left-align container bg-dark-0" ref={this.ref}/>
		);
	};
};
