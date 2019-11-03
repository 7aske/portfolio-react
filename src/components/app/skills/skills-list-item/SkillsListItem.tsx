import React from "react";
import SkillsSubListItem, { SkillsSubListItemType } from "../skills-list-subitem/SkillsSubListItem";
import SkillBar from "./SkillBar";
import "./SkillListItem.css"

export type SkillsListItemType = {
	name: string;
	skillLevel: number;
	sublist: SkillsSubListItemType[]
}

type SkillsListItemProps = {
	skill: SkillsListItemType;
}

export default class SkillsListItem extends React.Component {
	state: SkillsListItemType;
	props: SkillsListItemProps;

	constructor(props: SkillsListItemProps) {
		super(props);
		this.props = props;
		this.state = {name: props.skill.name, skillLevel: props.skill.skillLevel, sublist: props.skill.sublist};
	}

	render() {
		return (
			<li className="skill-list-item collection-item-header text-left white-text">
				<i className="material-icons orange-text">chevron_right</i>
				<span>{this.state.name}</span>
				<SkillBar level={this.state.skillLevel}/>
				<ul className="collection">
					{this.state.sublist.map((skill, index) => <SkillsSubListItem name={skill.name} key={index} />)}
				</ul>
			</li>
		);
	}
}
