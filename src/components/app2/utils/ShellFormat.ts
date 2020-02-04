import { fold } from "./Utils";

export const pageNavFmt = (link: NavigationLink): string => {
	return `#include "/*ANCHOR[$${link.name.toLowerCase()}.h$,$${link.href}$]*/"`;
};

export const linkNavFmt = (link: NavigationLink): string => {
	return `#include "${link.name.toLowerCase()}.h"`;
};

export const skillFmt = (skill: Skill) => {
	let skillName = skill.name.replace(" ", "_").toUpperCase();
	let out = `export ${skillName}="0x${skill.confidence.toString(16)}"\n`;
	if (skill.frameworks) {
		skill.frameworks.forEach(fw => {
			out += `export ${skillName}_${fw.name.replace(" ", "_").toUpperCase()}="0x${fw.confidence.toString(16)}"\n`;
		});
	}
	return out;
};

export const contactFmt = (contact: Contact): string => {
	return `"${contact.type.padEnd(7)} - ${contact.type === "email" ? `/*ANCHOR[%${contact.value}%,%mailto://${contact.value}%]*/` : contact.value}"`;
};

export const eduFmt = (edu: Education): string => {
	return `EDU["${edu.level}"]="${edu.institution}/${edu.grad_year ? edu.grad_year : "TBA"}"`;
};

export const socialFmt = (soc: Social): string => {
	return `SOCIAL["${soc.name}"]="/*ANCHOR[%${soc.url}%,%${soc.url}%]*/"`;
};


export const projFmt = (proj: Project) => {
	let lang_tooltip = "";
	switch (proj.type) {
		case "C":
			lang_tooltip = "C programming language";
			break;
		case "PY":
			lang_tooltip = "Python 3";
			break;
		case "JS":
			lang_tooltip = "JavaScript ES6+";
			break;
		case "GO":
			lang_tooltip = "GoLang";
			break;
		case "RUST":
			lang_tooltip = "Rust programming language";
			break;
		case "CPP":
			lang_tooltip = "C++ programming language";
			break;
		case "TS":
			lang_tooltip = "TypeScript";
			break;
		case "JAVA":
			lang_tooltip = "Java";
			break;
		case "BASH":
			lang_tooltip = "Bash scripting";
			break;

	}

	return `DESC=$(cat << END\n  "${fold(proj.description, 80, 1)}"\nEND\n)
TYPE="/*TOOLTIP[%${lang_tooltip}%,%${proj.type}%]*/"
NAME="${proj.name}"
REPO="/*ANCHOR[%${proj.repository}%,%${proj.repository}%]*/"
mkdir -p "/home/${window.location.hostname}/.local/share/projects/$NAME"
git -C "/home/${window.location.hostname}/.local/share/projects/$NAME" clone $REPO
echo -e "$DESC\\n$REPO" > "/home/${window.location.hostname}/.local/share/projects/$NAME/desc"
`;
};
