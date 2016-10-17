import React from 'react';
import Swiper from 'swiper';
import { Link } from 'react-router';
import swiperstyle from 'swiper/dist/css/swiper.min.css'

class Swipepane extends React.Component{
	constructor(props){
		super(props)
		this.swipesPic = ['./a.jpg','./b.jpg','./c.jpg'];
	};
	componentDidMount() {
		this.swiper = new Swiper('.swiper-container',
		{
        	pagination: '.swiper-pagination',
        	paginationClickable: true,
        	autoplay: 2500,
        	autoplayDisableOnInteraction: false,
        	// Disable preloading of all images
	        preloadImages: true,
	        // Enable lazy loading
	        lazyLoading: true
    	});
	};
	render(){
		return(
			<div className="swiper-container">
		        <div className="swiper-wrapper">
		            {this.swipesPic.map((result)=>{
		            	return(
		            		<div key={result} className="swiper-slide">
				            	<img data-src={result} className="swiper-lazy"/>
				            	<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
				            </div>
				        );
		            })}
		            
		        </div>
		        <div className="swiper-pagination swiper-pagination-white"></div>
    		</div>
		);
	}
}
module.exports = Swipepane;