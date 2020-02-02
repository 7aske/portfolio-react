import React from "react";
import "./App.css";
import "../../assets/stylesheets/theme.css"
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
// import "../../../node_modules/animate.css/animate.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
// import Navigation from "./components/nav/Navigation";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Projects from "./pages/projects/Projects";
import Error404 from "./pages/responses/Error404";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Success200 from "./pages/responses/Success200";
import Error429 from "./pages/responses/Error429";

document.body.classList.add("bg-dark-0");

function App() {
	return (
		<main className="App bg-dark-0">
			<BrowserRouter>
				{/*<Navigation/>*/}
				<Breadcrumbs/>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/projects" component={Projects}/>
					<Route exact path="/about" component={About}/>
					<Route exact path="/contact" component={Contact}/>
					<Route exact path="/skills" component={Skills}/>
					<Route exact path="/200" component={Success200}/>
					<Route exact path="/429" component={Error429}/>
					<Route component={Error404}/>
				</Switch>
			</BrowserRouter>
		</main>
	);
}

export default App;
