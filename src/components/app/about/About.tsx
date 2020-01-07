import React from "react";
import "./About.css";
import pdf from "../../../assets/pdf/resume.pdf";

export default class About extends React.Component {
	render() {
		return (
			<div id="about">
				<div className="container grey darken-4 text-white">
					<div className="row p-4 mb-0">
						<div className="col s12">
							<h3 className="mt-3 text-left mt-1">Short</h3>
							<p className="about-text text-justify">
								Hi, my name is Nikola born on 24th of May 1995. I am your standard garden variety
								software nerd. That means if something has computer code in it, I have already read
								about it or tried to
								implement it myself. Among the huge range of my interests I would emphasize the server
								programming,
								networking and scripting languages as my strong points. Regarding Web development I had
								written
								servers in 6 technologies so far but I tend to default to Express.js or Flask for my day
								to day needs. As for
								programming my go to languages are Go, C and Python. I have decent knowledge of Java and
								some others.
								Also I'm a Linux user and a big fan of Arch which I have installed on multiple machines.
								Aside from programming I do documentary photography and my photos are regularly uploaded
								to
								Instagram by my Python bot. Cycling is my go-to relaxation activity, helps me clear my
								head so I can solve
								problems better. I think I am honest, enthusiastic, easy to work with and more than
								willing to think outside
								of the box to solve any problem.
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
									email: <a className="deep-purple-text text-lighten-2"
											  href="mailto://ntasic7@gmail.com">ntasic7@gmail.com</a><br/>
									email: <a className="deep-purple-text text-lighten-2"
											  href="mailto://nikolatasic7@gmail.com">nikolatasic7@gmail.com</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="row mb-0">
						<div className="col s12 text-left">
							<p className="pl-2 pt-5 pb-5 font-weight-bold">
								Download a PDF copy of my resume
								<a href={pdf} className="deep-purple-text text-lighten-2"><i
									className="ml-1 material-icons mr-1">picture_as_pdf</i>here</a>.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
