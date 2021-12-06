
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.on('data', (data) => {
    console.log('Message to player: ', data)
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });

  conn.on('connect', () => {
    conn.write("Name: LEA");

    //moving the snake using setTimeout and setInterval:

    //setTimeout(() => conn.write("Move: up"), 500);
    //setTimeout(() => conn.write("Move: up"), 1000);
    //setInterval(() => conn.write("Move: up"), 1000);

    // conn.write("Move: up");
  });



  return conn;
};

//console.log("Connecting ...");


module.exports = { connect };