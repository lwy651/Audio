import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { default as swal } from 'sweetalert2'
import sweetalertcss from 'sweetalert2/dist/sweetalert2.min.css';
import style from './dist/style.css';

import Home from './components/Home.jsx';
import Nav from './components/Nav.jsx';

class App extends React.Component{
		componentDidMount() {
        document.title = '主页';
    };

  	handclick(e){
	    swal(
	    'Oops...',
	    'Something went wrong!',
	    'error'
	    );
 	};
	render(){
		return(
			<div>
			<div><Link to='/about'>about</Link></div>
      <button onClick={this.handclick}>alert</button>
			</div>
		);
	}
};

class About extends React.Component{
	componentWillMount() {
        document.title = '关于我们';
    };
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
		<Route path='/' component={Nav}>
			<IndexRoute component={Home}/>
			<Route path='home' component={About}/>
		</Route>
	</Router>
);

ReactDOM.render(
	Root,
	document.querySelector('#root')
);