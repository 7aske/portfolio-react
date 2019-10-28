import React from "react";
import "../../../../node_modules/font-awesome/css/font-awesome.css";
import "./Contact.css";

export class Contact extends React.Component {
	render() {
		return (
			<div id="contact">
				<div className="container grey darken-4">
					<h5 className="text-center text-white p-5 mt-0">
						Feel free to contact me by filling the contact form or by visiting my social network sites.
					</h5>
					<form action="">
						<div className="row">
							<div className="col s12 m3"/>
							<div className="input-field col s12 m6">
								<input placeholder="Jane Doe" id="name" type="text" className="validate"
									   required={true}/>
								<label className="active" htmlFor="name">First Name</label>
							</div>
						</div>
						<div className="row">
							<div className="col s12 m3"/>
							<div className="input-field col s12 m6">
								<input id="email" placeholder="your@email.com" type="email" className="validate"
									   required={true}/>
								<label className="active" htmlFor="email">Email</label>
								<span className="helper-text grey-text text-darken-2  text-left" data-error="wrong"
									  data-success="right">Your information will be safe.</span>
							</div>
						</div>
						<div className="row">
							<div className="col s12 m3"/>
							<div className="input-field col s12 m6">
								<textarea name="message" placeholder="Message" id="message"
										  className="materialize-textarea" required={true}/>
								<label className="active" htmlFor="message">Message</label>
							</div>
						</div>
						<button className="btn waves-effect waves-light orange black-text" type="submit"
								name="action">Send
							<i className="material-icons right">send</i>
						</button>
					</form>
					<h3 className="text-white">My Social Sites</h3>
					<div className="social-container row pt-4 pb-5">
						<div className="col m3 s12"/>
						<div className="col m6 s12">
							<a
								href="https://github.com/7aske"
								target="blank"
								className="waves-effect waves-light btn orange black-text">
								<span className="network-name">GitHub</span>
								<i className="fa fa-github">
								</i>
							</a>
							<a
								href="https://www.facebook.com/7aske"
								target="blank"
								className="waves-effect waves-light btn orange black-text">
								<span className="network-name">Facebook</span>
								<i className="fa fa-facebook">
								</i>
							</a>
							<a
								href="https://www.linkedin.com/in/nikola-tasi%C4%87-87b8bb115/"
								target="blank"
								className="waves-effect waves-light btn orange black-text">
								<span className="network-name">LinkedIn</span>
								<i className="fa fa-linkedin">
								</i>
							</a>
						</div>
						<div className="col m3 s12"/>
					</div>
				</div>
			</div>
		);
	}
}
