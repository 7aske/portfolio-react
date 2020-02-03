export const pageNavFmt = (link: NavigationLink): string => {
	return `#include "/*ANCHOR[$${link.name.toLowerCase()}.h$,$${link.href}$]*/"`;
};

export const linkNavFmt = (link: NavigationLink): string => {
	return `#include "${link.name.toLowerCase()}.h"`;
};

export const skillFmt = (skill: Skill) => {
	let skillName = skill.name.replace(" ", "_").toUpperCase();
	let out = `static uint8_t ${skillName} = 0x${skill.confidence.toString(16)};\n`;
	if (skill.frameworks) {
		skill.frameworks.forEach(fw => {
			out += `static uint8_t ${skillName}_${fw.name.replace(" ", "_").toUpperCase()} = 0x${fw.confidence.toString(16)};\n`;
		});
	}
	out += "\n";
	return out;
};

export const contactFmt = (contact: Contact): string => {
	return `{
    .type= "${contact.type}",
    .value= "${contact.type === "email" ? `/*ANCHOR[$${contact.value}$,$mailto://${contact.value}$]*/` : contact.value}"
  }`;
};

export const eduFmt = (edu: Education): string => {
	return `{
    .level= "${edu.level}",
    .institution= "${edu.institution}",
    .grad_date= ${edu.grad_year ? `{.tm_year= ${edu.grad_year}}` : "{}"}
  }`;
};

export const socialFmt = (soc: Social): string => {
	return `{
    .name= "${soc.name}",
    .url= "/*ANCHOR[$${soc.url}$,$${soc.url}$]*/",
  }`;
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

	// .desc= "${fold(proj.description, 60, 1)}",
	return `{
    .type= /*TOOLTIP[$${lang_tooltip}$,$${proj.type}$]*/,
    .name= "${proj.name}",
    .desc= "${proj.description}",
    .repo= "/*ANCHOR[$${proj.repository}$,$${proj.repository}$]*/"
  }`;
};
