import * as React from "react";
import navigationLinks from "./NavigationLinks";
import { BrowserRouter, Link } from "react-router-dom";
import { ThemeContext } from "../styling/ThemeContext";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

type NavigationProps = { otherImports?: string[] };
type NavigationState = { navLinks: NavigationLink[] };

class Navigation extends React.Component<NavigationProps, NavigationState> {
	constructor(props: NavigationProps) {
		super(props);
		this.state = {navLinks: navigationLinks.filter(page => !window.location.pathname.endsWith(page.href))};
	}

	render() {
		return (
			<pre className="fg-accent-2 left-align">
				<Breadcrumbs/>
				{this.props.otherImports ? this.props.otherImports.map(imp => <div
					className={this.context.theme ? this.context.theme + "-hljs-meta" : "hljs-meta"}>#include
					&lt;{imp}&gt;<br/></div>) : ""}
				{this.state.navLinks.map(link => {
					if (!link.href.startsWith("http")) {
						return <div
							className={this.context.theme ? this.context.theme + "-hljs-meta" : "hljs-meta"}>#include
							"<Link
								className="fg-accent-1" to={link.href}>{link.name.toLowerCase() + ".h"}</Link>"<br/>
						</div>;
					} else {
						return <div
							className={this.context.theme ? this.context.theme + "-hljs-meta" : "hljs-meta"}>#include
							"<a
								className="fg-accent-1" href={link.href}>{link.name.toLowerCase() + ".h"}</a>"<br/>
						</div>;
					}
				})}
			</pre>
		);
	};
}

Navigation.contextType = ThemeContext;
export default Navigation;
