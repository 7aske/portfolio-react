import * as React from "react";
import { RefObject } from "react";
import { skillsSourceCode } from "../../static/Skills";
import Navigation from "../../components/nav/Navigation";
import { useHighlighter } from "../../../../hooks/highlighter";

const Skills = () => {
	const ref = useHighlighter(skillsSourceCode) as RefObject<HTMLPreElement>;
	return (
		<div className="container">
			<Navigation/>
			<pre ref={ref} className="fg-accent-2 left-align"/>
		</div>
	);
};

export default Skills;
