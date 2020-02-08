import * as React from "react";
import { RefObject } from "react";
import { aboutSourceCode } from "../../static/About";
import Navigation from "../../components/nav/Navigation";
import { useHighlighter } from "../../../../hooks/highlighter";

const About = () => {
	const ref = useHighlighter(aboutSourceCode) as RefObject<HTMLPreElement>;
	return (
		<div className="container">
			<Navigation/>
			<pre ref={ref} className="fg-accent-2 left-align"/>
		</div>
	);
};

export default About;
