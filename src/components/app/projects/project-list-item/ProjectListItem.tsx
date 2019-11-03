import React from "react";
import { ProjectType } from "../Projects";
import "./ProjectListItem.css";

type ProjectListItemProps = {
	project: ProjectType;
};


export default class ProjectListItem extends React.Component {
	state: ProjectType;
	props: ProjectListItemProps;
	private readonly imageRef = React.createRef<HTMLImageElement>();

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

	componentDidMount(): void {
		if (window.innerWidth > 540) {
			document.addEventListener("scroll", () => {
				const y = window.pageYOffset + 132;
				const barPos = window.scrollY + this.imageRef.current!.getBoundingClientRect().top - window.innerHeight;
				if (y > barPos + window.innerHeight) {
					this.imageRef!.current!.classList.remove("pulse");
				} else if (y < barPos) {
					this.imageRef!.current!.classList.remove("pulse");
				} else {
					this.imageRef.current!.classList.add("pulse");
				}
			});
		}
	}

	render() {
		return (
			<li className="collection-item project-list-item text-left grey darken-4 row">
				<div className="col m2 s12 p-0 hide-on-small-only">
					<img ref={this.imageRef} className="animated" src={this.state.img} alt="project"/>
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
						<span className="p-1"/>
						<a className="github-button" href={this.state.repository} data-icon="octicon-star"
						   data-size="large" data-show-count="true"
						   aria-label={`Star ${this.state.username}/${this.state.name} on GitHub`}>Star</a>
						<span className="show-on-small mt-1 mb-1"/>
						<span className="p-1"/>
						<a className="github-button" href={this.state.repository + "/fork"}
						   data-icon="octicon-repo-forked" data-size="large" data-show-count="true"
						   aria-label={`Fork ${this.state.username}/${this.state.name} on GitHub`}>Fork</a>
						<span className="show-on-small mt-1 mb-1"/>
						<span className="p-1"/>
						<a className="github-button" href={this.state.repository + "/subscription"}
						   data-icon="octicon-eye" data-size="large" data-show-count="true"
						   aria-label={`Watch ${this.state.username}/${this.state.name} on GitHub`}>Watch</a>
					</div>
				</div>
			</li>
		);
	}
}
