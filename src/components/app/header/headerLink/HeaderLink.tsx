import React from "react";
import "./HeaderLink.css"

type HeaderLinkProps = {
	href: string;
	name: string;
	icon: string;
	target ?: string;
}
type HeaderLinkState = {
	href: string;
	name: string;
	icon: string;
	target ?: string;
}

export class HeaderLink extends React.Component {
	props: HeaderLinkProps;
	state: HeaderLinkState;

	constructor(props: HeaderLinkProps) {
		super(props);
		this.props = props;
		this.state = {href: props.href, name: props.name, icon: props.icon, target: props.target};
	}

	render() {
		return (
			<a href={this.state.href} target={this.state.target} data-scrollto={this.state.href.startsWith("#") ? this.state.href : ""}
			   className="skill animated slideInUp faster white-text font-weight-bold">
				<i className="material-icons orange-text">{this.state.icon}</i><br/>{this.state.name}
			</a>
		);
	}
}
