import * as React from "react";
import { RefObject, useContext, useEffect } from "react";
import axios from "axios";
import "./contact.css";
import { themeContext } from "../../components/styling/ThemeContext";
import Navigation from "../../components/nav/Navigation";
import { contactSourceCode } from "../../static/Contact";
import { useHighlighter } from "../../../../hooks/highlighter";

const Contact = () => {
	const ref = useHighlighter(contactSourceCode) as RefObject<HTMLPreElement>;
	const context = useContext(themeContext);

	const sendMessage = async (name: string, email: string, message: string) => {
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
	};

	const handleSubmit = (ev: Event) => {
		ev.preventDefault();
		if (ev.target) {
			const tar = ev.target as unknown as HTMLFormElement;
			const name = (tar["name"] as unknown as HTMLInputElement).value;
			const email = (tar["email"] as unknown as HTMLInputElement).value;
			const message = (tar["message"] as unknown as HTMLTextAreaElement).value;
			sendMessage(name, email, message);
		}
	};

	useEffect(() => {
		if (ref.current) {
			let source = ref.current.innerHTML;
			source = "<form id='form' method='POST' action='/mail/send_message'>" + source + "</form>";
			ref.current.innerHTML = source;
			let form = ref.current.querySelector("form#form");
			ref.current.querySelectorAll("input.embedded, textarea.embedded").forEach(inp => inp.classList.add(context.theme ? context.theme + "-hljs-string" : "hljs-string"));
			if (form) {
				form.addEventListener("submit", handleSubmit);
			}
		}
	});
	return <div className="container">
		<Navigation/>
		<pre ref={ref} className="fg-accent-2 left-align"/>
	</div>;
};
export default Contact;
