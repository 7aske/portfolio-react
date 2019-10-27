import React from "react";
import "./Divider.css"
type DividerPropsAndState = {
	title: string;
}

export class Divider extends React.Component {
	state: DividerPropsAndState;
	props: DividerPropsAndState;

	constructor(props: DividerPropsAndState) {
		super(props);
		this.props = props;
		this.state = {title: props.title};
	}

	render() {
		return (
			<div className="divider grey darken-4 p-5">
				<h4 className="orange-text">{this.state.title}</h4>
			</div>
		);
	}
}
