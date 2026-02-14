function setup() {
  createCanvas(400, 400);
  background(500);
  
  shapeColor = color(random(255), random(255), random(255) );
}

function draw() {
  
  noStroke(0);
  fill(shapeColor)
  ellipse(mouseX, mouseY, 25, 25)
  
  function mousePressed() {
    function draw() {
      noStroke(0);
      fill(0, 400, 0)
      ellipse(mouseX, mouseY, 25, 25)
    }
  }
}

function mousePressed(){
  shapeColor = color(random(255), random(255), random(255) );
}
