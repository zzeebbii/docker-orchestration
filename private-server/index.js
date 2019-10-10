const http = require("http");
const getResponse = require("./handler");

const requestHandler = (req, res) => {
  const response = getResponse(req.client);
  res.write(response);
  res.end();
};

// Try to find port number from environment variable, if not provided, then use 3000 by default
const port = process.env.port || 8002;
http.createServer(requestHandler).listen(port);
