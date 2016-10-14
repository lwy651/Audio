import React from 'react';
import { Link } from 'react-router';
import WebSound from './SoundPlay.jsx';


class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {a:1};
		this.btnClick = this.btnClick.bind(this);
	};
	componentWillMount() {
        document.title = '主页';
    };
    btnClick(event){
    	this.setState({a:++this.state.a});
    	console.log(this);
    	this.WebSound.Playsound();
    };
	render(){
		return (
			<div>
			<Link to='/home'>about</Link>
			<div>{this.state.a}</div>
			<button onClick={this.btnClick}>add</button>
			</div>
		);
	}

};

module.exports = Home;