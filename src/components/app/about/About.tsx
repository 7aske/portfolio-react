import React from "react";
import "./About.css";


export class About extends React.Component {

	constructor(props: any) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div id="about">
				<div className="container grey darken-4 text-white">
					<div className="row p-4 mb-0">
						<div className="col s12">
							<h3 className="mt-3 text-left mt-1">Short</h3>
							<p className="about-text text-justify">
								Hi, my name is Nikola born on 24th of May 1995. I am your standard garden variety
								software
								nerd.
								That means if something has computer code in it I had already read about it or tried to
								implement it myself. Among the huge range of my interests I would emphasize the Web,
								networks
								and scripting languages as my strong points. Regarding Web development I had written
								servers
								in
								5 languages so far but I tend to default to Node.js for my day to day needs. As for
								programming
								my go to languages are GoLang and Python. I decent knowledge of Java and
								have recently started learning C/C++. Also I'm a Linux user and a big fan of Arch
								distros.
								Aside from
								programming I do documentary photography and my photos are regularly uploaded to
								Instagram
								by my
								Python bot. Cycling is my go-to relaxation activity, helps me clear my head to solve
								difficulties easier. I think I am honest, enthusiastic, easy to work with and more than
								willing
								to think outside of the box to solve any problem.
							</p>
						</div>
					</div>
					<div className="row p-4 mb-0">
						<div className="col s12">
							<h3 className="text-left mt-1">Education</h3>
							<ul className="collection text-left" style={{border: "none"}}>
								<li className="collection-item grey darken-4">
									elementary - “Vozd Karadjordje Nis” (2002 - 2010)
								</li>
								<li className="collection-item grey darken-4">
									high school - “Bora Stankovic Nis” - mathematics department (2010 - 2014)
								</li>
								<li className="collection-item grey darken-4">
									university - “Univerzitet Metropolitan Beograd” - software enineering (2018 -
									present)
								</li>
							</ul>
						</div>
					</div>
					<div className="row p-4 mb-0">
						<div className="col s12">
							<h3 className="text-left mt-1">More</h3>
							<ul className="collection text-left" style={{border: "none"}}>
								<li className="collection-item grey darken-4">
									address: Cirila i Metodija 18/22 18000 Nis, Serbia
								</li>
								<li className="collection-item grey darken-4">
									phone: +(381) 60 451 40 36
								</li>
								<li className="collection-item grey darken-4">
									email: ntasic7@gmail.com <br/>
									email: nikolatasic7@gmail.com
								</li>
							</ul>
						</div>
					</div>
					<div className="row mb-0">
						<div className="col s12 text-left">
							<p className="pl-2 pt-5 pb-5 font-weight-bold">
								Download a PDF copy of my resume
								<a href="../../../assets/pdf/resume.pdf"><i className="fa fa-file m-1"> </i>here</a>.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
