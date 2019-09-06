import React from 'react';
import './CustomCard.css';

const CustomCard3 = ({bgColor, title, id, children}) => {
	return (
		<div className="CardDetails" id={id} style={{backgroundColor: `${bgColor}`}}>
			<div className="textContainer">
				<h2 className="subjectTitle">{title}</h2>
				{children}
			</div>
		</div>
	);
}

export default CustomCard3;