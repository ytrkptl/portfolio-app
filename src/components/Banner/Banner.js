import React from 'react';
import teacherToDev from '../../images/teacher11.png';
import ButtonInCard from '../Button-in-card/Button-in-card';
import ProfilePhoto from '../../images/profile-photo-2.jpg';
import Equation from '../Equation/Equation';
import './Banner.css';

const Banner = () => {
	return (
		<div className="imageContainerParent" id="banner">
			<div className="imageContainer">
				<h2 className="aboveNameText">
					Meet Me
				</h2>
				<h1 className="nameText">
					Yatrik Patel
				</h1>
				<img alt="profile" src={ProfilePhoto} className="profilePhoto"/>
				<h3 className="belowNameText">
					Math teacher passionate about becoming a developer.
				</h3>
				<h3 className="greenText">
					I guess the best way to express that is with the following:
				</h3>
				<p className="aboveEquationText">
					You get three trys for each equation. Your score will be 
					calculated based on the number of different questions you've tried answering.
				</p>
				<Equation />
				<ButtonInCard nextCardName='aboutme' />
			</div>
		</div>
	);
}

export default Banner;