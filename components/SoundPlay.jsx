"use strict";
import { Howl } from 'howler';
class WebSound{
	var sound = new Howl({
	  src: ['./sound.mp3']
	});

	var Playsound=()=>{
		sound.play();
	};
}

module.exports = WebSound;