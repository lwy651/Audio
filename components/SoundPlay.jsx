"use strict";
import { Howl } from 'howler';

let num = 1;
let sound = new Howl({
  src: ['sound.mp3']
});

class WebSound{
	
	constructor(){
		this.sound = sound;
	}

	static getInstance() {
	    if (!WebSound.instance) {
	      WebSound.instance = new WebSound();
	    }
 
    	return WebSound.instance;
  	}
  	addnum(){
  		if(!this.sound.playing())
  		{
  			this.sound.play();
  		}	
  	}
  	reducenum(){
  		num--;
  	}

}

module.exports = WebSound;