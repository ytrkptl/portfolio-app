import React, {Component} from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import './Navigation.css';

const items = [
				{ topic: 'About Me', id: 'aboutme'},
				{ topic: 'Developer', id: 'developer'},
				{ topic: 'Projects', id: 'projects'},
				{ topic: 'Contact', id: 'contact'},
				{ topic: 'Credits', id: 'credits'}
			];


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	hamburgerClicked: this.props.hamburgerClicked
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.hamburgerClicked !== this.props.hamburgerClicked) {
      this.setState({hamburgerClicked: this.props.hamburgerClicked});
    }

  }

  render() {
	return (
		<div id="headerMainDiv">
			<div id="col1" ><Logo /></div>
			<div id="col2">
				<button id="titleBtn" className="grow" onClick={()=>this.props.scrollToTop()}>Yatrik's Portfolio</button>
			</div>
			<div id="col3">
				{items.map((el) => (
					<button 
						key={el.id} 
						id={`${el.id}Btn`} 
						className="col3Btns grow"
						onClick={()=>this.props.scrollToFromMenu(el.id)}>{el.topic}
					</button>)
				)}
				<Menu scrollToFromMenu={this.props.scrollToFromMenu}/>
			</div>
		</div>
	);
}
}
export default Navigation;