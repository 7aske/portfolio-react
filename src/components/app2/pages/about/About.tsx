import * as React from "react";
import { createRef, RefObject } from "react";
import { contactFmt, eduFmt, pageNav } from "../../utils/Utils";
import { aboutContact, aboutDescription, aboutEducation } from "../../static/About";
import resume from "../../../../assets/pdf/resume.pdf";
import { hlight } from "../../utils/Highlighter";
import { ThemeContext } from "../../components/styling/ThemeContext";

type AboutProps = {};
type AboutState = {};
//static char* about = "${fold(aboutDescription, 80, 1)}";

// language=TEXT
let sourceCode = `
#include <time.h>

#include "io/resume.h"
${pageNav(window.location.pathname)}

static char about[1024] = "${aboutDescription}";

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
extern void /*ANCHOR[$download_resume$,$${resume}$]*/(FILE* fileptr);

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

class About extends React.Component<AboutProps, AboutState> {
	ref: RefObject<HTMLPreElement>;

	constructor(props: AboutProps) {
		super(props);
		this.ref = createRef();
	}

	componentDidMount(): void {
		this.highlight();
	}
	componentDidUpdate(): void {
		this.highlight();
	}


	highlight() {
		if (this.ref.current) {
			this.ref.current.innerHTML = hlight(sourceCode, {
				language: this.context.language,
				classPrefix: this.context.theme,
			});
		}
	}
	render() {
		return (
			<pre ref={this.ref} className="container left-align fg-accent-2"/>
		);
	};
};
About.contextType = ThemeContext;
export default About;
