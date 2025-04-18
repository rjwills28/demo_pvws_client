
// Variables to modify.
//  Leave the '/pvws/pv' at the end
this.url = "ws://localhost:8080/pvws/pv";
this.pvname = "temperature:water"

// Open socket
this.socket = new WebSocket(this.url);
this.socket.onopen = event => this.handleConnection(event);
this.socket.onmessage = event => this.handleMessage(event.data);
this.socket.onclose = event => this.handleClose(event);
this.socket.onerror = event => this.handleError(event);

function handleConnection() {
    console.log("Connected to "+this.url);
    // Send subscribe message
    this.socket.send(JSON.stringify({ type: "subscribe", pvs: [this.pvname]}));
}

function handleMessage(message) {
	// Handle message
	const jm = JSON.parse(message);
	let pv = "";
	let value = "";
	if (jm.pv !== undefined) {
		pv = jm.pv;
	}
	if (jm.value !== undefined) {
		value = jm.value;
	}
	// Update html element
	document.body.innerHTML = "<h1>" +pv +" = " + value +"</h1>"
}

function handleClose() {
	console.log("Connection closed");
}

function handleError(){
	console.log("Error");
}