import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

class App extends React.Component{
	render(){
		return(
			<div>
			<div><Link to='/about'>about</Link></div>
			</div>
		);
	}
};

class About extends React.Component{
	render(){
		return(
			<div>
			<div><Link to='/'>home</Link></div>
			</div>
		);
	}
};

const Root = (
	<Router history={ browserHistory }>
		<Route path='/' component={App}></Route>
		<Route path='/about' component={About}></Route>
	</Router>
);

ReactDOM.render(
	Root,
	document.querySelector('#root')
);