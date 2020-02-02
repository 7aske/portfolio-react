import React from "react";
import ProjectListItem from "../project-list-item/ProjectListItem";
import {initializeGithubButtons} from "../../../util/initGithubButtons"

type SkillsListProps = {
	projects: Project[];
};


export default class ProjectList extends React.Component<SkillsListProps, SkillsListProps> {
	state: SkillsListProps;
	props: SkillsListProps;
	constructor(props: SkillsListProps) {
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
