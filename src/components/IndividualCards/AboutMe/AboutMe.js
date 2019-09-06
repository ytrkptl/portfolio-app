import React from 'react';
import CustomCard3 from '../../Card-wrapper/CustomCard3';
import ButtonInCard from '../../Button-in-card/Button-in-card'
import './AboutMe.css';

const AboutMe = ({title, id, cardNum}) => {
	return (
		<CustomCard3 id={id} cardNum={cardNum} title={title}>
				<p className="aboutMePara1">I am a math teacher from Virginia, United States.
					In my free time, I love to program and work on developing apps and websites.
					I also like to create lessons and sell them online for teachers to buy.
				</p>
			<ButtonInCard nextCardName='developer' bgColor='pink' />
		</CustomCard3>
	);
}

export default AboutMe;