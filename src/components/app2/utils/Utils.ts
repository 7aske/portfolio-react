import navigationLinks from "../components/nav/NavigationLinks";
import * as cfmt from "./CFormat";
import * as rsfmt from "./RustFormat";
import * as pyfmt from "./PythonFormat";
import * as gofmt from "./GoLangFormat";
import * as shfmt from "./ShellFormat";

export const getThemeExt = (lang:ThemeContextLanguage):string =>{
	switch (lang) {
		case "c":
			return "c";
		case "rust":
			return "rs";
		case "python":
			return "py";
		case "go":
			return "go";
		case "bash":
			return "sh";
	}
};

export const pageNavFmt = (link: NavigationLink, lang: ThemeContextLanguage): string => {
	switch (lang) {
		case "c":
			return cfmt.pageNavFmt(link);
		case "rust":
			return rsfmt.pageNavFmt(link);
		case "python":
			return pyfmt.pageNavFmt(link);
		case "go":
			return gofmt.pageNavFmt(link);
		case "bash":
			return shfmt.pageNavFmt(link);

	}
};

export const linkNavFmt = (link: NavigationLink, lang: ThemeContextLanguage): string => {
	switch (lang) {
		case "c":
			return cfmt.linkNavFmt(link);
		case "rust":
			return rsfmt.linkNavFmt(link);
		case "python":
			return pyfmt.linkNavFmt(link);
		case "go":
			return gofmt.linkNavFmt(link);
		case "bash":
			return shfmt.linkNavFmt(link);

	}
};

export const skillFmt = (skill: Skill, lang: ThemeContextLanguage):string => {
	switch (lang) {
		case "c":
			return cfmt.skillFmt(skill);
		case "rust":
			return rsfmt.skillFmt(skill);
		case "python":
			return pyfmt.skillFmt(skill);
		case "go":
			return gofmt.skillFmt(skill);
		case "bash":
			return shfmt.skillFmt(skill);

	}
};

export const contactFmt = (contact: Contact, lang: ThemeContextLanguage): string => {
	switch (lang) {
		case "c":
			return cfmt.contactFmt(contact);
		case "rust":
			return rsfmt.contactFmt(contact);
		case "python":
			return pyfmt.contactFmt(contact);
		case "go":
			return gofmt.contactFmt(contact);
		case "bash":
			return shfmt.contactFmt(contact);

	}
};

export const eduFmt = (edu: Education, lang: ThemeContextLanguage): string => {
	switch (lang) {
		case "c":
			return cfmt.eduFmt(edu);
		case "rust":
			return rsfmt.eduFmt(edu);
		case "python":
			return pyfmt.eduFmt(edu);
		case "go":
			return gofmt.eduFmt(edu);
		case "bash":
			return shfmt.eduFmt(edu);

	}
};

export const socialFmt = (soc: Social, lang: ThemeContextLanguage): string => {
	switch (lang) {
		case "c":
			return cfmt.socialFmt(soc);
		case "rust":
			return rsfmt.socialFmt(soc);
		case "python":
			return pyfmt.socialFmt(soc);
		case "go":
			return gofmt.socialFmt(soc);
		case "bash":
			return shfmt.socialFmt(soc);

	}
};


export const projFmt = (proj: Project, lang: ThemeContextLanguage):string => {
	switch (lang) {
		case "c":
			return cfmt.projFmt(proj);
		case "rust":
			return rsfmt.projFmt(proj);
		case "python":
			return pyfmt.projFmt(proj);
		case "go":
			return gofmt.projFmt(proj);
		case "bash":
			return shfmt.projFmt(proj);
	}

};

export const pageNav = (pathname: string, lang: ThemeContextLanguage): string => {
	return navigationLinks.filter(page => !pathname.endsWith(page.href)).map(page => pageNavFmt(page, lang)).join("\n");
};

// ANCHORS

export const anchorFmt = (href: string, name: string): string => {
	return `<a class='fg-accent-1' href='${href}'>${name}</a>`;
};


export const parseAnchors = (source: string): string => {
	let safetyCheck = 100;
	let res;
	do {
		safetyCheck--;
		res = source.match(/\/\*ANCHOR\[[$%](.+)[$%],[$%](.+)[$%]]\*\//);
		if (res && res.length === 3) {
			source = source.replace(res[0], anchorFmt(res[2], res[1]));
		}
		if (safetyCheck === 0) {
			break;
		}
	} while (res);
	return source;
};

// ANCHORS

// TOOLTIPS

export const tooltipFmt = (name: string, tooltip: string) => {
	return `<a style="cursor: help" class="tooltipped fg-accent-1" data-position="top" data-tooltip="${tooltip}">${name}</a>`;
};

export const parseTooltips = (source: string): string => {
	let safetyCheck = 100;
	let res;
	do {
		safetyCheck--;
		res = source.match(/\/\*TOOLTIP\[[$%](.+)[$%],[$%](.+)[$%]]\*\//);
		if (res && res.length === 3) {
			source = source.replace(res[0], tooltipFmt(res[2], res[1]));
		}
		if (safetyCheck === 0) {
			break;
		}
	} while (res);
	return source;
};

// END TOOLTIPS

// TEXTAREAS

export const fmtTextarea = (name: string, placeholder: string): string => {
	return `<textarea class="bg-dark-0 embedded hljs-string browser-default" required placeholder="${placeholder}" name="${name}">${placeholder}</textarea>`;
};


export const parseTextareas = (source: string): string => {
	let safetyCheck = 100;
	let res;
	do {
		safetyCheck--;
		res = source.match(/\/\*TEXTAREA\[[$%](.+)[$%]]\*\//);
		if (res && res.length === 2) {
			source = source.replace(res[0], fmtTextarea(res[1], "\"Your text here\""));
		}
		if (safetyCheck === 0) {
			break;
		}
	} while (res);
	return source;
};

// END TEXTAREAS

// INPUTS

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
		res = source.match(/\/\*INPUT\[[$%](.+)[$%],[$%](.+)[$%]]\*\//);
		if (res && res.length === 3) {
			source = source.replace(res[0], fmtInput(res[2], res[1], "Your input here!"));
		}
		if (safetyCheck === 0) {
			break;
		}
	} while (res);
	return source;
};

// END INPUTS

// BUTTONS

export const fmtButton = (name: string, type: string): string => {
	return `<button class="fg-accent-1 bg-dark-0"  name="${name}" type="${type}" >${name}</button>`;
};


export const parseButtons = (source: string): string => {
	let safetyCheck = 100;
	let res;
	do {
		safetyCheck--;
		res = source.match(/\/\*BUTTON\[[$%](.+)[$%],[$%](.+)[$%]]\*\//);
		if (res && res.length === 3) {
			source = source.replace(res[0], fmtButton(res[1], res[2]));
		}
		if (safetyCheck === 0) {
			break;
		}
	} while (res);
	return source;
};

// END BUTTONS

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

