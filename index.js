const http = require("http");

// Create server
const app = require("./app");
const server = http.createServer(app);
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
