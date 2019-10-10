const http = require("http");
const getResponse = require("../utils/handler");

const requestHandler = (req, res) => {
  const response = getResponse(req.client);

  // Write public server response first
  res.write(response);
  res.write("\n");

  http
    .request("http://localhost:3002", result => {
      // Get data from remote server and write it on response of public server
      result.on("data", data => {
        res.write(data);
      });

      // When data is received from remote server, end the response of local server too
      result.on("end", () => {
        res.end();
      });
    })
    .end();
};

// Try to find port number from environment variable, if not provided, then use 3000 by default
const port = process.env.port || 3000;
http.createServer(requestHandler).listen(port);
