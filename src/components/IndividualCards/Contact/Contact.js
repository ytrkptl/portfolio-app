import React from 'react';
import CustomCard3 from '../../Card-wrapper/CustomCard3';
import ButtonInCard from '../../Button-in-card/Button-in-card'
import './Contact.css';

const Contact = ({ title, id, cardNum }) => {
	return (
		<CustomCard3 id={id} cardNum={cardNum} title={title}>
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
					<input type="hidden" name="_honeypot" value="" />
					<div className="contactFormDiv3">
						<button type="submit" className="sendButton">Send</button>
					</div>
				</form>
			</div>
			<h3 className="contactSubtitle" style={{paddingBottom: "0"}}>Connect/Social</h3>
			<div className="contactPillParent">
				<p className="social">
					<a
						href="https://blog.yatrik.dev/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Hashnode Powered Blog
					</a>
				</p>
				<p className="social">
					<a
						href="https://dev.to/ytrkptl"
						target="_blank"
						rel="noopener noreferrer"
					>
						Dev.to
					</a>
				</p>
				<p className="social">I am not really active on Twitter but here you go:
					<a
						href="https://twitter.com/ytrkptl"
						target="_blank"
						rel="noopener noreferrer"
						style={{display: "inline" ,marginLeft: "10px"}}
					>
						Twitter
					</a>
				</p>
				<p className="social">
					<a
						href="https://www.facebook.com/yatrik.patel.56/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Facebook
					</a>
				</p>
			</div>
			<ButtonInCard nextCardIdAndUrl="credits" bgColor='pink' />
		</CustomCard3>
	);
}

export default Contact;