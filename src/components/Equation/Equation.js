import React, { Component } from 'react';
import {Node, Context} from 'react-mathjax2';
import './Equation.css';

class IndiCard extends Component {
	constructor() {
		super()
		this.state = {
			equationArray: [0, 0, 0],
			answerReceived: "",
			showMessage: false,
			correct: false,
			message: '',
			emoji: '',
			trysRemaining: 3,
			indiCard: false,
			questionsAnswered: 0,
			questionsAnsweredCorrectly: 0,
			score: '0 %'
		}
  }

	newDivisionMethod = () => {
		let answer = Math.floor((Math.random() * 10) + 1);
		let denominator = Math.floor((Math.random() * 10) + 1);
		let numerator = answer * denominator;
		return [answer, numerator, denominator];
	}

	oneStepEquation = () => {
		var answer = Math.floor((Math.random() * 10) + 1);
		var operations = ["+", "-", "*", "/"];
		var selectedOperation = operations[Math.floor(Math.random() * operations.length)];
		var constant = Math.floor((Math.random() * 10) + 1);
		var alphabet = "abcdefghjklmnpqrstuvwxyz";//removed "i" since don't want that confused with a complex number and "0" since don't want that to look like zero.
		var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
		var x = getRandomLetter;
		var types = Math.floor((Math.random() * 2) + 1);//generates a random number between 1 and 2
		var rhs, equation;
		if (selectedOperation==='+') {
			rhs = answer + constant;
			if (types===1){
				equation = constant + '+' + x + ' = ' + (rhs);//already tried adding space between constant and x but that doesn't work in MathJax2
			} else {
				equation = constant + ' ' + selectedOperation + x + ' = ' + (rhs); 
			}
		} else if (selectedOperation==='-') {
			//don't check for types since constant - answer = rhs is a two step equation instead.
			rhs = answer - constant;
			equation = x + ' ' + selectedOperation + ' ' + constant + ' = ' + (rhs);
		} else if (selectedOperation==='*') {
			rhs = answer * constant;
			if (types===1){
				equation = constant + x + ' = ' + (rhs);//already tried adding space between constant and x but that doesn't work in MathJax2
			} else {
				equation = x + ' ' + selectedOperation + constant +' = ' + (rhs); 
			}
		} else if (selectedOperation==='/') {
			const error = this.newDivisionMethod();
			rhs = error[0];
			if (types===1) {
				constant = error[2];
				answer = error[1];
				equation = x + ' ' + selectedOperation + ' ' + constant + ' = ' + (rhs);
			} else {
				constant = error[1];
				answer = error[2];
				equation = constant + ' ' + selectedOperation + ' ' + x + ' = ' + (rhs);
			}
		}
		let displayLetter = x + ' = ?';
		this.setState({equationArray: [equation, answer, displayLetter]});
		return;
	}

	componentDidMount() {
		this.oneStepEquation();
	}
	onInputChange = (event) => {
		this.setState({answerReceived: event.target.value});
	}
	// this function returns a correct Emoji (emojis to show when answer is correct)
	correctEmojiFunc = () => {
		let correctEmojisArray = ["😀", "🙂", "😌", "😁", "🤩", "🤗", "😇", "😍", "😃", "😄", "😎", "🙃", "☺️", "😛", "👍", "🙌", "🙌🏿", "🙌🏽", "🎉", "👌", "💯", "🙏", "👏"];
		let correctEmoji = correctEmojisArray[Math.floor(Math.random() * correctEmojisArray.length)];
		return correctEmoji;
	}
	// this function returns a correct Text (text to show when answer is correct)
	correctTextFunc= () => {
		let correctTextArray = ["Correct!", "Nice Job! Keep Going.", "Awesome!", "Super!!", "Cool!!!", "Yay! That was right."];
	    let correctText = correctTextArray[Math.floor(Math.random() * correctTextArray.length)];
		return correctText;
	}
	// this function returns a wrong Emoji (emojis to show when answer is wrong)
	wrongEmojiFunc = () => {
	  	let wrongEmojisArray = ["😢", "☹️", "😞", "😟", "👎", "👎🏿", "👎🏽"];
	  	let wrongEmoji = wrongEmojisArray[Math.floor(Math.random() * wrongEmojisArray.length)];
		return wrongEmoji;
	}
	// this function returns a wrong Text (text to show when answer is wrong)
	wrongTextFunc = () => {
		let wrongTextArray = ["Noooooooo. Please try again.", "Incorrect Answer! Please try again.", "That's not right! Please try again.", "Please try Again.", "Sorry, but that's not right. Please try again.", "Nice try but no luck, sorry!"];
	  let wrongText = wrongTextArray[Math.floor(Math.random() * wrongTextArray.length)];
		return wrongText;
	}

