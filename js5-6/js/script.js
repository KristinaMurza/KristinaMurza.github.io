var time = 0;
var startTime = 0;

function start() {

	 if (startTime == 0) {
         startTime = 1;
         increment();
         document.getElementById('start').innerHTML = 'Stop';
     } else {
         startTime = 0;
         document.getElementById('start').innerHTML = 'Resume';
         var text_stop = document.getElementById('text_stop');
         var stop = document.createElement('div');
         stop.className = 'stopItem';
         var allStops = document.getElementsByClassName('stopItem');
         var actStops = allStops.length;
         var newText = document.getElementById('stopwatch').innerHTML;
         stop.innerHTML = "Stop " + (actStops + 1) + ": " + newText;
         text_stop.insertBefore(stop, allStops[0]);
	 }
}

function split() {
         var text_split = document.getElementById('text_split');
         var split_time = document.createElement('div');
         split_time.className = 'splitItem';
         var allSplits = document.getElementsByClassName('splitItem');
         var actSplits = allSplits.length;
         var newText = document.getElementById('stopwatch').innerHTML;
         split_time.innerHTML = "Split " + (actSplits + 1) + ": " + newText;
         text_split.insertBefore(split_time, allSplits[0]);
}

function clear() {
	startTime = 0;
	time = 0;
	document.getElementById('start').innerHTML = 'start';
	document.getElementById('stopwatch').innerHTML = '00:00:00.00';
    var text_stop = document.getElementById('text_stop');
	var text_split = document.getElementById('text_split');
	text_stop.innerHTML = " ";
	text_split.innerHTML = " ";
}

function increment() {
    if (startTime == 1) {
        setTimeout(function() {
            time++;
            var secs = Math.floor(time / 100 % 60);
            var mins = Math.floor(time / 100 / 60);
            var hours = Math.floor (time / 100 / 60 / 60);
            var tenths = time % 100;
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (mins < 10) {
                mins = '0' + mins;
            }
            if (secs < 10) {
                secs = '0' + secs;
            }
            if (tenths < 10) {
                tenths = '0' + tenths;
            }
            document.getElementById('stopwatch').innerHTML = hours + ':' + mins + ':' + secs + '.' + tenths;
            increment();
        }, 7);
    }
}


document.getElementById('start').addEventListener('click', start);
document.getElementById('split').addEventListener('click', split);
document.getElementById('clear').addEventListener('click', clear);
