import * as React from "react";
import { createRef, RefObject } from "react";
import axios from "axios";
import "./contact.css";
import { hlight } from "../../utils/Highlighter";
import { ThemeContext } from "../../components/styling/ThemeContext";
import Navigation from "../../components/nav/Navigation";
import { contactSourceCode } from "../../static/Contact";

type ContactProps = {};
type ContactState = {};

class Contact extends React.Component<ContactProps, ContactState> {
	ref: RefObject<HTMLPreElement>;
	form: HTMLFormElement | null;

	constructor(props: ContactProps) {
		super(props);
		this.ref = createRef();
		this.sendMessage = this.sendMessage.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.form = null;
	}

	componentDidMount(): void {
		this.highlight();
	}

	componentDidUpdate(): void {
		this.highlight();
	}


	highlight() {
		if (this.ref.current) {
			let source = hlight(this.ref.current, contactSourceCode[this.context.language], {
				language: this.context.language,
				classPrefix: this.context.theme,
			});
			source = "<form id='form' method='POST' action='/mail/send_message'>" + source + "</form>";
			this.ref.current.innerHTML = source;
			this.form = this.ref.current.querySelector("form#form");
			this.ref.current.querySelectorAll("input.embedded, textarea.embedded").forEach(inp => inp.classList.add(this.context.theme ? this.context.theme + "-hljs-string" : "hljs-string"));
			if (this.form) {
				this.form.addEventListener("submit", this.handleSubmit);
			}
		}
	}

	async sendMessage(name: string, email: string, message: string) {
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
			if (e.response.status === 429) {
				window.location.pathname = "/429";
			} else if (e.response.status === 400) {
				window.location.pathname = "/400";
			}

		}
	}


	handleSubmit(ev: Event) {
		ev.preventDefault();
		if (ev.target) {
			const tar = ev.target as unknown as HTMLFormElement;
			const name = (tar["name"] as unknown as HTMLInputElement).value;
			const email = (tar["name"] as unknown as HTMLInputElement).value;
			const messenger = (tar["name"] as unknown as HTMLTextAreaElement).value;
			this.sendMessage(name, email, messenger);
		}
	}

	render() {
		return (
			<div className="container">
				<Navigation/>
				<pre ref={this.ref} className="fg-accent-2 left-align"/>
			</div>
		);
	};
};

Contact.contextType = ThemeContext;
export default Contact;
