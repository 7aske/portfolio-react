import React from "react";
import "./NavigationLink.css";

type NavigationLinkProps = {
	href: string;
	name: string;
	icon: string;
	target: string | undefined;
}
type NavigationLinkState = {
	href: string;
	name: string;
	icon: string;
	target: string | undefined;
}

export default class NavigationLink extends React.Component<NavigationLinkProps, NavigationLinkState> {
	props: NavigationLinkProps;
	state: NavigationLinkState;
	private readonly magicNumber: number;

	constructor(props: NavigationLinkProps) {
		super(props);
		this.props = props;
		this.magicNumber = 205;
		this.state = {href: props.href, name: props.name, icon: props.icon, target: props.target};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(ev: React.MouseEvent) {
	}

	render() {
		return (
			<li>{this.state.name}&nbsp;</li>
		);
	}
}
