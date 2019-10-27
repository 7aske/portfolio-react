import React from "react";
import profile from "../../../assets/images/profile.jpg";
import "./Header.css";
import "../../helpers.css";
import "../../../../node_modules/materialize-css/dist/css/materialize.min.css";
import { HeaderLink } from "./headerLink/HeaderLink";

type HeaderHref = {
	href: string;
	name: string;
	icon: string;
	target ?: string;
}

type HeaderState = {
	links: HeaderHref[];
}

export class Header extends React.Component {
	state: HeaderState;

	constructor(props: any) {
		super(props);
		this.state = {
			links: [{
				name: "Skills",
				href: "#skills",
				icon: "build",
			}, {
				name: "Projects",
				href: "#projects",
				icon: "code",
			}, {
				name: "About",
				href: "#about",
				icon: "info_outline",
			}, {
				name: "Contact",
				href: "#contact",
				icon: "contact_mail",
			}, {
				name: "Blog",
				href: "http://blog.7aske.com",
				icon: "local_cafe",
				target:"blank"
			}],
		};
	}

	render() {
		return (<header id="top">
			<div className="name-container grey darken-1">
				<div className="name-image animated slideInDown">
					<img src={profile} alt="profile"/>
				</div>
				<h3 className="name-title orange-text">Nikola Tasic</h3>
				<h4 className="name-text white-text">IT Enthusiast</h4>
				<div className="skills-container grey darken-3">
					<div className="row">
						<div className="container">
							{this.state.links.map((link, index) =>
								<HeaderLink href={link.href}
											name={link.name}
											icon={link.icon}
											target={link.target}
											key={index}/>)}
						</div>
					</div>
				</div>
			</div>
		</header>);
	}
}
