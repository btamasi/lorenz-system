var x = 1;
var y = 0;
var z = 0;

var sigma = 10;
var rho = 28;
var beta = 8/3;

var points = [];

function setup() {
  createCanvas(300, 300, WEBGL);
}

function draw() {
  background(0);
  
  var dt = 0.01;
  var dx = (sigma * (y - x)) * dt;
  var dy = (x * (rho - z) - y) * dt;
  var dz = (x * y - beta * z) * dt;
  x += dx;
  y += dy;
  z += dz;
  points.push(createVector(x, y, z));
  //console.log(x + " " + y + " " + z);
  
  scale(6);
  ambientLight(255);
  rotateY(frameCount * 0.001);
  beginShape();
  for (var i = 0; i < points.length; i++) {
    vertex(points[i].x, points[i].y, points[i].z);
  }
  endShape();
  
}