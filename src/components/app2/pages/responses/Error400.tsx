import * as React from "react";
import { RefObject } from "react";
import Navigation from "../../components/nav/Navigation";
import { useHighlighter } from "../../../../hooks/highlighter";

let sourceCode = `
#define ERR_TYP "400 BAD REQUEST"
#define ERR_MSG "Check your inputs please."
#define ERR_ALT "Go back to /*ANCHOR[$/root$,$/$]*/"

/*
 * Tap the 'go_back' function declaration to go back to home page
 * @param 'path' - redirects the browser to path
 */
extern void /*ANCHOR[$go_back$,$/$]*/(const char* path);
`;

const Error400 = () => {
	const ref = useHighlighter(sourceCode) as RefObject<HTMLPreElement>;

	return (
		<div className="container">
			<Navigation/>
			<pre ref={ref} className="fg-accent-2 left-align"/>
		</div>
	);
};


export default Error400;
