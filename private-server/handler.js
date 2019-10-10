const getResponse = client => {
  // Step 1. Get values from request for both client and the server
  // I am using propert destructuring for compact code
  const {
    remoteAddress: clientIp,
    remotePort: clientPort,
    localAddress: serverIp,
    localPort: serverPort
  } = client;

  return `Hello from ${clientIp}:${clientPort} to ${serverIp}:${serverPort}`;
};

module.exports = getResponse;
