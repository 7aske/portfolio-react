import navigationLinks from "../components/nav/NavigationLinks";

export const urlFmt = (href: string, name: string): string => {
	return `<a class='fg-accent-1' href='${href}'>${name}</a>`;
};

export const pageNav = (pathname: string): string => {
	return navigationLinks.filter(page => !pathname.endsWith(page.href)).map(page => pageNavFmt(page)).join("\n");
};

export const pageNavFmt = (page: NavigationLink): string => {
	return `#include "/*ANCHOR[$${page.name.toLowerCase()}.h$,$${page.href}$]*/"`;
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

export const tooltipFmt = (name: string, tooltip: string) => {
	return `<a style="cursor: help" class="tooltipped fg-accent-1" data-position="top" data-tooltip="${tooltip}">${name}</a>`;
};


export const parseAnchors = (source: string): string => {
	let safetyCheck = 100;
	let res;
	do {
		safetyCheck--;
		res = source.match(/\/\*ANCHOR\[\$(.+)\$,\$(.+)\$]\*\//);
		if (res && res.length === 3) {
			source = source.replace(res[0], urlFmt(res[2], res[1]));
		}
		if (safetyCheck === 0) {
			break;
		}
	} while (res);
	return source;
};

export const parseTooltips = (source: string): string => {
	let safetyCheck = 100;
	let res;
	do {
		safetyCheck--;
		res = source.match(/\/\*TOOLTIP\[\$(.+)\$,\$(.+)\$]\*\//);
		if (res && res.length === 3) {
			source = source.replace(res[0], tooltipFmt(res[2], res[1]));
		}
		if (safetyCheck === 0) {
			break;
		}
	} while (res);
	return source;
};

export const fmtTextarea = (name: string, placeholder: string): string => {
	return `<textarea class="bg-dark-0 embedded hljs-string browser-default" required placeholder="${placeholder}" name="${name}">${placeholder}</textarea>`;
};


export const parseTextareas = (source: string): string => {
	let safetyCheck = 100;
	let res;
	do {
		safetyCheck--;
		res = source.match(/\/\*TEXTAREA\[\$(.+)\$]\*\//);
		if (res && res.length === 2) {
			source = source.replace(res[0], fmtTextarea(res[1], "\"Your text here\""));
		}
		if (safetyCheck === 0) {
			break;
		}
	} while (res);
	return source;
};


export const fmtInput = (name: string, type: string, placeholder: string): string => {
	if (name === "email") {
		placeholder = "janedoe@example.com";
	} else if (name === "name") {
		placeholder = "Jane Doe";
	}
	return `<input class="bg-dark-0 embedded browser-default" required placeholder="${placeholder}" name="${name}" type="${type}"/>`;
};


export const parseInputs = (source: string): string => {
	let safetyCheck = 100;
	let res;
	do {
		safetyCheck--;
		res = source.match(/\/\*INPUT\[\$(.+)\$,\$(.+)\$]\*\//);
		if (res && res.length === 3) {
			source = source.replace(res[0], fmtInput(res[2], res[1], "Your input here!"));
		}
		if (safetyCheck === 0) {
			break;
		}
	} while (res);
	return source;
};

export const fmtButton = (name: string, type: string): string => {
	return `<button class="fg-accent-1 bg-dark-0"  name="${name}" type="${type}" >${name}</button>`;
};


export const parseButtons = (source: string): string => {
	let safetyCheck = 100;
	let res;
	do {
		safetyCheck--;
		res = source.match(/\/\*BUTTON\[\$(.+)\$,\$(.+)\$]\*\//);
		if (res && res.length === 3) {
			source = source.replace(res[0], fmtButton(res[1], res[2]));
		}
		if (safetyCheck === 0) {
			break;
		}
	} while (res);
	return source;
};

const isWs = (x: string): boolean => {
	let white = new RegExp(/^\s$/);
	return white.test(x.charAt(0));
};

export const fold = (str: string, maxWidth: number, tab: number): string => {
	if (window.innerWidth <= 640) {
		tab = 0;
	}
	console.log(window.innerWidth);
	let newLineStr = `"\n${"  ".repeat(tab)}"`;
	let found = false;
	let res = "";
	while (str.length > maxWidth) {
		found = false;
		for (let i = maxWidth - 1; i >= 0; i--) {
			if (isWs(str.charAt(i))) {
				res = res + [str.slice(0, i), newLineStr].join("");
				str = str.slice(i + 1);
				found = true;
				break;
			}
		}
		if (!found) {
			res += [str.slice(0, maxWidth), newLineStr].join("");
			str = str.slice(maxWidth);
		}

	}

	return res + str;
};

