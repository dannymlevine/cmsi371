var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
console.log(ctx)


ctx.moveTo(270,200)
ctx.quadraticCurveTo(210,120,70,200)
ctx.moveTo(270,200)
ctx.lineTo(70,200)
ctx.moveTo(266,195)
ctx.lineTo(78,195)
ctx.moveTo(140,168)
ctx.lineTo(100,130)
ctx.lineTo(30,130)
ctx.lineTo(85,150)
ctx.lineTo(78,195)
ctx.moveTo(70,200)
ctx.lineTo(70,220)
ctx.quadraticCurveTo(75,225,82,230)
ctx.lineTo(85,233)
ctx.lineTo(102,250)
ctx.lineTo(72,270)
ctx.lineTo(140,265)
ctx.lineTo(150,233)
ctx.lineTo(230,233)
ctx.quadraticCurveTo(250,200,270,200)
ctx.moveTo(85,233)
ctx.quadraticCurveTo(130,220,150,233)
ctx.strokeRect(150,180,6,10)
ctx.moveTo(180,180)
ctx.arc(180,180,4,0,Math.PI*2,true)
ctx.moveTo(200,180)
ctx.arc(200,180,3,0,Math.PI*2,true)
ctx.moveTo(220,180)
ctx.arc(220,180,2,0,Math.PI*2,true)
ctx.moveTo(250,180)
ctx.lineTo(240,180)
ctx.lineTo(237,185)
ctx.lineTo(259,188)
ctx.moveTo(70,210)
ctx.quadraticCurveTo(65,190,40,195)
ctx.moveTo(70,220)
ctx.quadraticCurveTo(65,240,40,225)
ctx.lineTo(40,195)
ctx.lineTo(35,195)
ctx.lineTo(40,200)
ctx.lineTo(35,200)
ctx.lineTo(40,205)
ctx.lineTo(35,205)
ctx.lineTo(40,210)
ctx.lineTo(35,210)
ctx.lineTo(40,220)
ctx.lineTo(35,220)
ctx.lineTo(40,225)
ctx.stroke();
