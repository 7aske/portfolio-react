import React from "react";
import { Header } from "../app/header/Header";
import { Divider } from "../app/divider/Divider";
import { Skills } from "../app/skills/Skills";
import { Projects } from "../app/projects/Projects";
import { About } from "../app/about/About";
import { Contact } from "../app/contact/Contact";
import { Navigation } from "../app/navigation/Navigation";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Navigation/>
				<Header/>
				<Divider title="Skills"/>
				<Skills/>
				<Divider title="Projects"/>
				<Projects/>
				<Divider title="About"/>
				<About/>
				<Divider title="Contact"/>
				<Contact/>
			</div>
		);
	}
}
