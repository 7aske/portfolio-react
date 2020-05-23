import { skillFmt } from "../utils/Utils";

export const skills: Skill[] = [{
	name: "C",
	confidence: 80,
	frameworks: [],
}, {
	name: "JavaScript",
	confidence: 80,
	frameworks: [{
		name: "Node",
		confidence: 80,
	}, {
		name: "React",
		confidence: 75,
	}, {
		name: "Express",
		confidence: 81,
	}, {
		name: "Electron",
		confidence: 72,
	}, {
		name: "Typescript",
		confidence: 70,
	}],
}, {
	name: "Python",
	confidence: 75,
	frameworks: [{
		name: "Flask",
		confidence: 67,
	}],
}, {
	name: "Rust",
	confidence: 63,
}, {
	name: "Go",
	confidence: 66,
	frameworks: [{
		name: "gorilla",
		confidence: 48,
	}],
}, {
	name: "Java",
	confidence: 70,
	frameworks: [{
		name: "Spring Boot",
		confidence: 44,
	}, {
		name: "Thymeleaf",
		confidence: 50,
	}, {
		name: "JSP",
		confidence: 55,
	}],
}, {
	name: "C Plus Plus",
	confidence: 70,
}, {
	name: "C Sharp",
	confidence: 50
}, {
	name: "Databases",
	confidence: 75,
	frameworks: [{
		name: "MySQL",
		confidence: 75,
	}, {
		name: "MongoDB",
		confidence: 70,
	}],
}, {
	name: "System Administration",
	confidence: 80,
	frameworks: [{
		name: "Linux",
		confidence: 82,
	}, {
		name: "FreeBSD",
		confidence: 40,
	}, {
		name: "Windows",
		confidence: 60,
	}],
}, {
	name: "Scripting",
	confidence: 70,
	frameworks: [{
		name: "Bash",
		confidence: 72,
	}, {
		name: "Python",
		confidence: 70,
	}],
}, {
	name: "Networking",
	confidence: 75,
}];

// language=TEXT
let cSourceCode = `
/*
 * These represent confidence I have in a certain
 * language, technology or framework.
 * Confidence values range from 0x00 to 0x${(100).toString(16)}.
 * Naturally numbers are in hex.
 */

${skills.map(skill => skillFmt(skill, "c")).join("\n")}
`;

// language=TEXT
let rsSourceCode = `
///
/// These represent confidence I have in a certain
/// language, technology or framework.
/// Confidence values range from 0x00 to 0x${(100).toString(16)}.
/// Naturally numbers are in hex.
///

${skills.map(skill => skillFmt(skill, "rust")).join("\n")}
`;

// language=TEXT
let pySourceCode = `
# 
#  These represent confidence I have in a certain
#  language, technology or framework.
#  Confidence values range from 0x00 to 0x${(100).toString(16)}.
#  Naturally numbers are in hex.
# 

${skills.map(skill => skillFmt(skill, "python")).join("\n")}
`;

// language=TEXT
let goSourceCode = `
/* 
 *  These represent confidence I have in a certain
 *  language, technology or framework.
 *  Confidence values range from 0x00 to 0x${(100).toString(16)}.
 *  Naturally numbers are in hex.
 */ 
const (
${skills.map(skill => skillFmt(skill, "go")).join("\n")}
)
`;

// language=TEXT
let shSourceCode = `
# 
#  These represent confidence I have in a certain
#  language, technology or framework.
#  Confidence values range from 0x00 to 0x${(100).toString(16)}.
#  Naturally numbers are in hex.
# 
${skills.map(skill => skillFmt(skill, "bash")).join("\n")}
`;

export const skillsSourceCode: { [key: string]: string } = {
	c: cSourceCode,
	rust: rsSourceCode,
	python: pySourceCode,
	go: goSourceCode,
	bash: shSourceCode,
};

