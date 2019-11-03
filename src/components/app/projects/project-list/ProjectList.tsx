import React from "react";
import { ProjectType } from "../Projects";
import ProjectListItem from "../project-list-item/ProjectListItem";
import {initializeGithubButtons} from "../../../util/initGithubButtons"
type SkillsListType = {
	projects: ProjectType[];
};


export default class ProjectList extends React.Component {
	state: SkillsListType;
	props: SkillsListType;
	constructor(props: SkillsListType) {
		super(props);
		this.props = props;
		this.state = {
			projects: props.projects,
		};
	}
	componentDidMount(): void {
		initializeGithubButtons();
	}

	render() {
		return (
			<div className="projects-list">
				<ul className="collection text-white" style={{border:"none"}}>
					{this.state.projects.map((project, index) => <ProjectListItem project={project} key={index}/>)}
				</ul>
			</div>
		);
	}
}
