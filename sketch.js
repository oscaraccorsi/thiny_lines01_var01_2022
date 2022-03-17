let x = 0;
let x1 = 0;
let y = 0;
let r = 0;
let g = 0;
let b = 0;
let a = 0;
let i = 10;
let h;
let w;
let inc = 0.75;
let diff; 
let poss = [3, 5, 8, 13, 21, 34];
let xPos;





let drone;

function preload() {
 drone = loadSound("assets/drone01.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  reverb = new p5.Reverb();
  reverb.process(drone, 4, 0, false);
  rnd();
  rnd1();
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  
  stroke(r, g, b, a);
  line(w, h-i, x, y );
  x += 10;
  
  if (x >= x1) {
    //y += 10;
    x = xPos;
    a = a + inc;
    i += diff;
    drone.setVolume(0+a/1000);
    }
  
  if (i >= h/2) {
    background(0);
    //x = 0;
    //y = 0;
    i = 0;
    a = 0;
    rnd();
    rnd1();
  }
  
}

function rnd() {
  drone.stop();
  y = 0;//random (windowHeight);
  //x = random(0,windowWidth/2);
  x1 = random(windowWidth/2, windowWidth);
  h = random(windowHeight/3,windowHeight);
  w = random(100, windowWidth-100);
  r = random(255);
  g = random(255);
  b = random(255);
  diff = random(poss);
  drone.loop(0, (windowHeight-h)/1000);
  drone.setVolume(0);
  //console.log((windowHeight-h)/1000);  
}
function rnd1() {
  xPos = random(0,windowWidth/2);
}
