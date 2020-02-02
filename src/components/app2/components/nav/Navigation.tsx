import React, {createRef} from "react";
import navigationLinks from "./NavigationLinks";

export type HeaderHref = {
	href: string;
	name: string;
	icon: string;
	target?: string;
}

type NavigationState = {
	links: HeaderHref[];
};

export default class Navigation extends React.Component<any, NavigationState> {
	state: NavigationState;
	private readonly navRef = createRef<HTMLDivElement>();
	private readonly magicNumber: number;

	constructor(props: any) {
		super(props);
		this.magicNumber = 264;
		this.state = {links: navigationLinks};
	}

	componentDidMount(): void {
	}

	render() {
		return (
			<nav ref={this.navRef} className="bg-def-1">
				<div className="nav-wrapper container">
					<a href="/" className="brand-logo left show-on-medium-and-up hide-on-small-and-down">portfolio.c</a>
					<a href="/" className="brand-logo left show-on-small hide-on-med-and-up">NT</a>
				</div>
			</nav>
		);
	}
}
