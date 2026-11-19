import http from "http";
import { spawn } from "child_process";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Synchronous File Operations - Node.js Lab");
});

server.listen(process.env.PORT || 3000, "0.0.0.0");

spawn("node", ["syncFilesOs.js"], { stdio: "inherit" });
