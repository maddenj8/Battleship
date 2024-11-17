const express = require("express");
const socket = require("socket.io");
const http = require("http");

const app = express();
const PORT = process.env.PORT || 3001;
const server = http.createServer(app);


const io = socket(server);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

io.on("connection", (socket) => { 
    console.log("Made socket Connection", socket.id);
})

