import React from "react";
import "./Navigation.css";
import { HeaderHref, navigationLinks } from "../header/Header";
import { NavigationLink } from "./navigationLink/NavigationLink";

type NavigationState = {
	links: HeaderHref[];
};

export class Navigation extends React.Component {
	state: NavigationState;
	// private header: HTMLDivElement;
	private readonly navRef = React.createRef<HTMLDivElement>();

	constructor(props: any) {
		super(props);
		this.state = {links: navigationLinks};
	}

	componentDidMount(): void {
		// TODO: this can better, but it works
		const header = document.querySelector("#top") as HTMLDivElement;
		const sliderBottom = header!.offsetTop + header!.offsetHeight - 20;
		const skills = document.getElementById("skills");
		const skillsTrigger = skills!.offsetTop;
		const work = document.getElementById("projects");
		const workTrigger = work!.offsetTop - work!.offsetHeight / 2;
		const about = document!.getElementById("about");
		const aboutTrigger = about!.offsetTop - about!.offsetHeight / 2;
		const contact = document.getElementById("contact");
		const contactTrigger = contact!.offsetTop - contact!.offsetHeight;
		const buttons = document.querySelectorAll("nav .nav-link");
		document.addEventListener("scroll", () => {
			let y = window.pageYOffset + 132;
			if (sliderBottom < y) {
				this.navRef.current!.style.transform = "translateY(65px)";
			} else {
				this.navRef.current!.style.transform = "translateY(-65px)";
			}
			if (skillsTrigger < window.pageYOffset + 264) {
				buttons[0].classList.add("highlighted");
			} else {
				buttons[0].classList.remove("highlighted");
			}
			if (workTrigger < y) {
				buttons[0].classList.remove("highlighted");
				buttons[1].classList.add("highlighted");
			} else {
				buttons[1].classList.remove("highlighted");
			}
			if (aboutTrigger < y) {
				buttons[1].classList.remove("highlighted");
				buttons[2].classList.add("highlighted");
			} else {
				buttons[2].classList.remove("highlighted");
			}
			if (contactTrigger < y) {
				buttons[2].classList.remove("highlighted");
				buttons[3].classList.add("highlighted");
			} else {
				buttons[3].classList.remove("highlighted");
			}
		});
	}

	render() {
		return (
			<nav ref={this.navRef}>
				<div className="nav-wrapper grey darken-4 pl-2">
					<a href="#" className="brand-logo left show-on-medium-and-up hide-on-small-and-down">Nikola
						Tasic</a>
					<a href="#" className="brand-logo left show-on-small hide-on-med-and-up">NT</a>
					<ul className="right">
						{this.state.links.map((link, index) =>
							<NavigationLink href={link.href}
											name={link.name}
											icon={link.icon}
											target={link.target}
											key={index}/>)}
					</ul>
				</div>
			</nav>
		);
	}
}
