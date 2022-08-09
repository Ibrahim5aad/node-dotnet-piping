var net = require('net');
const readline = require('readline');

var pipePath = "\\\\.\\pipe\\Pipe.Server";

var client = net.connect(pipePath, connectionListener = function() 
	{ 
		client.on('data', (data) => { console.log('Message recieved from server: ' + data.toString()); 
	});
});


readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY)
  process.stdin.setRawMode(true);


var msg = '';
process.stdin.on('keypress', (str, key) => {
   
  if(key.name == 'up' || key.name == 'down' || key.name == 'left' || key.name == 'right')
		return;
	 
	msg += str; 
	process.stdout.write(str);
	if(key.name == 'return')
	{
		console.log('Message sent to server: ' + msg);
		client.write(msg);
		msg = '';
	}

  if(key.ctrl == true && key.name == 'c'){
      process.exit()
  }

});

