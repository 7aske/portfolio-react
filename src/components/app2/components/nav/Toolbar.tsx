import React, { createRef } from "react";
import navigationLinks from "./NavigationLinks";
import { ThemeContext, themes } from "../styling/ThemeContext";
import { Link } from "react-router-dom";

export type HeaderHref = {
	href: string;
	name: string;
	icon: string;
	target?: string;
}

type NavigationState = {
	links: HeaderHref[];
};

class Toolbar extends React.Component<any, NavigationState> {
	state: NavigationState;
	private readonly navRef = createRef<HTMLDivElement>();

	constructor(props: any) {
		super(props);
		this.state = {links: navigationLinks};
		this.changeTheme = this.changeTheme.bind(this);
	}

	componentDidMount(): void {
		console.log(this.context);
	}

	changeTheme() {
		let index = themes.indexOf(this.context.theme);
		if (index === themes.length - 1) {
			this.props.changeTheme({theme: themes[0]});
		} else {
			this.props.changeTheme({theme: themes[index + 1]});
		}
	}

	render() {
		return (
			<nav ref={this.navRef} className="bg-def-1" style={{userSelect:"none"}}>
				<div className="nav-wrapper container">
					<Link className="brand-logo left show-on-medium-and-up hide-on-small-and-down" to={"/"}>portfolio.{this.context.language}</Link>
					<Link className="brand-logo left show-on-small hide-on-med-and-up" to={"/"}>nt</Link>
					<a style={{cursor:"pointer", textDecoration:"underline"}} onClick={this.changeTheme} className="right">{this.context.theme}</a>
				</div>
			</nav>
		);
	}
}

Toolbar.contextType = ThemeContext;
export default Toolbar;
