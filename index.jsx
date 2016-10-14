import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { default as swal } from 'sweetalert2'
import sweetalertcss from 'sweetalert2/dist/sweetalert2.min.css'

class App extends React.Component{
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