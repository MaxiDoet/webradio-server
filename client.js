const io = require("socket.io-client");
const socket = io.connect("ws://localhost:4030");
const logger = require("./util/logger.js");

socket.on("connect", () => {
	console.log("Connected to server!");

	socket.on("info", (msg) => {
		logger.log("Received info: ", msg)
	})

	socket.on("program-info", (msg) => {
		logger.log("Received program info: ", msg)
	})
});

