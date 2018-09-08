var inputHour = document.getElementById('hourInput');
var inputMin = document.getElementById('minInput');
var incHour = document.getElementById('hourInc');
var decHour = document.getElementById('hourDec');
var incMin = document.getElementById('minInc');
var decMin = document.getElementById('minDec');
var settings = document.getElementById('settings');
var body = document.getElementById('body');
var clock = 24;
var amPm = "pm";
var homeInterval = null;
var wakeUpMode;
var alarmInterval = null;
var setAlarm = document.getElementById('setAlarm');
var reset = document.getElementById('resetAlarm');
var audio = document.getElementsByTagName('audio');
var songRadio;
var songCheck = document.getElementsByClassName('songCheck');
var alarm = document.getElementsByClassName('song');
var demo = document.getElementsByClassName('demo');


// HOME FUNCTION, GET DATE, TIME ETC

function displayAll() {
	homeInterval = setInterval(function() {
		var newDate = new Date();
	var date = newDate.getDate();
var dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = dayList[newDate.getDay()];
var monthList = ["Jan", "Feb", 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var month = monthList[newDate.getMonth()];
var hours = newDate.getHours();
var mins = newDate.getMinutes();
	document.getElementById('date').innerHTML = day + ", " + date + " " + month;
	if (hours < 10) {
		document.getElementsByClassName('time')[0].innerHTML = "0" + hours + " : ";
	} else 	if (hours == 0) {
		document.getElementsByClassName('time')[0].innerHTML = "00" + " : ";
	} else {
		document.getElementsByClassName('time')[0].innerHTML = hours + " : ";
	}
	if (mins < 10) {
		document.getElementsByClassName('time')[1].innerHTML = "0" + mins;
	} else 	if (mins == 0) {
		document.getElementsByClassName('time')[1].innerHTML = "00";
	} else {
		document.getElementsByClassName('time')[1].innerHTML = mins;
	}
}, 1000);
} 

displayAll();


// CLOCK ANIMATION HOURS+

function increaseHours() {
	inputHour.style.animation = "none";
	inputHour.offsetHeight;
	inputHour.style.animation = "increaseInput .5s 1 ease-in-out";
	function incHourDelay() {
		inputHour.value++; 
		if (inputHour.value > 23) {
			inputHour.value = 0;
		}
	}
	setTimeout(incHourDelay, 200);
}

// CLOCK ANIMATION HOURS-

function decreaseHours() {
	inputHour.style.animation = "none";
	inputHour.offsetHeight;
	inputHour.style.animation = "decreaseInput .5s 1 ease-in-out";
	function incHourDelay() {
		inputHour.value--; 
		if (inputHour.value < 0) {
			inputHour.value = 23;
		}
	}
	setTimeout(incHourDelay, 200);
}

// CLOCK ANIMATION MINUTES+

function increaseMins() {
	inputMin.style.animation = "none";
	inputMin.offsetHeight;
	inputMin.style.animation = "increaseInput .5s 1 ease-in-out";
	function incHourDelay() {
		inputMin.value++; 
		if (inputMin.value > 59) {
			inputMin.value = 0;
		}
		if (inputMin.value < 10) {
			inputMin.innerHTML = "0" + inputMin.value;
		}
	}
	setTimeout(incHourDelay, 200);
}

// CLOCK ANIMATION MINUTES-

function decreaseMins() {
	inputMin.style.animation = "none";
	inputMin.offsetHeight;
	inputMin.style.animation = "decreaseInput .5s 1 ease-in-out";
	function incHourDelay() {
		inputMin.value--; 
		if (inputMin.value < 0) {
			inputMin.value = 59;
		}
	}
	setTimeout(incHourDelay, 200);
}


// SHOW SETTINGS SCREEN + EVENT LISTENERS FOR SUB-MENUS

function showSettings() {
	document.getElementById('settingsScreen').style.marginLeft = "0";
	var close = document.getElementById('closeSettings');
	close.addEventListener("click", function() {
	document.getElementById('settingsScreen').style.marginLeft = "-100%";
	});
	document.getElementById('themes').addEventListener("click", function() {
	document.getElementById('themesScreen').style.marginLeft = "0";
	});
	document.getElementById('closeThemes').addEventListener("click", function() {
	document.getElementById('themesScreen').style.marginLeft = "-100%";
	});
	document.getElementById('wakeup').addEventListener("click", function() {
	document.getElementById('wakeUpSettings').style.marginLeft = "0";
	});
	document.getElementById('closeWake').addEventListener("click", function() {
	document.getElementById('wakeUpSettings').style.marginLeft = "-100%";
	});
	document.getElementById('tones').addEventListener("click", function() {
	document.getElementById('tonesScreen').style.marginLeft = "0";
	});
	document.getElementById('closeTones').addEventListener("click", function() {
	document.getElementById('tonesScreen').style.marginLeft = "-100%";
	alarm[songRadio].pause();
	alarm[songRadio].currentTime = 0;
	});
}


// COLOR SCHEME CHANGES

document.getElementById('light').addEventListener("click", function() {
	body.style.backgroundColor = "rgb(215,215,215)";
	body.style.color = "rgb(40,40,40)";
});
document.getElementById('dark').addEventListener("click", function() {
	body.style.backgroundColor = "rgb(40,40,40)";
	body.style.color = "rgb(225,225,225)";
});
document.getElementById('vibrant').addEventListener("click", function() {
	body.style.backgroundColor = "rgb(115,15,165)";
	body.style.color = "#ffff00";
});
document.getElementById('blue').addEventListener("click", function() { 
	body.style.backgroundColor = "#000066";
	body.style.color = "#cce6ff";
});
document.getElementById('neon').addEventListener("click", function() {
	body.style.backgroundColor = "#56ff00";
	body.style.color = "#ff00ab";
});
document.getElementById('custom').addEventListener("click", function() {
	document.getElementById('customColor').style.display = "block";
});
document.getElementById('bgColor').addEventListener("input", function() {
	var color = document.getElementById('bgColor');
	body.style.backgroundColor = color.value;
});
document.getElementById('fgColor').addEventListener("input", function() {
	var color = document.getElementById('fgColor');
	body.style.color = color.value;
});


// CHANGE WAKE UP MODE

document.getElementById('wakeNormal').addEventListener("click", function() {
	wakeUpMode = "normal";
	document.getElementById('wakeNormal').style.border = "solid 2px";
	document.getElementById('wakeGradual').style.border = "none";
	document.getElementById('wakeMaths').style.border = "none";
	resetAlarm();
});
document.getElementById('wakeGradual').addEventListener("click", function() {
	wakeUpMode = "gradual";
	document.getElementById('wakeNormal').style.border = "none";
	document.getElementById('wakeGradual').style.border = "solid 2px";
	document.getElementById('wakeMaths').style.border = "none";
	resetAlarm();
});
document.getElementById('wakeMaths').addEventListener("click", function() {
	wakeUpMode = "maths";
	document.getElementById('wakeNormal').style.border = "none";
	document.getElementById('wakeGradual').style.border = "none";
	document.getElementById('wakeMaths').style.border = "solid 2px";
	resetAlarm();
});

// PLAY ALARM TONE onclick

function playDemo() {
	var i;
	for (i = 0; i < audio.length; i++) {
	audio[i].pause();
	audio[i].currentTime = 0;
	}
	songRadio = Number(document.querySelector('input[name="songChoice"]:checked').value);
	alarm[songRadio].play();
	demo[songRadio].style.animation = "none";
	demo[songRadio].offsetHeight;
	demo[songRadio].style.animation = "audioPulse 1.5s 10 linear";
}
for (var x = 0; x < songCheck.length; x++) {
	songCheck[x].addEventListener("click", playDemo);
}



function startAlarm() {
	if (inputHour.value == "" || inputMin.value == "") {
		return false;
	} else {
	document.getElementById('settingsWarning').style.display = "block";
	incHour.style.display = "none";
	decHour.style.display = "none";
	incMin.style.display = "none";
	decMin.style.display = "none";
	setAlarm.style.display = "none";
    }
    if (wakeUpMode == "maths") {
    	wakeUpMaths();
    } else if (wakeUpMode == "gradual") {
    	wakeUpSnooze();
    } else {
    	wakeUpNormal();
    }
}

// GENERATE RANDOM NUMBERS FOR MATHS WAKE UP SETTINGS & VALID DATE CORRECT ANSWER GIVEN

function wakeUpMaths() {
	var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);
    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;
	songRadio = Number(document.querySelector('input[name="songChoice"]:checked').value);
	numInput.value = "";
	alarmInterval = setInterval(function() {
		var date = new Date();
		hrs = date.getHours();
		mins = date.getMinutes();
    if (inputHour.value == hrs && inputMin.value == mins) {
    	numInput.focus();
        document.getElementById('mathsCont').style.marginLeft = "0";
        alarm[songRadio].play();	
        document.getElementById('calcSubmit').addEventListener("click", function() {
	    var numInput = document.getElementById('numInput');
	if (numInput.value == (num1 + num2)) {
		document.getElementById('mathsCont').style.marginLeft = "-100%";
		resetAlarm();
	} else {
		numInput.value = "";
	}})};
}, 1000);
}

