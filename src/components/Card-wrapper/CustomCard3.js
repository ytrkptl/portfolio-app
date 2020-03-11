import React from 'react';
import './CustomCard.css';

const CustomCard3 = ({ title, id, children }) => {
	return (
		<div className="CardDetails" id={id}>
			<div className="textContainer">
				<h2 className="subjectTitle">{title}</h2>
				{children}
			</div>
		</div>
	);
}

export default CustomCard3;