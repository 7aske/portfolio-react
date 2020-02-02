import hljs from "highlight.js";
import { parseAnchors, parseButtons, parseInputs, parseTextareas, parseTooltips } from "./Utils";
import M from "materialize-css";


type HighlighterOptions = {
	language: string;
	classPrefix?: string;
	useBR?: boolean;
}

export const hlight = (elem: Element, code: string, options: HighlighterOptions): string => {
	hljs.configure({classPrefix: options.classPrefix ? options.classPrefix + "-hljs-" : "hljs-", useBR: options.useBR});
	let highlighted = hljs.highlight("c", code).value;
	highlighted = parseAnchors(highlighted);
	highlighted = parseTooltips(highlighted);
	highlighted = parseButtons(highlighted);
	highlighted = parseTextareas(highlighted);
	highlighted = parseInputs(highlighted);
	elem.innerHTML = highlighted;
	document.querySelectorAll(".material-tooltip").forEach(tt => tt.remove());
	M.Tooltip.init(document.querySelectorAll(".tooltipped"), {});
	return highlighted;
};

