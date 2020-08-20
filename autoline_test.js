var samples = 20;
var speed = 500;
let timeout = samples * speed;
var values = [];
//var values3=[];
var labels = [];
var charts = [];
var value = 0;
var scale = 1;

addEmptyValues(values, samples);
//addEmptyValues(values3,samples);

var originalCalculateXLabelRotation = Chart.Scale.prototype.calculateXLabelRotation


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
                duration: speed *0.5,
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

function addEmptyValues(arr, n) {
    for(var i = 0; i < n; i++) {
        arr.push({
            x: moment().subtract((n - i) * speed, 'milliseconds').toDate(),
            y: 20
        });
    }
}

function rescale() {
    var padding = [];

    addEmptyValues(padding, 10);
    values.splice.apply(values, padding);
//values3.splice.apply(values3,padding);

    scale++;
}

function updateCharts(){
    charts.forEach(function(chart) {
        chart.update();
    });
}

function progress() {
    //value = Math.min(Math.max(value + (0.1 - Math.random() / 5), -1), 1);
    values.push({
        x: new Date(),
        y: 50
    });
    values.shift();
    values2.shift();
//values3.shift();
}

function advance() {
    if (values[0] !== null && scale < 4) {
        //rescale();
        updateCharts();
    }
    if( values2[0] !==null&&scale <4){
        updateCharts();
    }

    /*if (values3[0] !==null&&scale <4){
    updateCharts();
    }*/
    progress();
    updateCharts();

    setTimeout(function() {
        requestAnimationFrame(advance);
    }, speed);
}

window.onload = function() {
    initialize();
    advance();
};





