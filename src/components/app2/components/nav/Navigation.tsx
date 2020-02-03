import * as React from "react";
import navigationLinks from "./NavigationLinks";
import { Link } from "react-router-dom";
import { ThemeContext } from "../styling/ThemeContext";
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
				// return <div key={i} className={clname}>#include &lt;{imp}&gt;<br/></div>;
				return "";

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

		}


	}

	render() {
		return (
			<pre className="fg-accent-2 left-align">
				<Breadcrumbs/>
				{this.props.otherImports ? this.props.otherImports.map((imp, i) => this.defaultImport(imp, i)) : ""}
				<br/>
				{this.state.navLinks.map((link, i) => {
					return this.linkImport(link, i);
				})}
			</pre>
		);
	};
}

Navigation.contextType = ThemeContext;
export default Navigation;
