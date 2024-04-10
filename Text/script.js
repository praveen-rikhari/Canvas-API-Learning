const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px Arial";
ctx.strokeText("Hello World",10,80);

ctx.font = "bold italic 50px Arial";
ctx.strokeText("Hello World",10,160);