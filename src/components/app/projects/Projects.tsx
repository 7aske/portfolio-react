import React from "react";
import py from "../../../assets/images/lang/python.png";
import go from "../../../assets/images/lang/golang.png";
import rust from "../../../assets/images/lang/rust.png";
import ts from "../../../assets/images/lang/ts.png";
import js from "../../../assets/images/lang/js.png";
import c from "../../../assets/images/lang/c.png";
import java from "../../../assets/images/lang/java.png";
// import cpp from "../../../assets/images/lang/c++.png";
import ProjectList from "./project-list/ProjectList";

export type ProjectType = {
	img: string;
	name: string;
	description: string;
	repository: string;
	username: string;
}

const projects: ProjectType[] = [
	{
		img: c,
		name: "ccont",
		description: "Docker-like linux chroot container system with ability to build your custom containers to run apps in",
		repository: "https://github.com/7aske/ccont",
		username: "7aske",
	}, {
		img: c,
		name: "agame",
		description: "SDL2 game with fancy graphics, smart-ish enemies and randomly generated mazes",
		repository: "https://github.com/7aske/agame",
		username: "7aske",
	}, {
		img: c,
		name: "c_orm",
		description: "Auto generating C headers for a given DDL(database scheme) with generated functions for each to quickly bootstrap CRUD applications. Example project representing a system of libraries and their books.",
		repository: "https://github.com/7aske/c_library_orm",
		username: "7aske",
	}, {
		img: py,
		name: "instapy-bot",
		description: "CLI bot for automated and scheduled Instagram photos uploading using instagrams private API. Uploading via private API was made possible by using slightly modified version of instapy-cli by b3nab.",
		repository: "https://github.com/7aske/instapy-bot",
		username: "7aske",
	}, {
		img: go,
		name: "deployment-server",
		description: "Custom web-server tooled to easily deploy other web based projects (apps) using Git, inspired by Heroku. Deployment-server is designed to be a lightweight and simple to use.",
		repository: "https://github.com/7aske/deployment-server-go",
		username: "7aske",
	}, {
		img: go,
		name: "go-serve",
		description: "HTTP file system server with live reload",
		repository: "https://github.com/7aske/go-serve",
		username: "7aske",
	}, {
		img: js,
		name: "boat",
		description: "Small electron based borderless floating browser inspired by pennywise. Why is it named boat? Well boats float... Most of the time at least.",
		repository: "https://github.com/7aske/boat",
		username: "7aske",
	}, {
		img: rust,
		name: "rgs",
		description: "rgs (recheck-git-status) is a simple tool for us forgetful people. Namely what the tool does is checks a folder with git repositories for ones that have been changed but not committed. All that to avoid unnecessary merges and conflicts. Originally cgs, written in C.",
		repository: "https://github.com/7aske/rgs",
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

export default class Projects extends React.Component {
	render() {
		return (
			<div id="projects">
				<div className="container grey darken-4">
					<div className="row pt-5 mb-0">
						<h5 className="text-white mt-0 pt-0 mb-5">Here listed are some of the more notable projects I
							worked
							on:</h5>
						<div className="col s12">
							<ProjectList projects={projects}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
