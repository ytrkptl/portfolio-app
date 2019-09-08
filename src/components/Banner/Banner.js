import React from 'react';
import teacherToDev from '../../assets/teacherToDev.png';
import ButtonInCard from '../Button-in-card/Button-in-card';
import ProfilePhoto from '../../assets/profile-photo-2.jpg';
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
					Math teacher passionate about becoming a developer
				</h3>
				<h3 className="aboveFunctionText">
					I guess the best way to express that is with the following:
				</h3>
				<img alt="teacher to developer function" src={teacherToDev} className="teacherToDevImage"/>
				<ButtonInCard nextCardName='aboutme' />
			</div>
		</div>
	);
}

export default Banner;