var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
console.log(ctx)

fillStyle="gray"
//left leg
ctx.strokeRect(170,170,18,5)
ctx.strokeRect(170,155,15,20)
ctx.strokeRect(170,145,15,20)

//right Leg
ctx.strokeRect(195,170,18,5)
ctx.strokeRect(195,155,15,20)
ctx.strokeRect(195,145,15,20)

//body
ctx.strokeRect(165,95,50,50)

//door
ctx.strokeRect(175,100,35,35)
ctx.arc(205,115,3,0,Math.PI*2,true)
ctx.stroke()


//right arm
ctx.strokeRect(215,100,18,15)
ctx.strokeRect(220,100,18,15)
ctx.strokeRect(225,100,18,15)
ctx.moveTo(243,100)
ctx.arc(250,100,5,0,Math.PI,true)
ctx.stroke();

//left arm
ctx.strokeRect(137,100,18,15)
ctx.strokeRect(142,100,18,15)
ctx.strokeRect(147,100,18,15)

//head
ctx.moveTo(178,95);
ctx.lineTo(178,70);
ctx.moveTo(200,95);
ctx.lineTo(200,70);
ctx.bezierCurveTo(200,70,189,50,178,70)
ctx.moveTo(184,74);
ctx.arc(184,74,2,0,Math.PI*2,true)
ctx.moveTo(194,74);
ctx.arc(194,74,2,0,Math.PI*2,true)
ctx.stroke();




