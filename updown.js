function setup() {
  createCanvas(420, 120);
}

var ballY = 0;
var ballSpeed = 5;

var ballY2 = 20;
var ballSpeed2 = 5;

var ballY3 = 40;
var ballSpeed3 = 5;

var ballY4 = 60;
var ballSpeed4 = 5;

var ballY5 = 80;
var ballSpeed5 = 5;

var ballY6 = 100;
var ballSpeed6 = 5;

function draw() {
  background(50);
  noStroke();

  fill(255, 0, 0);
  ellipse(50, ballY, 30);

  fill(255, 0, 0);
  ellipse(100, ballY2, 30);

  fill(255, 225, 0);
  ellipse(100, ballY3, 30);

  fill(0, 225, 0);
  ellipse(200, ballY4, 30);

  fill(0, 225, 225);
  ellipse(200, ballY5, 30);

  fill(0, 0, 225);
  ellipse(400, ballY6, 30);

  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;
  ballY3 = ballY3 + ballSpeed3;
  ballY4 = ballY4 + ballSpeed4;
  ballY5 = ballY5 + ballSpeed5;
  ballY6 = ballY6 + ballSpeed6;

  if (ballY >= 120) {
    ballSpeed = -5;
  }

  if (ballY3 >= 120) {
    ballSpeed3 = -5;
  }

  if (ballY4 >= 120) {
    ballSpeed4 = 5;
  }

  if (ballY5 >= 120) {
    ballSpeed5 = 5;
  }

  if (ballY6 >= 120) {
    ballSpeed6 = 5;
  }

  if (ballY <= 0) {
    ballSpeed = 5;
  }

  if (ballY2 <= 0) {
    ballSpeed2 = 6;
  }
  if (ballY3 <= 0) {
    ballSpeed3 = 7;
  }

  if (ballY4 <= 0) {
    ballSpeed4 = 8;

  }
  if (ballY5 <= 0) {
    ballSpeed5 = 9;
  }

  if (ballY6 <= 0) {
    ballSpeed6 = 10;
  }

}
