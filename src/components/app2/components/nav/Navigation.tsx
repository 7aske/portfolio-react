import * as React from "react";
import navigationLinks from "./NavigationLinks";
import { Link } from "react-router-dom";
import { themeContext } from "../styling/ThemeContext";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

type NavigationProps = { otherImports?: string[] };
type NavigationState = { navLinks: NavigationLink[] };


class Navigation extends React.Component<NavigationProps, NavigationState> {
	constructor(props: NavigationProps) {
		super(props);
		this.state = {navLinks: navigationLinks.filter(page => !window.location.pathname.endsWith(page.href))};
	}

	defaultImport(imp: string, i: number) {
		const clname = this.context.theme ? this.context.theme + "-hljs-meta" : "hljs-meta";
		const lang: ThemeContextLanguage = this.context.language;
		switch (lang) {
			case "c":
				return <div key={i} className={clname}>#include &lt;{imp}&gt;<br/></div>;
			case "rust":
				return <div key={i} className={clname}>use {imp};<br/></div>;
			case "python":
				return <div key={i} className={clname}>import {imp}<br/></div>;
		}
	}

	linkImport(link: NavigationLink, i: number) {
		let clname = this.context.theme ? this.context.theme + "-hljs-meta" : "hljs-meta";
		const lang: ThemeContextLanguage = this.context.language;
		let elem;
		let text;
		switch (lang) {
			case "c":
				text = link.name.toLowerCase() + ".h";
				break;
			case "rust":
				text = link.name.toLowerCase();
				break;
			case "python":
				text = link.name.toLowerCase();
				break;
			case "go":
				text = link.name.toLowerCase();
				break;
			case "bash":
				text = link.name.toLowerCase()+".sh";
				break;

		}
		if (!link.href.startsWith("http")) {
			elem = <Link className="fg-accent-1" to={link.href}>{text}</Link>;
		} else {
			elem = <a className="fg-accent-1" href={link.href}>{text}</a>;
		}
		switch (lang) {
			case "c":
				return <div key={i} className={clname}>#include "{elem}"<br/></div>;
			case "rust":
				return <div key={i} className={clname}>use crate::{elem};<br/></div>;
			case "python":
				return <div key={i} className={clname}>import {elem}<br/></div>;
			case "go":
				return <div key={i} className={clname}>  "{elem}"<br/></div>;
			case "bash":
				return <div key={i} className={clname}>source  "/etc/{elem}"<br/></div>;

		}


	}

	render() {
		return (
			<pre className="fg-accent-2 left-align">
				<Breadcrumbs/>
				{this.context.language === "go" ?`module ${window.location.pathname.substring(1)}\n\nimport (` : ""}
				{this.props.otherImports ? this.props.otherImports.map((imp, i) => this.defaultImport(imp, i)) : ""}
				<br/>
				{this.state.navLinks.map((link, i) => {
					return this.linkImport(link, i);
				})}
				{this.context.language === "go" ?")" : ""}
			</pre>
		);
	};
}

Navigation.contextType = themeContext;
export default Navigation;
