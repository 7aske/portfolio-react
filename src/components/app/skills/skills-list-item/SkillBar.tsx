import React from "react";
import "./SkillBar.css";

type SkillBarType = {
	level: number;
}
type SkillBarState = {
	level: number;
}

export default class SkillBar extends React.Component {
	state: SkillBarState;
	props: SkillBarType;
	private readonly ref: React.RefObject<HTMLDivElement>;
	private readonly MAX_LEVEL = 150;
	constructor(props: SkillBarType) {
		super(props);
		this.props = props;
		this.state = {level: props.level};
		this.ref = React.createRef<HTMLDivElement>();
	}

	componentDidMount(): void {
		document.addEventListener("scroll", () => {
			const wOffsetY = window.pageYOffset;
			const wScrollY = window.scrollY;
			const wInnerHeight = window.innerHeight;
			const magicOffset = 60;
			const barPos = wScrollY + this.ref.current!.getBoundingClientRect().top - wInnerHeight;
			if (wOffsetY > barPos + wInnerHeight + magicOffset) {
				(this.ref.current!.firstElementChild! as HTMLDivElement).style.width = "0px";
			} else if (wOffsetY > barPos) {
				const level = this.state.level / 100 * this.MAX_LEVEL;
				(this.ref.current!.firstElementChild! as HTMLDivElement).style.width = level + "px";
			} else {
				(this.ref.current!.firstElementChild! as HTMLDivElement).style.width = "0px";
			}
		});
	}

	render() {
		return (
			<div ref={this.ref} className="skill-bar">
				<div className="skill-fill deep-purple lighten-2darken-1" />
			</div>
		);
	}
}
