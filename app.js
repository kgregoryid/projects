var win = Ti.UI.createWindow({
	backgroundColor: '#ffffff',
	layout: 'vertical'
});

// Timer View
var timeView = Ti.UI.createView({
	top:0,
	width: '90%',
	height: '25%',
	backgroundColor: '#1C1C1C'
});

var label = Ti.UI.createLabel({
	color: '#404040',
	text: 'ARE YOU READY?',
	height: '50%',
	textAlign: 'center',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	font:{
		fontSize: '55sp',
		fontWeight: 'bold'
	}
});

timeView.add(label);
win.add(timeView);

// Stopwatch specific code
var Stopwatch = require('stopwatch');
var stopWatch = new Stopwatch(stopwatchListener, 10);

function stopwatchListener(watch) {
	label.text = watch.toString();
}

// Container view for buttons
var buttonsView = Ti.UI.createView({
	width: '100%',
	height: '10%',
	layout: 'horizontal'
});

// First button : go / lap
var buttonStartLap = Ti.UI.createButton({
	title: 'BEGIN!',
	color: '#C0BFBF',
	width: '40%',
	height: Ti.UI.FILL,
	font: {
		fontSize: '25sp',
		fontWeight: 'bold'
	},
	style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
});

buttonsView.add(buttonStartLap);

// Second button : stop / reset
var buttonStopReset = Ti.UI.createButton({
	title: 'END',
	color: '#C0BFBF',
	width: '40%',
	height: Ti.UI.FILL,
	font: {
		fontSize: '25sp',
		fontWeight: 'bold'
	},
	style: Titanium.UI.iPhone.SystemButtonStyle.PLAIN
});

buttonsView.add(buttonStopReset);

win.add(buttonsView);

// Table View that contains previous laps
var table = Ti.UI.createTableView({
	width: '100%',
	height:Ti.UI.FILL,
	backgroundColor: '#C0BFBF'
});
win.add(table);

var isRunning = false;

buttonStartLap.addEventListener('click', function(e) {
	// If the timer is running, we add a new lap
	if (isRunning) {
		// Append a new lap in the list
		var row = Ti.UI.createTableViewRow({
			title: stopWatch.toString(),
			color: '#404040',
			className: 'lap',
			leftImage: '/images/lap.png',
			font:{
				fontSize: '24sp',
				fontWeight: 'bold'
			}
		});

		table.appendRow(row);
	} else {
		// If the clock is not ticking, then we start it
		isRunning = true;
		buttonStartLap.title = 'LAP!';
		buttonStopReset.title = 'STOP';
		stopWatch.start();
	}
});

buttonStopReset.addEventListener('click', function(e) {
	// If the timer is running, we stop it
	if (isRunning) {
		buttonStartLap.title = 'GO!';
		buttonStopReset.title = 'RESET';
		stopWatch.stop();
		isRunning = false;
	} else {
		// If the timer is not running, we reset everything
		table.setData([]);
		stopWatch.reset();
		label.text = 'READY?';
	}
});

win.open();
