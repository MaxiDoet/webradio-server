const server = require('http').createServer();
const io = require('socket.io')(server);
const logger = require("./util/logger.js");
const config = require("./config.json");

let info = {
	"name": "Bayern 1",
	"country": "DE-BY", // ISO 3166-2
	"languages": ["DE"], // ISO 639-1
	"website": "https://www.br.de/radio/bayern1",
	"streams": [
		{
			"bitrate": 64000,
			"url": "https://streams.br.de/bayern1nbopf_1.m3u"
		},
		{
                        "bitrate": 128000,
                        "url": "https://streams.br.de/bayern1nbopf_2.m3u"
                },
	]
}

let programInfo = {
	"title": "",
	"song": "Hot'N'Cold",
	"artist": "Katy Perry",
	"album": "One of the Boys",
	"start": "1621875900000", // In ms
	"end": "1621890000000", // In ms
	"flags": {
		"category": 0, // 0: Normal 1: News 2: Advertisement 3: Traffic
		"audio": 1 // 0: Mono 1: Stereo 2: Surround
	}
}

io.on('connection', function(socket){
	logger.log("Client has connected!")

	logger.log("Sending info")
	socket.emit('info', info)
});

setInterval(function() {
	io.emit('program-info', programInfo)
}, 1000)

server.listen(4030);
