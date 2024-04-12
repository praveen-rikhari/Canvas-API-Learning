window.onload = function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const img = document.getElementById("img");
    ctx.drawImage(img, 10, 10);
  };
