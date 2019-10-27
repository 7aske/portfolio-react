import React from "react";
import "./App.css";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../../../node_modules/animate.css/animate.min.css";
import { Header } from "./header/Header";
import { Skills } from "./skills/Skills";
import { Divider } from "./divider/Divider";
import { Projects } from "./projects/Projects";
import { About } from "./about/About";
import { Contact } from "./contact/Contact";

function App() {
	return (
		<main className="App grey darken-3">
			<Header/>
			<Divider title="Skills"/>
			<Skills/>
			<Divider title="Projects"/>
			<Projects/>
			<Divider title="About"/>
			<About/>
			<Divider title="Contact"/>
			<Contact/>
		</main>
	);
}

export default App;
