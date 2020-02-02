import * as React from "react";
import { createRef, RefObject } from "react";
import { pageNav, projFmt } from "../../utils/Utils";
import projects from "../../static/Projects";
import { hlight } from "../../utils/Highlighter";
import { ThemeContext } from "../../components/styling/ThemeContext";

type ProjectsProps = {};
type ProjectsState = {};

// language=TEXT
let sourceCode = `
/*
 * Here you can find some of the more notable projects I had
 * worked on. Projects have links to their respective repos.
 */
 
${pageNav(window.location.pathname)}

enum LANG { C, PY, GO, JS, RUST, CPP, JAVA };

typedef struct project {
  enum LANG lang;
  char name[32];
  char desc[512];
  char repo[64];
  char user[16];
} proj_t;

static proj_t projects[${projects.length}] = {
   ${projects.map(proj => projFmt(proj))}
};
`;


class Projects extends React.Component<ProjectsProps, ProjectsState> {
	ref: RefObject<HTMLPreElement>;

	constructor(props: ProjectsProps) {
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
			hlight(this.ref.current, sourceCode, {
				language: this.context.language,
				classPrefix: this.context.theme,
			});
		}
	}

	render() {
		return (
			<pre className="left-align container fg-accent-2" ref={this.ref}/>
		);
	};
};

Projects.contextType = ThemeContext;
export default Projects;
