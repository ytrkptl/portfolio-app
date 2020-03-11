import React from 'react';
import CustomCard3 from '../../Card-wrapper/CustomCard3';
import ButtonInCard from '../../Button-in-card/Button-in-card'

import './Developer.css';

let skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express.js',
	'XML', 'Java', 'Android', 'Git', 'GitHub', 'AWS EC2', 'AWS Lambda', 'Serverless',
	'PostgreSQL', 'SQLite3', 'Firebase', 'Parse Server', 'Docker', 'Redis', 'REST API',
	'Gatsby', 'Next.js', 'Python', 'Flask']
let online = ['Grow With Google Challenge Scholarship Recipient', 'Bertelsmann Technology Scholarship']

const Developer = ({ title, id, cardNum }) => {
	return (
		<CustomCard3 id={id} cardNum={cardNum} title={title}>
			<h3 className="devSubtitle">
				I've built my projects with the following, i.e. have experience using the following:
				</h3>
			<div className="devPillParent">
				{
					skills.map((el, index) => {
						return <span key={index} className="devPill">{el}</span>
					})
				}
			</div>
			<h3 className="devSubtitle">Online Scholarships:</h3>
			<div className="devPillParent">
				{
					online.map((el, index) => {
						return <p key={index} className="devPill">{el}</p>
					})
				}
			</div>
			<ButtonInCard nextCardName='projects' bgColor='pink' />
		</CustomCard3>
	);
}

export default Developer;