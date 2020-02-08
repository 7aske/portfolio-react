import * as React from "react";
import { useContext, useState } from "react";
import navigationLinks from "./NavigationLinks";
import { Link } from "react-router-dom";
import { themeContext } from "../styling/ThemeContext";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

type NavigationProps = { otherImports?: string[] };

const Navigation = (props: NavigationProps) => {
	const context = useContext(themeContext);
	const [navLinks, setNavLinks] = useState(navigationLinks.filter(page => !window.location.pathname.endsWith(page.href)));

	const defaultImport = (imp: string, i: number) => {
		const clname = context.theme ? context.theme + "-hljs-meta" : "hljs-meta";
		const lang: ThemeContextLanguage = context.language;
		switch (lang) {
			case "c":
				return <div key={i} className={clname}>#include &lt;{imp}&gt;<br/></div>;
			case "rust":
				return <div key={i} className={clname}>use {imp};<br/></div>;
			case "python":
				return <div key={i} className={clname}>import {imp}<br/></div>;
			case "bash":
				return <div key={i} className={clname}>source "/etc/{imp}"<br/></div>;
		}
	};

	const linkImport = (link: NavigationLink, i: number) => {
		let clname = context.theme ? context.theme + "-hljs-meta" : "hljs-meta";
		const lang: ThemeContextLanguage = context.language;
		let linkElem;
		let text;
		switch (lang) {
			case "rust":
			case "python":
			case "go":
				text = link.name.toLowerCase();
				break;
			case "c":
				text = link.name.toLowerCase() + ".h";
				break;
			case "bash":
				text = link.name.toLowerCase() + ".sh";
				break;
		}

		if (!link.href.startsWith("http")) {
			linkElem = <Link className="fg-accent-1" to={link.href}>{text}</Link>;
		} else {
			linkElem = <a className="fg-accent-1" href={link.href}>{text}</a>;
		}
		switch (lang) {
			case "c":
				return <div key={i} className={clname}>#include "{linkElem}"<br/></div>;
			case "rust":
				return <div key={i} className={clname}>use crate::{linkElem};<br/></div>;
			case "python":
				return <div key={i} className={clname}>import {linkElem}<br/></div>;
			case "go":
				return <div key={i} className={clname}> "{linkElem}"<br/></div>;
			case "bash":
				return <div key={i} className={clname}>source "/etc/{linkElem}"<br/></div>;
		}
	};

	return (
		<pre className="fg-accent-2 left-align">
			<Breadcrumbs/>
			{context.language === "go" ? `module ${window.location.pathname.substring(1)}\n\nimport (` : ""}
			{props.otherImports ? props.otherImports.map((imp, i) => defaultImport(imp, i)) : ""}
			<br/>
			{navLinks.map((link, i) => {
				return linkImport(link, i);
			})}
			{context.language === "go" ? ")" : ""}
			</pre>
	);
};

export default Navigation;
