export const pageNavFmt = (link: NavigationLink): string => {
	return `"/*ANCHOR[$${link.name.toLowerCase()}$,$${link.href}$]*/"`;
};

export const linkNavFmt = (link: NavigationLink): string => {
	return `"${link.name.toLowerCase()}"`;
};

export const skillFmt = (skill: Skill) => {
	let skillName = skill.name.replace(" ", "_").toUpperCase();
	let out = `  ${skillName} = 0x${skill.confidence.toString(16)};\n`;
	if (skill.frameworks) {
		skill.frameworks.forEach(fw => {
			out += `  ${skillName}_${fw.name.replace(" ", "_").toUpperCase()} = 0x${fw.confidence.toString(16)};\n`;
		});
	}
	return out;
};

export const contactFmt = (contact: Contact): string => {
	return `{
    Type:  ContactType("${contact.type}"),
    Value: "${contact.type === "email" ? `/*ANCHOR[$${contact.value}$,$mailto://${contact.value}$]*/` : contact.value}",
  },`;
};

export const eduFmt = (edu: Education): string => {
	return `{
    Level:        "${edu.level}",
    Institution:  "${edu.institution}",
    GradDate:     ${edu.grad_year ? edu.grad_year : 0},
  },`;
};

export const socialFmt = (soc: Social): string => {
	return `{
    Name: "${soc.name}",
    Url:  "/*ANCHOR[$${soc.url}$,$${soc.url}$]*/",
  },`;
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

	return `{
    Language:    Lang("/*TOOLTIP[$${lang_tooltip}$,$${proj.type.toLowerCase()}$]*/"),
    Name:        "${proj.name}",
    Description: "${proj.description}",
    Repository:  "/*ANCHOR[$${proj.repository}$,$${proj.repository}$]*/",
  },`;
};
