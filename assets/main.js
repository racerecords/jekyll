var table = document.getElementById('readingsTable');
var ul = document.getElementById('index');

function reqListener () {
  var res = JSON.parse(this.responseText);
  populateMeta(res);
  fetchRows(res['readings']);
}


function populateMeta (data) {
  var meta = [ "track","date","region","classes","ambientBefore",
              "groupNumber","reader","recorder","siteCertificationDate" ]
  var meter = ["factoryCalibrationDate","fieldCalibrationTime","batteryLevel","microphoneLocation"]
  var session = ["start","end"]
  var condition = ["temperature","humidity","barometer","weather","windSpeed","windDirection"]
  loop(meta, data);
  loop(session, data);
  loop(meter, data);
  loop(condition, data);
}

function loop (arr, data) {
  var i;
  for (i=0; i<arr.length; i++) {
    populateElement(arr[i], data[arr[i]]);
  }
}

function populateElement(key, value) {
  var el = document.getElementById(key);
  el.innerHTML = value;
}

function buildRow (reading) {
  var row = document.createElement('tr'); 
  row.appendChild(buildData(reading['number']));
  row.appendChild(buildData(reading['carclass']));
  row.appendChild(buildData(reading['reading']));
  table.appendChild(row);
}

function buildData (value) {
  td = document.createElement('td');
  td.innerText = value
  return td;
}

if (ul != null) {
  //var url = 'http://race-records.s3-website-us-east-1.amazonaws.com/records/index.json';
  var url = 'http://localhost:4000/records/index.json';
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", index);
  oReq.open("GET", url);
  oReq.send();
}

function index () {
  console.log('writing index to dom');
  var list = JSON.parse(this.responseText);
  keys = Object.keys(list);
  keys.forEach (function(key) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.innerText = key;
    a.dataset.file = list[key];
    a.href = '/show';
    a.addEventListener('click', function eventCallback(event) {
      event.preventDefault();
      localStorage.setItem('record', this.dataset.file);
      window.location.href = '/show';
    });
    li.appendChild(a);
    ul.appendChild(li);
  });
}

function new_reading () {
  var btn = document.getElementById('new-reading-btn');
  btn.addEventListener('click', function (event) {
    console.log('button');
  });
}


if (table != null) {
  //var path = 'http://race-records.s3-website-us-east-1.amazonaws.com/';
  var path = 'http://localhost:4000/';
  var file = localStorage.getItem('record');
  var url = path + 'records/' + file + '.json';
  console.log(url);
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", url);
  oReq.send();
  new_reading();
};

function fetchRows(readings) {
  readings.forEach(function(reading) {
    console.log(reading);
    buildRow(reading);
  }); 
}
