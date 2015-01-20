var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
console.log(ctx)


ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect (300, 150, 55, 50);

ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect (300, 100, 55, 50);

ctx.fillStyle="rgba(0,0,0,0.5)";
ctx.beginPath();
ctx.moveTo(200,150);
ctx.lineTo(210,160);
ctx.closePath();
ctx.stroke()
ctx.fill();

ctx.fillStyle="gray";
ctx.beginPath();
ctx.moveTo(205,155);
ctx.lineTo(230,140);
ctx.lineTo(215,140)
ctx.closePath();
ctx.stroke()
ctx.fill();

ctx.fillStyle="gray";
ctx.beginPath();
ctx.moveTo(205,155);
ctx.lineTo(230,140);
ctx.lineTo(225,150)
ctx.closePath();
ctx.stroke()
ctx.fill();

ctx.beginPath();
ctx.moveTo(205,155);
ctx.lineTo(195,165)
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.fillStyle="rgba(0,0,0,0.5)";
ctx.beginPath();
ctx.arc(197,162,5,0,Math.PI*2,true);
ctx.moveTo(195,160)
ctx.lineTo(170,160)
ctx.moveTo(170,160)
ctx.lineTo(155,145)
ctx.moveTo(155,145)
ctx.arc(155,145,10,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.beginPath();

ctx.closePath();
ctx.stroke();
ctx.fill();
