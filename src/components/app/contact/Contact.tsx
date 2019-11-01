import React from "react";
import "../../../../node_modules/font-awesome/css/font-awesome.css";
import "./Contact.css";

type ContactProps = {};

export class Contact extends React.Component {
	props: ContactProps;
	private readonly formRef: React.RefObject<HTMLFormElement>;
	private readonly requireInputs: boolean;

	constructor(props: ContactProps) {
		super(props);
		this.props = props;
		this.formRef = React.createRef();
		this.onSubmit = this.onSubmit.bind(this);
		this.requireInputs = false;
	}

	async sendMail(name: string, email: string, body: string) {
	}

	htmlTemplate(name: string, email: string, body: string): string {
		return `<!doctype html>
				<html lang="en">
				<head>
				    <style>
				        body, html {
				            margin: 0;
				            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
				            color: #404040;
				            font-size: 14px;
				            font-weight: 300;
				            line-height: 22px;
				            letter-spacing: .4px;
				            background: #eee;
				            padding: 30px 0 0;
				            text-align: center;
				        }
				        .card {
				            text-align: left;
				            min-width: 300px;
				            max-width: 800px;
				            margin: 20px;
				            display: inline-block;
				            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .15);
				            position: relative;
				            transition: all .2s ease-in-out;
				        }
				        .card:hover {
				            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
				            margin-bottom: 54px;
				        }
				        .text {
				            background: #FFF;
				            padding: 20px;
				            min-height: 60px;
				        }
				    </style>
				</head>
				<body>
				    <div class="card">
				        <div class="text">
				            <h2>${name}</h2>
				            <h3><a href="mailto:${email}?body=Response"><i>${email}</i></a></h3>
				            <p>
				                ${body}
				            </p>
				        </div>
				    </div>
				</body>
				</html>`;
	}

	onSubmit(event: React.FormEvent) {
		const form = this.formRef.current as HTMLFormElement;
		const name = (form[0] as HTMLInputElement).value;
		const email = (form[1] as HTMLInputElement).value;
		const message = (form[2] as HTMLInputElement).value;
		this.sendMail(name, email, message).then(res => console.log(res)).catch(err => console.error(err));
		event.preventDefault();
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
