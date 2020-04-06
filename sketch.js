var r,g,b;


function setup() {
    createCanvas(800,400);


}
function draw() {
    background(0);  
    let r = map(mouseX, 0, width, 0, 175);
    fill(255,204,100);
 ellipse(width/2, height/2, r, r);
    let g = map(mouseX, 0, width, 40, 300);
  fill(255,r,100);
  ellipse(width/2, height/2, g, g);
  let b = map(mouseX,0,width,80,400);
    fill(255, g, 100);
  
   ellipse(width/2, height/2, b, b);
   // r.x=mouseX;
    //r.y=mouseY;
    //r.shapecolor ="red";
}