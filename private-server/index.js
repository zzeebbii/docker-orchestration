const http = require("http");
const getResponse = require("../utils/handler");

const requestHandler = (req, res) => {
  const response = getResponse(req.client);
  res.write(response);
  res.end();
};

// Try to find port number from environment variable, if not provided, then use 3000 by default
const port = process.env.port || 3002;
http.createServer(requestHandler).listen(port);