function wakeUpNormal() {
	    songRadio = Number(document.querySelector('input[name="songChoice"]:checked').value);
		alarmInterval = setInterval(function() {
		var date = new Date();
		hrs = date.getHours();
		mins = date.getMinutes();
		if (inputHour.value == hrs && inputMin.value == mins) {
			alarm[songRadio].play();
			document.getElementById('wakeUpNormalScreen').style.marginLeft = "0";
			document.getElementById('offNormalWake').style.animation = "wakeAnimate 2s linear infinite";
			document.getElementById('offNormalWake').addEventListener("click", function() {
				document.getElementById('wakeUpNormalScreen').style.marginLeft = "-100%";
				document.getElementById('offNormalWake').style.animation = "none";
				document.getElementById('offNormalWake').offsetHeight;
				resetAlarm();
			});
		}
	}, 1000);
}

function wakeUpSnooze() {
	    songRadio = Number(document.querySelector('input[name="songChoice"]:checked').value);
		alarmInterval = setInterval(function() {
		var date = new Date();
		hrs = date.getHours();
		mins = date.getMinutes();
		if ((mins+10) <= 60) {
	if (inputMin.value == (mins+10) && inputHour.value == hrs) {
		alarm[songRadio].volume = 0.2;
		alarm[songRadio].play();
		document.getElementById('snoozeScreen').style.marginLeft = "0";
		document.getElementById('awake').style.animation = "wakeAnimate 2s linear infinite";
		document.getElementById('snooze').style.animation = "wakeAnimate 2s linear infinite";
	} else if (inputMin.value == (mins+8) && inputHour.value == hrs) {
		alarm[songRadio].pause();
		alarm[songRadio].volume = 0.4;
		alarm[songRadio].play();
		document.getElementById('snoozeScreen').style.marginLeft = "0";
		document.getElementById('awake').style.animation = "wakeAnimate 2s linear infinite";
		document.getElementById('snooze').style.animation = "wakeAnimate 2s linear infinite";
	} else if (inputMin.value == (mins+6) && inputHour.value == hrs) {
		alarm[songRadio].pause();
		alarm[songRadio].volume = 0.6;
		alarm[songRadio].play();
		document.getElementById('snoozeScreen').style.marginLeft = "0";
		document.getElementById('awake').style.animation = "wakeAnimate 2s linear infinite";
		document.getElementById('snooze').style.animation = "wakeAnimate 2s linear infinite";
	} else if (inputMin.value == (mins+4) && inputHour.value == hrs) {
		alarm[songRadio].pause();
		alarm[songRadio].volume = 0.8;
		alarm[songRadio].play();
		document.getElementById('snoozeScreen').style.marginLeft = "0";
		document.getElementById('awake').style.animation = "wakeAnimate 2s linear infinite";
		document.getElementById('snooze').style.animation = "wakeAnimate 2s linear infinite";
	} else if (inputHour.value == hrs && inputMin.value == mins) {
		alarm[songRadio].pause();
		alarm[songRadio].volume = 1;
		alarm[songRadio].play();
		document.getElementById('snoozeScreen').style.marginLeft = "0";
		document.getElementById('awake').style.animation = "wakeAnimate 2s linear infinite";
		document.getElementById('snooze').style.animation = "wakeAnimate 2s linear infinite";
	}
 }
 if ((inputMin.value-10) <= 0) {
 	var x = (inputMin.value - 10);
 	if (inputHour.value == (hrs + 1) && mins == (60 + x)) {
 	alarm[songRadio].pause();
	alarm[songRadio].volume = 0.2;
	alarm[songRadio].play();
	document.getElementById('snoozeScreen').style.marginLeft = "0";
	document.getElementById('awake').style.animation = "wakeAnimate 2s linear infinite";
	document.getElementById('snooze').style.animation = "wakeAnimate 2s linear infinite";
	} else if (inputHour.value == (hrs + 1) && mins == (60 + x)) {
	alarm[songRadio].pause();
	alarm[songRadio].volume = 0.4;
	alarm[songRadio].play();
	document.getElementById('snoozeScreen').style.marginLeft = "0";
	document.getElementById('awake').style.animation = "wakeAnimate 2s linear infinite";
	document.getElementById('snooze').style.animation = "wakeAnimate 2s linear infinite";
	} else if (inputHour.value == (hrs + 1) && mins == (60 + x)) {
	alarm[songRadio].pause();
	alarm[songRadio].volume = 0.6;
	alarm[songRadio].play();
	document.getElementById('snoozeScreen').style.marginLeft = "0";
	document.getElementById('awake').style.animation = "wakeAnimate 2s linear infinite";
	document.getElementById('snooze').style.animation = "wakeAnimate 2s linear infinite";
	} else if (inputHour.value == (hrs + 1) && mins == (60 + x)) {
	alarm[songRadio].pause();
	alarm[songRadio].volume = 0.8;
	alarm[songRadio].play();
	document.getElementById('snoozeScreen').style.marginLeft = "0";
	document.getElementById('awake').style.animation = "wakeAnimate 2s linear infinite";
	document.getElementById('snooze').style.animation = "wakeAnimate 2s linear infinite";
	} else if (inputHour.value == hrs && inputMin.value == mins) {
	alarm[songRadio].pause();
	alarm[songRadio].volume = 1;
	alarm[songRadio].play();
	document.getElementById('snoozeScreen').style.marginLeft = "0";
	document.getElementById('awake').style.animation = "wakeAnimate 2s linear infinite";
	document.getElementById('snooze').style.animation = "wakeAnimate 2s linear infinite";
	}
 }
	alarm[songRadio].addEventListener("ended", function(){
    alarm[songRadio].currentTime = 0;
    alarm[songRadio].play();
});
}, 1000);	
}

