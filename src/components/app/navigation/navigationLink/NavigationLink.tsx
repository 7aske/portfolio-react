import React from "react";
import "./NavigationLink.css";

type NavigationLinkProps = {
	href: string;
	name: string;
	icon: string;
	target?: string;
}
type NavigationLinkState = {
	href: string;
	name: string;
	icon: string;
	target?: string;
}

export class NavigationLink extends React.Component {
	props: NavigationLinkProps;
	state: NavigationLinkState;
	private readonly magicNumber: number;
	constructor(props: NavigationLinkProps) {
		super(props);
		this.props = props;
		this.magicNumber = 205;
		this.state = {href: props.href, name: props.name, icon: props.icon, target: props.target};
	}

	handleClick(ev: React.MouseEvent) {
		let target = (ev.target as HTMLAnchorElement).nodeName === "I" || (ev.target as HTMLAnchorElement).nodeName === "SPAN" ? (ev.target as HTMLElement).parentElement as HTMLAnchorElement : ev.target as HTMLAnchorElement;
		if (!target.attributes.getNamedItem("data-scrollto")!.value.startsWith("#"))
			return true;
		ev.preventDefault();
		let element = document.querySelector(target.attributes.getNamedItem("data-scrollto")!.value) as HTMLDivElement;
		if (element == null) {
			window.scroll({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		} else {
			window.scroll({
				top: element.offsetTop - this.magicNumber,
				left: 0,
				behavior: "smooth",
			});
		}
	}

	render() {
		return (
			<li><a onClick={this.handleClick} href={this.state.href} target={this.state.target}
			   data-scrollto={this.state.href.startsWith("#") ? this.state.href : ""}
			   className="nav-link animated slideInUp faster white-text font-weight-bold">
				<span className="hide-on-med-and-down hide-on-small-and-down">{this.state.name}</span><i className="material-icons orange-text">{this.state.icon}</i>
			</a></li>
		);
	}
}