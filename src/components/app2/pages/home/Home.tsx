import * as React from "react";
import { createRef, useContext, useEffect } from "react";
import { homeSourceCode } from "../../static/Home";
import { themeContext } from "../../components/styling/ThemeContext";
import { hlight } from "../../utils/Highlighter";
import Navigation from "../../components/nav/Navigation";

const Home = () => {
	const context = useContext(themeContext);
	const ref = createRef<HTMLPreElement>();
	useEffect(() => {
		if (ref.current && context.language) {
			hlight(ref.current, homeSourceCode[context.language], {
				language: context.language,
				classPrefix: context.theme,
			});
		}
	});
	return (
		<div className="container">
			<Navigation/>
			<pre ref={ref} className="fg-accent-2 left-align"/>
		</div>
	);
};
export default Home;
