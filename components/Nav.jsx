import React from 'react';

class Nav extends React.Component{
	render() {
		return (
			<div id="pageWrapper">
            	<header className="pass-header">
        			<a className="pass-header-back" id="goBack"></a>
    				<span className="pass-header-title">微修-主页</span>
				</header>
				{this.props.children}
			</div>
		);
	}

};

module.exports = Nav;