import React from "react";
import SkillsList from "./skills-list/SkillsList";

const skills1 = [{
	name: "C",
	skillLevel: 70,
	sublist: [],
}, {
	name: "JavaScript",
	skillLevel: 80,
	sublist: [{name: "node.js"}, {name: "React.js"}, {name: "electron.js"}, {name: "express.js"}],
}, {
	name: "Python",
	skillLevel: 75,
	sublist: [{name: "Flask"}],
}, {
	name: "Rust",
	skillLevel: 40,
	sublist: [],
}, {
	name: "GoLang",
	skillLevel: 65,
	sublist: [],
}, {
	name: "Java",
	skillLevel: 70,
	sublist: [{name: "Spring Boot"}, {name: "Thymeleaf"}],
}, {
	name: "C++",
	skillLevel: 50,
	sublist: [],
}, {
	name: "C#",
	skillLevel: 50,
	sublist: [],
}];

const skills2 = [{
	name: "Databases",
	skillLevel: 65,
	sublist: [{name: "MongoDB"}, {name: "SQL"}],
}, {
	name: "OS",
	skillLevel: 80,
	sublist: [{name: "Linux"}, {name: "Windows"}],
}, {
	name: "Networking",
	skillLevel: 80,
	sublist: [],
}, {
	name: "MS Office",
	skillLevel: 80,
	sublist: [],
}, {
	name: "Shell",
	skillLevel: 60,
	sublist: [{name: "Bash"}],
}];

export default class Skills extends React.Component {
	render() {
		return (
			<div id="skills">
				<div className="container grey darken-4">
					<div className="row mb-0">
						<div className="col m6 s12">
							<SkillsList skills={skills1} title="Languages"/>
						</div>
						<div className="col m6 s12">
							<SkillsList skills={skills2} title="Other"/>
						</div>
					</div>
					<div className="text-left pl-3 pb-2">
						<small className="text-white">* Skill meters are the relative measure of how confident I am in
							working with a given tech.<br/>&nbsp; They dont represent any real measurement.</small>
					</div>
				</div>
			</div>
		);
	}
}
