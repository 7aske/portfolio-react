import React from "react";

export default class Error429 extends React.Component {
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
								<span className="hide-on-med-and-down hide-on-small-and-down mr-2">Blog</span><i className="material-icons deep-purple-text text-lighten-2 ml-0">local_cafe</i>
							</a></li>
						</ul>
					</div>
				</nav>
				<div className="container pt-5" style={{height:"100vh"}}>
					<div className="p-2 pt-5 text-left text-white">
						<h1 className="text mt-5 mb-5">໒( ಥ Ĺ̯ ಥ )७ <br className="hide-on-med-and-up show-on-medium-and-down"/><small>Too Many Requests 429</small></h1>
						<p style={{fontSize:"24px"}}>Okay lets not spam my inbox. I will reply as soon as possible.</p>
						<h4><a href="/" className="deep-purple-text text-lighten-2" >Go back</a></h4>
					</div>
				</div>
			</div>
		);
	}
}
