function timeclock() {

	var rtclock = new Date();
	var hours = rtclock.getHours();
	var minutes = rtclock.getMinutes();
	var seconds = rtclock.getSeconds();

	var amPm = ( hours < 12 )? "AM" : "PM";

	hours = (hours > 12) ? hours - 12 : hours;

	hours = ("0" + hours).slice(-2);
	minutes = ("0" + minutes).slice(-2);
	seconds = ("0" + seconds).slice(-2);

	document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds	+ " " + amPm;
	var t = setTimeout(timeclock, 500);
}

