import React from "react";

export default class Error400 extends React.Component {
	render() {
		return (
			<div>
				<nav style={{transform:"translateY(64px)"}}>
					<div className="nav-wrapper grey darken-4 pl-2">
						<a href="/" className="brand-logo left show-on-medium-and-up hide-on-small-and-down">Nikola
							Tasic</a>
						<a href="/" className="brand-logo left show-on-small hide-on-med-and-up">NT</a>
						<ul className="right">
							<li><a href="http://blog.7aske.com" target="blank"
								   className="nav-link animated slideInUp faster white-text font-weight-bold">
								<span className="hide-on-med-and-down hide-on-small-and-down mr-2">Blog</span><i className="material-icons orange-text ml-0">local_cafe</i>
							</a></li>
						</ul>
					</div>
				</nav>
				<div className="container pt-5" style={{height:"100vh"}}>
					<div className="p-2 pt-5 text-left text-white">
						<h1 className="text mt-5 mb-5">ლ(▀̿̿Ĺ̯̿̿▀̿ლ) <br className="hide-on-med-and-up show-on-medium-and-down"/><small>Bad Request 400</small></h1>
						<p style={{fontSize:"24px"}}>Seems like your entered some weird data.</p>
						<h4><a href="/" className="orange-text" >Go back</a></h4>
					</div>
				</div>
			</div>
		);
	}
}
