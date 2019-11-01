import React from "react";
import "./HeaderLink.css";

type HeaderLinkProps = {
	href: string;
	name: string;
	icon: string;
	target?: string;
}
type HeaderLinkState = {
	href: string;
	name: string;
	icon: string;
	target?: string;
}

export class HeaderLink extends React.Component {
	props: HeaderLinkProps;
	state: HeaderLinkState;
	private readonly magicNumber: number;
	constructor(props: HeaderLinkProps) {
		super(props);
		this.props = props;
		this.state = {href: props.href, name: props.name, icon: props.icon, target: props.target};
		this.magicNumber = 195;
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(ev: React.MouseEvent) {
		let target = (ev.target as HTMLAnchorElement).nodeName === "I" ? (ev.target as HTMLElement).parentElement as HTMLAnchorElement : ev.target as HTMLAnchorElement;
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
			<a onClick={this.handleClick} href={this.state.href} target={this.state.target}
			   data-scrollto={this.state.href.startsWith("#") ? this.state.href : ""}
			   className="skill animated slideInUp faster white-text font-weight-bold">
				<i className="material-icons orange-text">{this.state.icon}</i><br/>{this.state.name}
			</a>
		);
	}
}
