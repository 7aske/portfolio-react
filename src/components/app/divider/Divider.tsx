import React from "react";
import "./Divider.css"
type DividerPropsAndState = {
	title: string;
}

export default class Divider extends React.Component {
	state: DividerPropsAndState;
	props: DividerPropsAndState;

	constructor(props: DividerPropsAndState) {
		super(props);
		this.props = props;
		this.state = {title: props.title};
	}

	render() {
		return (
			<div className="container">
			<div className="divider grey darken-4 p-5">
				<h4 className="deep-purple-text text-lighten-2 mt-3">{this.state.title}</h4>
			</div>
			</div>
		);
	}
}
