var inc = 0.007;
function setup() {
  createCanvas(1400, 600);
  pixelDensity(1);
  //frameRate(15);
}

function draw() {
   noStroke();
  fill(255,255,0,25);
  ellipse(340,210,100,100);
  loadPixels();
  var xoff = 0;
  for (var x = 0; x < width; x++){
    var yoff =0;
     for (var y = 0; y < height; y++){
     var index = (x + y * width) * 4;
       var r = noise(yoff, xoff) *255;
       pixels[index + 0] = r;
       pixels[index + 1] = r;
       pixels[index + 2] = 155;
       pixels[index + 3] = (225);
       yoff += inc;
     } 
    xoff += inc;
  }
  updatePixels();
  //noStroke();
  //fill(255,255,50,35);
  //ellipse(340,210,50,50);
}
  
