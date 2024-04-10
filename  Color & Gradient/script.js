var canvas = document.getElementById("myCanvas");
console.log("Hello");
// using getContext object for creating shapes and drawing
var ctx = canvas.getContext("2d");

// creating linear gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0)
grd.addColorStop(0, "lightblue");
grd.addColorStop(1, "darkblue");

// fill rectangle with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

// Fill outlined rectangle with gradient
ctx.lineWidth = 10;
ctx.strokeStyle = grd;
ctx.strokeRect(10,100,150,80)

