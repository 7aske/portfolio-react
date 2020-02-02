import * as React from "react";
import { createRef, RefObject } from "react";
import { pageNav, socialFmt } from "../../utils/Utils";
import { socialMedia } from "../../static/Social";
import { greetingMessage } from "../../static/Home";
import { ThemeContext } from "../../components/styling/ThemeContext";
import { hlight } from "../../utils/Highlighter";

// language=TEXT
let sourceCode = `#include <stdio.h>

${pageNav(window.location.pathname)}

static const char greeting_message[1024] = "${greetingMessage}";  

typedef struct social { char name[64]; char url[128]; } social_t;

static social_t socials[${socialMedia.length}] = ${socialMedia.map(soc => socialFmt(soc))}

int main(void) {
  fputs(greeting_message, stdout);
  printf("Hello, World!\\n");
  return 0;
}
`;

type HomeProps = {};
type HomeState = {
	source: string;
};


class Home extends React.Component<HomeProps, HomeState> {
	ref: RefObject<HTMLPreElement>;

	constructor(props: HomeProps) {
		super(props);
		this.ref = createRef();
		this.state = {source: sourceCode};
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
			<div className="container">
				<pre id="home-dest" ref={this.ref} className="fg-accent-2 left-align"/>
			</div>
		);
	};
}

Home.contextType = ThemeContext;
export default Home;
