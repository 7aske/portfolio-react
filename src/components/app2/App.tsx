import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Error404 from "./pages/responses/Error404";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Success200 from "./pages/responses/Success200";
import Error429 from "./pages/responses/Error429";
import Error400 from "./pages/responses/Error400";
import { defaultTheme, languages, ThemeContext, themes } from "./components/styling/ThemeContext";
import Toolbar from "./components/nav/Toolbar";
import "./App.css";
import "../../assets/stylesheets/theme.css";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "./components/styling/darcula.css";
import "./components/styling/atom-one-dark.css";
import "./components/styling/solarized-dark.css";
import "./components/styling/railscasts.css";
import "./components/styling/monokai.css";

document.body.classList.add("bg-dark-0");

class App extends React.Component<any, { theme: Theme }> {
	constructor(props: any) {
		super(props);
		this.state = {
			theme: defaultTheme,
		};
		this.changeTheme = this.changeTheme.bind(this);
	}

	changeTheme(theme: Theme) {
		const params = new URLSearchParams(window.location.search);
		const curr = this.state.theme;
		for (let prop in theme) {
			if (theme.hasOwnProperty(prop)) {
				params.set(prop, theme[prop]);
				curr[prop] = theme[prop];
			}
		}
		if (window.history.pushState) {
			const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + params.toString();
			window.history.pushState({path: newurl}, "", newurl);
		}

		this.setState({theme: curr});
	}

	componentDidMount(): void {
		const params = new URLSearchParams(window.location.search);
		const language = params.get("language") as ThemeContextLanguage | null;
		const theme = params.get("theme") as ThemeContextTheme | null;
		const state = {
			theme: defaultTheme,
		};
		if (language && languages.indexOf(language)) {
			state.theme.language = language;
		}
		if (theme && themes.indexOf(theme)) {
			state.theme.theme = theme;
		}
		this.setState(state);
	}

	render() {
		return (
			<main className="App bg-dark-0">
				<ThemeContext.Provider value={this.state.theme}>
					<BrowserRouter>
						<Toolbar changeTheme={this.changeTheme}/>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route exact path="/projects" component={Projects}/>
							<Route exact path="/about" component={About}/>
							<Route exact path="/contact" component={Contact}/>
							<Route exact path="/skills" component={Skills}/>
							<Route exact path="/200" component={Success200}/>
							<Route exact path="/400" component={Error400}/>
							<Route exact path="/429" component={Error429}/>
							<Route component={Error404}/>
						</Switch>
					</BrowserRouter>
				</ThemeContext.Provider>
			</main>
		);
	}
}

export default App;
