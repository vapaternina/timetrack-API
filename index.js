const app = require("./server");

const config = require("./server/config");

const { hostname, port } = config.server;

const PORT = process.env.PORT || 5000;

const server = require("http").createServer(app);

app.get("/", (req, res) => res.send("API ejecutandose correctamente"));

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
