import { Router } from "express";

const webController = Router();

webController.get("/*", (req, res) => {
	res.sendFile("index.html", {root: "build"});
});

export default webController;
