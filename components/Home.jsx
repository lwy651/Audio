import React from 'react';
import { Link } from 'react-router';
import WebSound from './SoundPlay.jsx';
import Swipepane from './SwipeCom.jsx';

let websound1 = WebSound.getInstance();
let websound2 = WebSound.getInstance();


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
    	websound1.addnum();
    };
    cutClick(event){
    	websound2.reducenum();
    };
	render(){
		return (
			<div>
				<Swipepane />
			</div>
		);
	}

};

module.exports = Home;