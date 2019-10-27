import React from "react";

export type SkillsSubListItemType = {
	name: string;
}

export class SkillsSubListItem extends React.Component {
	state: SkillsSubListItemType;
	props: SkillsSubListItemType;
	constructor(props: SkillsSubListItemType) {
		super(props);
		this.props = props;
		this.state = {name: props.name};
	}

	render() {
		return (
			<li className="collection-item grey darken-4">
				{this.state.name}
			</li>
		);
	}
}