	//the following is the onSubmitButton function that gets called when the "Submit" button is clicked.
	onSubmitButton = () => {
		let answerReceived = this.state.answerReceived.toString();
		let answer = this.state.equationArray[1].toString();
		this.setState({showMessage: true})
		if (answerReceived===answer){
			this.setState({correct: true})
			this.showCorrectMessage();
		} else {
			if (this.state.trysRemaining>1){
				this.setState({trysRemaining: this.state.trysRemaining - 1});
				this.showIncorrectMessage();
			} else {
				let wrongEmoji = this.wrongEmojiFunc();
				this.setState({trysRemaining: this.state.trysRemaining - 1, emoji: wrongEmoji, message: 'Sorry, you missed it!'});
				setTimeout(()=>this.requestIndiCard(false, 'no'), 2300);
			}
		}
	}

	showCorrectMessage = () => {
		let emj = this.correctEmojiFunc();
		let msg = this.correctTextFunc();
		this.setState({emoji: emj, message: msg});
		setTimeout(()=> this.requestIndiCard(false, 'yes'),2300);
	}

	showIncorrectMessage = () => {
	  let emoji = this.wrongEmojiFunc();
		let message = this.wrongTextFunc();
		this.setState({emoji: emoji, message: message});
		setTimeout(()=> this.setState({showMessage: false, emoji: '', message: ''}),2300);
	}

	requestIndiCard = (recVal, value) => {
		this.setState({correct: recVal, trysRemaining: 3, showMessage: false})
		this.oneStepEquation();
		if (value==='yes') {
			this.setState({questionsAnswered: this.state.questionsAnswered + 1, questionsAnsweredCorrectly: this.state.questionsAnsweredCorrectly + 1})
			this.calculateScore();
		} else if (value==='no'){
			this.setState({questionsAnswered: this.state.questionsAnswered + 1})
			this.calculateScore();
		}
	}

	calculateScore = () => {
		let a = this.state.questionsAnsweredCorrectly;
		let b = this.state.questionsAnswered;
		var n = (a/b)*100;
		let digits = 2;
	    var negative = false;
	    if (digits === undefined) {
	        digits = 0;
	    }
			if( n < 0) {
				negative = true;
				n = n * -1;
	    }
	    n = parseFloat((n * 100).toFixed(11));
	    n = (Math.round(n)/100).toFixed(2);
	    if( negative ) {    
	        n = (n * -1).toFixed(2);
	    }
	    let wholePercent = n.slice(0, -3);
	    let last2 = n.slice(-2);
	    if (last2==='00'){
	    	this.setState({score: wholePercent + '%'})
	    } else {
	    	this.setState({score: n + '%'})
	    }
	    return;
	}

	render() {
		return (
			<div className="card2Parent">
				{
					!this.state.showMessage?
					<div className="card2">
						<div className="equaGenDiv">
							{
								this.state.equationArray[0]===""? <h1 className="displayEquation">Loading</h1>
								: <h1 className="displayEquation"><Context><Node>{this.state.equationArray[0]}</Node></Context></h1>
							}
							{
								this.state.equationArray[2]===""? <h1 className="displayLetter">Loading</h1>
								: <h1 className="displayLetter"><Context><Node>{this.state.equationArray[2]}</Node></Context></h1>
							}
							<input id="answerBox" onChange={this.onInputChange} type="text" placeholder="Enter Answer Here"></input>
							<button id="submitButton" className="buttonStyle3" type="text" onClick={this.onSubmitButton}>Submit</button>
						</div>
					</div>
				:
					this.state.correct?
						<div className="card2 correctAnswer">
							<h1 className="emojiSize">{this.state.emoji}</h1>
							<h1>{this.state.message}</h1>
						</div>
					: <div id="incorrect" className="card2 correctAnswer">
						<h1 className="emojiSize">{this.state.emoji}</h1>
						<h1>{this.state.message}</h1>
					</div>
				}
				<h2 className="trysRemaining">{'Trys remaining: ' + this.state.trysRemaining}</h2>
				<h2 className="trysRemaining">{'Questions Answered: ' + this.state.questionsAnswered}</h2>
				<h2 className="trysRemaining">{'Score: ' + this.state.score}</h2>
			</div>
		);
	}
}
export default IndiCard;
