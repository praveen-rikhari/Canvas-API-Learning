var canvas = document.getElementById("myCanvas");
console.log("Hello");
// using getContext object for creating shapes and drawing
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#23b0ed"

// Draws a filled rectangle.
// ctx.fillRect(25, 25, 100, 100);

// Clears the specified rectangular area, making it fully transparent.
// ctx.clearRect(45, 45, 60, 60);

// Draws a rectangular outline.
// ctx.strokeRect(50, 50, 50, 50);


// creating triangle using paths
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();