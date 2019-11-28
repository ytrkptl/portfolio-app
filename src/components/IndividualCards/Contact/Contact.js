import React from 'react';
import CustomCard3 from '../../Card-wrapper/CustomCard3';
import ButtonInCard from '../../Button-in-card/Button-in-card'
import './Contact.css';

const Contact = ({ title, id, cardNum }) => {
	return (
		<CustomCard3 id={id} bgColor={'beige'} cardNum={cardNum} title={title}>
				<h3 className="contactSubtitle">
					Get in touch with me by filling out the form below or email me at {` `}
					<a target="_top" href="mailto:ytrkptl.ndmlr@gmail.com">ytrkptl.ndmlr@gmail.com</a>:
				</h3>
				<div className="contactPillParent">
					<form className="contactForm" action={process.env.REACT_APP_FORM_SUBMIT_URL} method="POST">
						<div className="contactFormDiv">
							<label className="contactLabel" htmlFor="name">Name:</label>
							<input 
								name="name"
								type="text"
								id="name"
								className="contactInput"
								required
								placeholder="Enter your name here."
							/>
						</div>
						<div className="contactFormDiv">
							<label className="contactLabel" htmlFor="email">Email:</label>
							<input type="hidden" name="_replyto" />
							<input type="hidden" name="_subject" value="New submission!" />
							<input 
								name="email"
								type="email"
								id="email"
								className="contactInput"
								required
								placeholder="Enter your email here."
							/>
						</div>
						<div className="contactFormDiv2">
							<label className="contactLabel2" htmlFor="message">Message:</label>
							<textarea 
								name="message"
								id="message"
								className="contactInput2"
								required
								placeholder="Enter your message here."
							/>
						</div>
					  <input type="hidden" name="_honeypot" value=""/>
						<div className="contactFormDiv3">
							<button type="submit" className="sendButton">Send</button>
						</div>
					</form>
				</div>
			<ButtonInCard nextCardName='credits' bgColor='pink' />
		</CustomCard3>
	);
}

export default Contact;