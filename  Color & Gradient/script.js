var lgCanvas = document.getElementById("lgCanvas");
// using getContext object for creating shapes and drawing
var ctx = lgCanvas.getContext("2d");

// creating linear gradient
var lGrad = ctx.createLinearGradient(0, 0, 200, 0)
lGrad.addColorStop(0, "lightblue");
lGrad.addColorStop(1, "darkblue");

// fill rectangle with gradient
ctx.fillStyle = lGrad;
ctx.fillRect(10,10,150,80);

// Fill outlined rectangle with gradient
ctx.lineWidth = 10;
ctx.strokeStyle = lGrad;
ctx.strokeRect(10,100,150,80)


// Radial Gradient
var rgCanvas = document.getElementById("rgCanvas");
var ctx1 = rgCanvas.getContext("2d");

// Create gradient
const rGrad=ctx1.createRadialGradient(150,75,15,150,75,150);
rGrad.addColorStop(0,"lightblue");
rGrad.addColorStop(1,"darkblue");

// Fill rectangle with gradient
ctx1.fillStyle = rGrad;
ctx1.fillRect(10,10,280,130);
