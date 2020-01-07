import React from "react";
import axios from "axios";
import "../../../../node_modules/font-awesome/css/font-awesome.css";
import "./Contact.css";

type ContactProps = {};

export default class Contact extends React.Component {
	props: ContactProps;
	private readonly formRef: React.RefObject<HTMLFormElement>;
	private readonly requireInputs: boolean;

	constructor(props: ContactProps) {
		super(props);
		this.props = props;
		this.formRef = React.createRef();
		this.onSubmit = this.onSubmit.bind(this);
		this.sendMail = this.sendMail.bind(this);
		this.requireInputs = true;
	}

	async sendMail(name: string, email: string, message: string) {
		const url = new URL(window.location.href);
		url.port = (window.location.port === "0" || window.location.port === "") ? "80" : window.location.port;
		url.pathname = "/mail/send";
		try {
			const res = await axios.post(url.href, {
				name,
				email,
				message,
			});
			if (res.status === 200) {
				window.location.pathname = "/200";
			}
		} catch (e) {
			if (e.response.status === 429){
				window.location.pathname = "/429";
			}
		}
	}

	onSubmit(event: React.FormEvent) {
		event.preventDefault();
		const form = this.formRef.current as HTMLFormElement;
		const name = (form[0] as HTMLInputElement).value;
		const email = (form[1] as HTMLInputElement).value;
		const message = (form[2] as HTMLInputElement).value;
		this.sendMail(name, email, message).then(res => console.log(res)).catch(err => console.error(err));
		return false;
	}

	render() {
		return (
			<div id="contact">
				<div className="container grey darken-4">
					<h5 className="text-center text-white p-5 mt-0">
						Feel free to contact me by filling the contact form or by visiting my social network sites.
					</h5>
					<form onSubmit={this.onSubmit} ref={this.formRef}>
						<div className="row">
							<div className="col s12 m3"/>
							<div className="input-field col s12 m6">
								<input placeholder="Jane Doe" id="name" type="text" className="validate"
									   required={this.requireInputs}/>
								<label className="active" htmlFor="name">Name</label>
							</div>
						</div>
						<div className="row">
							<div className="col s12 m3"/>
							<div className="input-field col s12 m6">
								<input id="email" placeholder="your@email.com" type="email" className="validate"
									   required={this.requireInputs}/>
								<label className="active" htmlFor="email">Email</label>
								<span className="helper-text grey-text text-darken-2 text-left" data-error="wrong"
									  data-success="right">Your information will be safe.</span>
							</div>
						</div>
						<div className="row">
							<div className="col s12 m3"/>
							<div className="input-field col s12 m6">
								<textarea name="message" placeholder="Message" id="message"
										  className="materialize-textarea" required={this.requireInputs}/>
								<label className="active" htmlFor="message">Message</label>
							</div>
						</div>
						<button className="btn waves-effect waves-light deep-purple lighten-2 grey-text text-darken-4" type="submit"
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
								className="waves-effect waves-light btn deep-purple lighten-2 grey-text text-darken-4">
								<span className="network-name">GitHub</span>
								<i className="fa fa-github">
								</i>
							</a>
							<a
								href="https://www.facebook.com/7aske"
								target="blank"
								className="waves-effect waves-light btn deep-purple lighten-2 grey-text text-darken-4">
								<span className="network-name">Facebook</span>
								<i className="fa fa-facebook">
								</i>
							</a>
							<a
								href="https://www.linkedin.com/in/nikola-tasi%C4%87-87b8bb115/"
								target="blank"
								className="waves-effect waves-light btn deep-purple lighten-2 grey-text text-darken-4">
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
