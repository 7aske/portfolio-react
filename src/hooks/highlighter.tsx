import { createRef, RefObject, useContext, useEffect } from "react";
import { themeContext } from "../components/app2/components/styling/ThemeContext";
import { hlight } from "../components/app2/utils/Highlighter";

export const useHighlighter = (sourceCode: { [key: string]: string } | string): RefObject<Element> => {
	const context = useContext(themeContext);
	const ref = createRef<Element>();
	useEffect(() => {
		if (ref.current && context.language) {
			if (typeof sourceCode === "string") {
				hlight(ref.current, sourceCode, {
					language: context.language,
					classPrefix: context.theme,
				});
			} else {
				hlight(ref.current, sourceCode[context.language], {
					language: context.language,
					classPrefix: context.theme,
				});
			}
		}
	}, [context.language, context.theme, ref, sourceCode]);
	return ref;
};
