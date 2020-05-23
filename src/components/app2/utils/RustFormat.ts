export const pageNavFmt = (link: NavigationLink): string => {
	return `#include "/*ANCHOR[$${link.name.toLowerCase()}.h$,$${link.href}$]*/"`;
};

export const linkNavFmt = (link: NavigationLink): string => {
	return `#include "${link.name.toLowerCase()}.h"`;
};

export const skillFmt = (skill: Skill) => {
	let skillName = skill.name.replace(/ /g, "_").toUpperCase();
	let out = `static ${skillName}:u8 = 0x${skill.confidence.toString(16)};\n`;
	if (skill.frameworks) {
		skill.frameworks.forEach(fw => {
			out += `static ${skillName}_${fw.name.replace(" ", "_").toUpperCase()}:u8 = 0x${fw.confidence.toString(16)};\n`;
		});
	}
	return out;
};

export const contactFmt = (contact: Contact): string => {
	return `Contact {
    contact_type: ContactType::${contact.type.charAt(0).toUpperCase() + contact.type.substring(1)},
    value: "${contact.type === "email" ? `/*ANCHOR[$${contact.value}$,$mailto://${contact.value}$]*/` : contact.value}",
  }`;
};

export const eduFmt = (edu: Education): string => {
	return `Education {
    level: "${edu.level}",
    institution: "${edu.institution}",
    grad_date: &Year(${edu.grad_year ? edu.grad_year : 0}),
  }`;
};

export const socialFmt = (soc: Social): string => {
	return `Social {
    name: "${soc.name}",
    url: "/*ANCHOR[$${soc.url}$,$${soc.url}$]*/",
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

	return `Project {
        lang: Lang::/*TOOLTIP[$${lang_tooltip}$,$${proj.type}$]*/,
        name: "${proj.name}",
        desc: "${proj.description}",
        repo: "/*ANCHOR[$${proj.repository}$,$${proj.repository}$]*/",
    }`;
};
