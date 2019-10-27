import React from "react";

export class Contact extends React.Component {
	render() {
		return (
			<div id="contact">
				<div className="container">
					<h5 className="text-center">
						Feel free to contact me by filling the contact form or by visiting my social network sites.
					</h5>
					<h3>My Social Sites</h3>
					<ul className="list-inline banner-social-list">
						<li className="s12 m3 d-inline-block mb-2">
							<a href="https://github.com/7aske" target="blank" className="btn btn-lg">
								<i className="fa fa-github">
									<span className="network-name">GitHub</span>
								</i>
							</a>
						</li>
						<li className="s12 m3 d-inline-block mb-2">
							<a
								href="https://www.facebook.com/7aske"
								target="blank"
								className="btn btn-lg">
								<i className="fa fa-facebook">
									<span className="network-name">Facebook</span>
								</i>
							</a>
						</li>
						<li className="s12 m3 d-inline-block mb-2">
							<a
								href="https://www.linkedin.com/in/nikola-tasi%C4%87-87b8bb115/"
								target="_blank"
								className="btn btn-lg">
								<i className="material-icons">

								</i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
