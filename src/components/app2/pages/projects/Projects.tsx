import * as React from "react";
import { RefObject } from "react";
import { projectsSourceCode } from "../../static/Projects";
import Navigation from "../../components/nav/Navigation";
import { useHighlighter } from "../../../../hooks/highlighter";

const Projects = () => {
	const ref = useHighlighter(projectsSourceCode) as RefObject<HTMLPreElement>;
	return (
		<div className="container">
			<Navigation/>
			<pre ref={ref} className="fg-accent-2 left-align"/>
		</div>
	);
};

export default Projects;
