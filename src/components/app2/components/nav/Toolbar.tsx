import React, { createRef, useContext } from "react";
import { languages, themeContext, themes } from "../styling/ThemeContext";
import { Link } from "react-router-dom";
import { getThemeExt } from "../../utils/Utils";

export type HeaderHref = {
	href: string;
	name: string;
	icon: string;
	target?: string;
}

type NavigationState = {
	links: HeaderHref[];
};

const Toolbar = () => {
	const navRef = createRef<HTMLElement>();
	const context = useContext(themeContext);

	const changeTheme = ()=> {
		let index = themes.indexOf(context.theme);
		if (index === themes.length - 1) {
			context.changeTheme({theme: themes[0]});
		} else {
			context.changeTheme({theme: themes[index + 1]});
		}
	};

	const changeLang = () =>{
		let index = languages.indexOf(context.language);
		if (index === languages.length - 1) {
			context.changeTheme({language: languages[0]});
		} else {
			context.changeTheme({language: languages[index + 1]});
		}
	};
	return (
		<nav ref={navRef} className="bg-def-1" style={{userSelect: "none"}}>
			<div className="nav-wrapper container">
				<Link className="brand-logo left show-on-medium-and-up hide-on-small-and-down"
					  to={"/"}>portfolio.{getThemeExt(context.language as ThemeContextLanguage)}</Link>
				<Link className="brand-logo left show-on-small hide-on-med-and-up" to={"/"}>nt</Link>
				<ul className="right">
					<li>
						<a style={{cursor: "pointer", textDecoration: "underline"}} onClick={changeTheme}
						   className="right">{context.theme}</a>
					</li>
					<li>
						<a style={{cursor: "pointer", textDecoration: "underline"}} onClick={changeLang}
						   className="right">{context.language}</a>
					</li>
				</ul>

			</div>
		</nav>
	);
};

export default Toolbar;
