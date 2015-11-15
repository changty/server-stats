var sys = require('sys'); 
var exec = require('child_process').exec; 
var express = require('express'); 
var app = express(); 

var child; 

app.get('/', function(req, res) {
	res.send('Server running....');
});

app.get('/suspend', function(req, res) {
	child =  exec('systemctl suspend', function(error, stdout, stderr) {
		if(error !== null) {
			console.log("Error suspending:",  error); 
		}
	});
	res.send('Trying to suspend...');
});

var server = app.listen(3333, function() {
	var host = server.address().address; 
	var port = server.address().port; 

	console.log("Server running @ http://%s:%s", host, port);
});

