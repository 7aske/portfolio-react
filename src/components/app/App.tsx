import React from "react";
import "./App.css";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../../../node_modules/animate.css/animate.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Success200 from "./routes/success/Success200";
import Error400 from "./routes/errors/Error400";
import Error404 from "./routes/errors/Error404";
import Error429 from "./routes/errors/Error429";


function App() {
	return (
		<main className="App grey darken-3">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/429" component={Error429}/>
					<Route exact path="/400" component={Error400}/>
					<Route exact path="/200" component={Success200}/>
					<Route component={Error404}/>
				</Switch>
			</BrowserRouter>
		</main>
	);
}

export default App;
