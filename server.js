// const http = require("http");
import http from "http";
import app from "./app.js";
// const app = require("./app");

const port = process.env.PORT || 3001;

const server = http.createServer(app);

server.listen(port);
