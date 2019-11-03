import { Router } from "express";
import * as nodemailer from "nodemailer";
const mailController = Router();

mailController.post("/send", async (req, res) => {
	console.log("Mail send request");
	if (req.body.hasOwnProperty("name") &&
		req.body.hasOwnProperty("email") &&
		req.body.hasOwnProperty("message")) {
		const name = req.body["name"];
		const email = req.body["email"];
		const body = req.body["message"];
		try {
			await sendMail(name, email, body);
			res.status(200).send("200");
		} catch (e) {
			console.log(e);
			res.status(400).send("400");
		}
	} else {
		res.status(400).send("400");
	}
});

async function sendMail(name: string, email: string, body: string) {
	const username = process.env.MAILER_USERNAME;
	const password = process.env.MAILER_PASSWORD;
	const mailto = process.env.MAILER_MAILTO;

	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		auth: {
			user: username,
			pass: password,
		},
	});

	let msg = await transporter.sendMail({
		from: `"Portfolio Mailer 🤖" <${username}@gmail.com>`,
		to: mailto,
		subject: "Portfolio Message ✔",
		text: `${name}\n${email}\n\n${body}`,
		html: htmlTemplate(name, email,body),

	});
	console.log("Message sent: %s", msg.messageId);
}

function htmlTemplate(name: string, email: string, body: string): string {
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

export default mailController;
