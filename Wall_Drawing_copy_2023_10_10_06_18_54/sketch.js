
// Wall Drawing, Sol Lewitt
// code by Seungbum Kim

let n = 10;
let randomPoints;

function setup() {
  createCanvas(900, 768);
   background(0);
  //noLoop();
  

}


function draw() {

  
    // clean
  background(255,255,255,15);
 // background(0,0,0,25);
   frameRate(1);
  randomPoints = [];
  
  
  // step 1
  for (let i=0; i<n; i++) {
    let point = {x: random(width), y: random(height)};
    randomPoints.push(point);
  }
  
  
  // step 2
  //stroke(0, 0, 0, 100);
  //strokeWeight(random(150));
  for (p of randomPoints) {
    point(p.x, p.y);
    strokeWeight(random(150));
    stroke(random(255),random(255),random(255), random(100,170));
  }
  
  
  // step 3
  //stroke(random(255),random(255),random(255), 100);
  strokeWeight(0.3);
  for (let i=0; i<n; i++) {
    let sp = randomPoints[i];
    for (let j=i+1; j<n; j++) {
      let ep = randomPoints[j];
      line(sp.x, sp.y, ep.x, ep.y);
      stroke(random(255),random(255),random(255), 200);
    }
  }
  

  
  
}