document.getElementById('snooze').addEventListener("click", function() {
		inputMin.value = Number(inputMin.value) + 10;
	if (inputMin.value > 60) {
		inputHour.value++;
		inputMin.value = Number(inputMin.value)-60;
	}
	document.getElementById('snoozeScreen').style.marginLeft = "-100%";
	document.getElementById('awake').style.animation = "none";
	document.getElementById('awake').offsetHeight;
	document.getElementById('snooze').style.animation = "none";
	document.getElementById('snooze').offsetHeight;
	alarm[songRadio].currentTime = 0;
	alarm[songRadio].pause();
	wakeUpSnooze();
})

document.getElementById('awake').addEventListener("click", function() {
	document.getElementById('snoozeScreen').style.marginLeft = "-100%";
	document.getElementById('awake').style.animation = "none";
	document.getElementById('awake').offsetHeight;
	document.getElementById('snooze').style.animation = "none";
	document.getElementById('snooze').offsetHeight;
	alarm[songRadio].currentTime = 0;
	alarm[songRadio].pause();
	resetAlarm();	
})

function resetAlarm() {
	incHour.style.display = "block";
	decHour.style.display = "block";
	incMin.style.display = "block";
	decMin.style.display = "block";
	setAlarm.style.display = "block";
	document.getElementById('settingsWarning').style.display = "none";
	inputMin.value = "";
	inputHour.value = "";
	alarm[songRadio].pause();
	alarm[songRadio].currentTime = 0;	
	clearInterval(alarmInterval);
}


setAlarm.addEventListener("click", startAlarm);
incHour.addEventListener("click", increaseHours);
decHour.addEventListener("click", decreaseHours);
incMin.addEventListener("click", increaseMins);
decMin.addEventListener("click", decreaseMins);
settings.addEventListener("click", showSettings);
reset.addEventListener("click", resetAlarm);