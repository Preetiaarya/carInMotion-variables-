let leftWheel = 80;
let rightWheel = 160;
let body = 80;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(255, 0, 0);
  rect(body, 220, 80, 60);
  fill(0);
  ellipse(leftWheel, 280, 50, 50);
  ellipse(rightWheel, 280, 50, 50);

  leftWheel = leftWheel + 1;
  rightWheel = rightWheel + 1;
  body = body + 1;

  if(rightWheel >= width||leftWheel>= width||body >= width){
    rightWheel = 80;
    leftWheel = 0;
    body = 0;
  }
}

