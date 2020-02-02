import c from "../../../assets/images/lang/c.png";
import py from "../../../assets/images/lang/python.png";
import go from "../../../assets/images/lang/golang.png";
import js from "../../../assets/images/lang/js.png";
import ts from "../../../assets/images/lang/ts.png";
import rust from "../../../assets/images/lang/rust.png";

const projects: Project[] = [
	{
		img: c,
		type: "C",
		name: "ccont",
		description: "Docker-like linux chroot container system with ability to build your custom containers to run apps in",
		repository: "https://github.com/7aske/ccont",
		username: "7aske",
	}, {
		img: c,
		type: "C",
		name: "agame",
		description: "SDL2 game with fancy graphics, smart-ish enemies and randomly generated mazes",
		repository: "https://github.com/7aske/agame",
		username: "7aske",
	}, {
		img: c,
		type: "C",
		name: "c_orm",
		description: "Auto generating C headers for a given DDL(database scheme) with generated functions for each to quickly bootstrap CRUD applications. Example project representing a system of libraries and their books.",
		repository: "https://github.com/7aske/c_library_orm",
		username: "7aske",
	}, {
		img: rust,
		type: "RUST",
		name: "rgs",
		description: "rgs (recheck-git-status) is a simple tool for us forgetful people. Namely what the tool does is checks a folder with git repositories for ones that have been changed but not committed. All that to avoid unnecessary merges and conflicts. Originally cgs, written in C.",
		repository: "https://github.com/7aske/rgs",
		username: "7aske",
	}, {
		img: py,
		type: "PY",
		name: "instapy-bot",
		description: "CLI bot for automated and scheduled Instagram photos uploading using instagrams private API. Uploading via private API was made possible by using slightly modified version of instapy-cli by b3nab.",
		repository: "https://github.com/7aske/instapy-bot",
		username: "7aske",
	}, {
		img: go,
		type: "GO",
		name: "goose",
		description: "Custom web-server tooled to easily deploy other web based projects (apps) using Git, inspired by Heroku. Goose is designed to be a lightweight and simple to use.",
		repository: "https://github.com/7aske/goose",
		username: "7aske",
	}, {
		img: go,
		type: "GO",
		name: "go-serve",
		description: "HTTP file system server with live reload",
		repository: "https://github.com/7aske/go-serve",
		username: "7aske",
	}, {
		img: js,
		type: "JS",
		name: "boat",
		description: "Small electron based borderless floating browser inspired by pennywise. Why is it named boat? Well boats float... Most of the time at least.",
		repository: "https://github.com/7aske/boat",
		username: "7aske",
	}, {
		img: ts,
		type: "TS",
		name: "sh",
		description: "Tiny webserver that serves my dotfiles and shell scripts for easy curl-ing on remote machines",
		repository: "https://github.com/7aske/sh",
		username: "7aske",
	},
	// , {
	// 	img: java,
	// 	name: "messaging-system",
	// 	description: "University project messaging system built from ground up in Java",
	// 	repository: "https://github.com/7aske/messaging-system",
	// 	username: "7aske",
	// }
	// , {
	// 	img: ts,
	// 	name: "web-shop",
	// 	description: "This is a work-in-progress simple web-shop completely designed and built from scratch using as least as possible frameworks for simplicity.",
	// 	repository: "https://github.com/7aske/web-swehop",
	// 	username: "7aske",
	// },
];

export default projects;
