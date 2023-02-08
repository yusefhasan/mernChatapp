const React = require("react");
const io = require("socket.io-client").io;
const SOCKET_URL="http://localhost:5001"

module.exports = {
    
    socket: io(SOCKET_URL),
    AppContext: React.createContext()
  };
  

