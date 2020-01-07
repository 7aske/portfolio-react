import React from "react";
import Header from "../header/Header";
import Divider from "../divider/Divider";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import About from "../about/About";
import Contact from "../contact/Contact";
import Navigation from "../navigation/Navigation";

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<Navigation/>
				<Header/>
				<Divider title="Skills*"/>
				<Skills/>
				<Divider title="Projects"/>
				<Projects/>
				<Divider title="About"/>
				<About/>
				<Divider title="Contact"/>
				<Contact />
			</div>
		);
	}
}
