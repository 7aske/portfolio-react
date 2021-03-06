import express from "express";
import mailController from "./controllers/MailController";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";

const env = dotenv.config();
if (env.error) {
	throw env.error;
}
console.log(env.parsed);
const SERVER_PORT = parseInt(process.env.PORT) || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/*", (req, res) => res.sendFile("index.html", {root: "public"}));
app.use("/mail", mailController);

app.listen(SERVER_PORT, () => console.log("Server running on port " + SERVER_PORT));
