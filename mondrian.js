function setup() {
  createCanvas(400, 650);
}

function draw() {
  background(250);
  noStroke();

  //blue rectangles
  fill(30, 50, 150);
  rect(0, 10, 110, 140);
  rect(470, 270, 130, 170);
  rect(0, 400, 110, 110);

  //red rectangles
  fill(215, 10, 10);
  rect(110, 250, 360, 130);

  //yellow rectangles
  fill(255, 310, 20);
  rect(290, 0, 150, 60);
  rect(290, 400, 310, 250);

  //black lines
  stroke(0);
  strokeWeight(12);
  line(0, 140, 470, 140);
  line(470, 440, 600, 440);
  line(0, 600, 600, 600);
  line(0, 710, 290, 710);
  line(110, 0, 110, 710);
  line(290, 0, 290, 140);
  line(290, 600, 290, 850);
}
