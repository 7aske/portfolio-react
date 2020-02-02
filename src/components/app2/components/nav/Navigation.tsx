import React, { createRef } from "react";
import navigationLinks from "./NavigationLinks";
import { ThemeContext, themes } from "../styling/ThemeContext";

export type HeaderHref = {
	href: string;
	name: string;
	icon: string;
	target?: string;
}

type NavigationState = {
	links: HeaderHref[];
};

class Navigation extends React.Component<any, NavigationState> {
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
					<a href="/"
					   className="brand-logo left show-on-medium-and-up hide-on-small-and-down">portfolio.{this.context.language}</a>
					<a href="/" className="brand-logo left show-on-small hide-on-med-and-up">NT</a>
					<a style={{cursor:"pointer"}} onClick={this.changeTheme} className="right">{this.context.theme}</a>
				</div>
			</nav>
		);
	}
}

Navigation.contextType = ThemeContext;
export default Navigation;
