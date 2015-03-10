(function() {
	var win1 = Titanium.UI.createWindow({
		title:'Select Color', 
		backgroundColor:'#fff'
	});
	// open window
	win1.open();
}) ();

var Teas = ['#F5F5DC', '#FFE4B5', '#FFE4C4', '#D2B48C', '#C3B091', 'C3B091', '#926F5B', '#804000', '#654321', '#3D2B1F'];

allRows = []; 
var theColours = Ti.UI.createTableView({});

for (var i=0; i<Teas.length; i++) {
	theRow = Ti.UI.createTableView ({backgroundColor:
	Teas [i], height:50, TeaColour:Teas[i]});
	allRows.push(theRow); 
}

theColours.setData(allRows);
win1.add(theColours);
win1.add(Teas);

function getVerdict(colour) {
	var indicator = colour.charAt(1); 
	var msg;
	//make a crude decision on the strength of the tea based on the 2nd character of the hex color
	switch(indicator) {
		case 'F': msg = 'Milky'; break;
		case 'D': msg = 'Nice'; break; 
		case 'C': msg = 'Perfect'; break; 
		case '9': msg = 'A bit strong'; break; 
		case '8': msg = 'Builders tea'; break;
		case '6': msg = 'Send it back'; break;
		case '3': msg = 'No milk here'; break;
	}
	return msg;
};

win.add(indicator);
win.add(msg);

function showTeaVerdict (_args) {
	var teaVerdict = Ti.UI.createWindow ({layout:'vertical'});
	
	teaVerdict.backgroundColor = _args;
	teaVerdict.msg = getVerdict(_args);
	var judgement = Ti.UI.createLabel
	({text:teaVerdict.msg, top:'50%'});
	var close = Ti.UI.createButton
	({title:'Choose again', top:'25%'});
	close.addEventListener('click', function (e)
		{teaVerdict.close();
		//release the resources
		teaVerdict = null;
		});
	
	teaVerdict.add(judgement);
	teaVerdict.add(close);
	teaVerdict.open();
}

theColours.addEventListener('click', function(e)
{showTeaVerdict(e.source.TeaColour);
	});
	
	var camera = Ti.UI.createButton({title: 'Camera'});
win1.add(camera);
camera.addEventListener('click', function (e) {
	var win2 = Titanium.UI.createWindow({
	backgroundColor:'#fff'
}); 

  win2.open({ animated: true });
});

var options = Ti.UI.createView({layout: 'vertical'}); 
var showCamera = Ti.UI.createButton({title: 'Show Camera'}); 
var thePhoto = Ti.UI.createImageView({height: '30%', width: '30%'}); 

options.add(showCamera); 
options.add(thePhoto); 
win2.add(options); 

function showPhoto (_args) {
	thePhoto.setImage(_args.media);
}
	