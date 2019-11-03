import express from "express";
import webController from "./controllers/WebController";
import mailController from "./controllers/MailController";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import rateLimit from "express-rate-limit";

const env = dotenv.config();
if (env.error) {
	throw env.error;
}
console.log(env.parsed);
const SERVER_PORT = parseInt(process.env.PORT) || 3001;

const app = express();

const mailLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 2,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("build"));
app.use("/mail", mailLimiter, mailController);
app.use("/", webController);

app.listen(SERVER_PORT, () => console.log("Server running on port " + SERVER_PORT));