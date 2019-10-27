import React, { CSSProperties } from "react";
import { ProjectType } from "../Projects";
import "./ProjectListItem.css";

type ProjectListItemProps = {
	project: ProjectType;
};


export class ProjectListItem extends React.Component {
	state: ProjectType;
	props: ProjectListItemProps;

	constructor(props: ProjectListItemProps) {
		super(props);
		this.props = props;
		this.state = {
			img: props.project.img,
			description: props.project.description,
			name: props.project.name,
			repository: props.project.repository,
			username: props.project.username,
		};
	}

	render() {
		return (
			<li className="collection-item project-list-item text-left grey darken-4 row">
				<div className="col m2 s12 p-0 hide-on-small-only">
					<img src={this.state.img} alt="project"/>
				</div>
				<div className="col m10 s12 description">
					<span className="title orange-text">
						<a className="orange-text"
						   href={this.state.repository}
						   target="blank">{this.state.name}
						</a>
					</span>
					<p className="pt-2">
						{this.state.description}
						<br/>
					</p>
					<div className="github-container row p-0">
						<span className="p-1" />
						<a className="github-button" href={this.state.repository} data-icon="octicon-star"
						   data-size="large" data-show-count="true"
						   aria-label={`Star ${this.state.username}/${this.state.name} on GitHub`}>Star</a>
						<span className="show-on-small" />
						<span className="p-1" />
						<a className="github-button" href={this.state.repository + "/fork"}
						   data-icon="octicon-repo-forked" data-size="large" data-show-count="true"
						   aria-label={`Fork ${this.state.username}/${this.state.name} on GitHub`}>Fork</a>
						<span className="show-on-small" />
						<span className="p-1" />
						<a className="github-button" href={this.state.repository + "/subscription"}
						   data-icon="octicon-eye" data-size="large" data-show-count="true"
						   aria-label={`Watch ${this.state.username}/${this.state.name} on GitHub`}>Watch</a>
					</div>
				</div>
			</li>
		);
	}
}
