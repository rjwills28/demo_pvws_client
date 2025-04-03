let url = "ws://localhost:8080/pvws/pv";
this.socket = new WebSocket(url);
this.socket.onopen = event => this.handleConnection(event);
this.socket.onmessage = event => this.handleMessage(event.data);
this.socket.onclose = event => this.handleClose(event);
this.socket.onerror = event => this.handleError(event);

function handleConnection() {
    console.log("Connected to url");
    console.log(this.socket);
    this.socket.send(JSON.stringify({ type: "subscribe", pvs: ["temperature:water"]}));

}

function handleMessage(message) {
	const jm = JSON.parse(message);
	let pv = "";
	let value = "";
	if (jm.pv !== undefined) {
		pv = jm.pv;
	}
	if (jm.value !== undefined) {
		value = jm.value;
	}
	document.body.innerHTML = "<h1>" +pv +" = " + value +"</h1>"
}

function handleClose() {
	console.log("Connection closed");
}

function handleError(){
	console.log("Error");
}