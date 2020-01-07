import React from "react";
import SkillsListItem, { SkillsListItemType } from "../skills-list-item/SkillsListItem";
import "./SkillsList.css";

type SkillsListType = {
	title: string;
	skills: SkillsListItemType[];
};


export default class SkillsList extends React.Component {
	state: SkillsListType;
	props: SkillsListType;

	constructor(props: SkillsListType) {
		super(props);
		this.props = props;
		this.state = {
			title: props.title,
			skills: props.skills,
		};
	}

	render() {
		return (
			<div className="skills-list">
				<h4 className="deep-purple-text text-lighten-2">{this.state.title}</h4>
				<ul className="collection with-header">
					{this.state.skills.map((skill, index) => <SkillsListItem skill={skill} key={index} />)}
				</ul>
			</div>
		);
	}
}
