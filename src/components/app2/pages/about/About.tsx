import * as React from "react";
import hljs from "highlight.js";
import { contactFmt, eduFmt, pageNav, parseAnchors } from "../../utils/Utils";
import { createRef, RefObject } from "react";
import { aboutContact, aboutDescription, aboutEducation } from "../../static/About";
import resume from "../../../../assets/pdf/resume.pdf"
type AboutProps = {};
type AboutState = {};
//static char* about = "${fold(aboutDescription, 80, 1)}";

// language=TEXT
let sourceCode = `
#include <time.h>

${pageNav(window.location.pathname)}


static char* about = "${aboutDescription}";

typedef struct education {
	char level[64];
	char institution[128];
	struct tm grad_date;
} edu_t;

/*
 * You can download the copy of my resume by clicking on the function declaration.
 * @returns - returns the buffer containing the contents of file
 *            pointed to by'fileptr'
 */
static void /*ANCHOR[$download_resume$,$${resume}$]*/(FILE* fileptr);

static edu_t education[${aboutEducation.length}] = {
  ${aboutEducation.map(edu => eduFmt(edu))}
}

typedef struct contact {
	char type[16];
	char value[64];
} contact_t;

static contact_t contact_info[${aboutContact.length}] = {
  ${aboutContact.map(c => contactFmt(c))}
}
`;

export default class About extends React.Component<AboutProps, AboutState> {
	ref: RefObject<HTMLPreElement>;

	constructor(props: AboutProps) {
		super(props);
		this.ref = createRef();
	}

	componentDidMount(): void {
		if (this.ref.current) {
			let highlighted = hljs.highlight("c", sourceCode).value;
			highlighted = parseAnchors(highlighted);
			this.ref.current.innerHTML = highlighted;
		}
	}

	render() {
		return (
			<pre ref={this.ref} className="container left-align fg-accent-2" />
		);
	};
};
