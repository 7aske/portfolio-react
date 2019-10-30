import React from "react";
import "./App.css";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../../../node_modules/animate.css/animate.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../routes/Home";
import { Navigation } from "./navigation/Navigation";
import { Header } from "./header/Header";
import { Error404 } from "../routes/errors/Error404";


function App() {
	return (
		<main className="App grey darken-3">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route component={Error404}/>
				</Switch>
			</BrowserRouter>
		</main>
	);
}

export default App;
