const io = require("socket.io-client");
const React = require("react");
const SOCKET_URL = "http://localhost:5001";
const socket = io(SOCKET_URL);
// app context
const AppContext = React.createContext();

module.exports = { socket, AppContext };
