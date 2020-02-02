import * as React from "react";
import { createRef, RefObject } from "react";
import hljs from "highlight.js";
import { pageNav, parseAnchors, parseTooltips, projFmt } from "../../utils/Utils";
import projects from "../../static/Projects";
import * as M from "materialize-css";

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


export default class Projects extends React.Component<ProjectsProps, ProjectsState> {
	ref: RefObject<HTMLPreElement>;

	constructor(props: ProjectsProps) {
		super(props);
		this.ref = createRef();
	}

	componentDidMount(): void {
		if (this.ref.current) {
			let highlighted = hljs.highlight("c", sourceCode).value;
			highlighted = parseAnchors(highlighted);
			highlighted = parseTooltips(highlighted);
			this.ref.current.innerHTML = highlighted;
			M.Tooltip.init(document.querySelectorAll(".tooltipped"), {});
		}
	}

	render() {
		return (
			<pre className="left-align container fg-accent-2" ref={this.ref}/>
		);
	};
};
