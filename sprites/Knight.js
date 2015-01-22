var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
console.log(ctx)

//crossguard
ctx.fillStyle="rgba(0,0,0,0.5)";
ctx.beginPath();
ctx.moveTo(200,150);
ctx.lineTo(210,160);
ctx.closePath();
ctx.stroke()
ctx.fill();

//blade1
ctx.fillStyle="gray";
ctx.beginPath();
ctx.moveTo(205,155);
ctx.lineTo(230,140);
ctx.lineTo(215,140)
ctx.closePath();
ctx.stroke()
ctx.fill();

//blade2
ctx.fillStyle="gray";
ctx.beginPath();
ctx.moveTo(205,155);
ctx.lineTo(230,140);
ctx.lineTo(225,150)
ctx.closePath();
ctx.stroke()
ctx.fill();

//hilt
ctx.beginPath();
ctx.moveTo(205,155);
ctx.lineTo(195,165)
ctx.closePath();
ctx.stroke();
ctx.fill();

//hand arm and shoulder
ctx.fillStyle="gray";
ctx.beginPath();
ctx.arc(197,162,5,0,Math.PI*2,true);
ctx.moveTo(195,160)
ctx.lineTo(170,160)
ctx.moveTo(170,160)
ctx.lineTo(155,145)
ctx.moveTo(155,145)
ctx.arc(155,145,4,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();
ctx.fill();

//body and shoulder
ctx.fillStyle="rgba(0,0,0,0.5)";
ctx.beginPath();
ctx.moveTo(155,145)
ctx.lineTo(168,195)
ctx.lineTo(180,145)
ctx.arc(180,145,4,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();
ctx.fill();

//wheel
ctx.beginPath();
ctx.arc(168,195,7,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();
ctx.fill();

//head
ctx.beginPath();
ctx.arc(169,135,9,0,Math.PI*2,true)
//ctx.lineTo(175,140)
//ctx.moveTo(175,140)
//ctx.lineTo(175,135)
ctx.closePath();
ctx.stroke();


//Eye
ctx.fillStyle="red"
ctx.beginPath();
ctx.arc(172,132,2,0,Math.PI*2,true);
ctx.closePath();
ctx.stroke();
ctx.fill();
