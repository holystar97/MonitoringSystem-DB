startConnect();

var samples = 20;
var speed = 1000;
let timeout = samples * speed;
var values = [];
var values2 = [];
var values3 = [];
var labels = [];
var charts = [];
var value = 0;
var scale = 1;
var originalCalculateXLabelRotation = Chart.Scale.prototype.calculateXLabelRotation
var v;  //cpu

addEmptyValues(values, samples);

//function getParameterByName(name) {
//  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//      results = regex.exec(location.search);
//  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
//}

function startConnect() {
// Generate a random client ID
    clientID = "clientID-" + parseInt(Math.random() * 100);

// Fetch the hostname/IP address and port number from the form
// host = document.getElementById("host").value;
    console.log("connect");
//host="";
    host="223.194.128.191";


// port = document.getElementById("port").value;
    port="9001";
// Print output for the user in the messages div
//    document.getElementById("messages").innerHTML += '<span>Connecting to: ' + host + ' on port: ' + port + '</span><br/>';
//   document.getElementById("messages").innerHTML += '<span>Using the following client value: ' + clientID + '</span><br/>';

// Initialize new Paho client connection
    client = new Paho.MQTT.Client(host, Number(port), clientID);

// Set callback handlers
//    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

// Connect the client, if successful, call onConnect function
    client.connect({
        onSuccess: onConnect,
    });
//addEmptyValues(values,samples);
}

// Called when the client connects
function onConnect() {
// Fetch the MQTT topic from the form
// topic = document.getElementById("topic").value;
    topic="mon/#";
// Print output for the user in the messages div
    // document.getElementById("messages").innerHTML += '<span>Subscribing to: ' + topic + '</span><br/>';

// Subscribe to the requested topic
    client.subscribe(topic);

}
// Called when the client loses its connection
function onConnectionLost(responseObject) {
    // document.getElementById("messages").innerHTML += '<span>ERROR: Connection lost</span><br/>';
    // if (responseObject.errorCode !== 0) {
    //   document.getElementById("messages").innerHTML += '<span>ERROR: ' + + responseObject.errorMessage + '</span><br/>';
    // }
}

// Called when a message arrives
function onMessageArrived(message) {
    switch(message.destinationName){
        case "mon/cpu":
            v = parseInt(message.payloadString);
            break;

    }
    console.log("onMessageArrived: " + message.payloadString);
    //document.getElementById("messages").innerHTML += '<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>';
}
// Called when the disconnection button is pressed
function startDisconnect() {
    client.disconnect();
    // document.getElementById("messages").innerHTML += '<span>Disconnected</span><br/>';
}


//addEmptyValues(values,samples);
function initialize() {
    charts.push(new Chart(document.getElementById("chart0"), {
        type: 'line',
        data: {
//labels: labels,
            datasets: [{
                data: values,
                backgroundColor: 'rgba(255, 99, 132, 0.1)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                lineTension: 0.25,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: speed * 0.5,
                easing: 'linear'
            },
            legend: false,
            scales: {
                xAxes: [{
                    type: "time",
                    display: true
                }],
                yAxes: [{
                    ticks: {
                        max: 100,
                        min: 0
                    }
                }]
            }
        }
    }));
}


