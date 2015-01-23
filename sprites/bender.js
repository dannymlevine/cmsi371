var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
console.log(ctx)

fillStyle="gray"

//door
ctx.strokeRect(175,100,35,35)
ctx.arc(205,115,3,0,Math.PI*2,true)
ctx.stroke();


//left leg
ctx.strokeRect(167,170,15,5)
ctx.strokeRect(167,155,15,20)
ctx.strokeRect(167,145,15,20)

//left foot
ctx.moveTo(167,175)
ctx.lineTo(164,180)
ctx.moveTo(183,175)
ctx.lineTo(186,180)
ctx.quadraticCurveTo(186,180,164,180)



//right Leg
ctx.strokeRect(198,170,15,5)
ctx.strokeRect(198,155,15,20)
ctx.strokeRect(198,145,15,20)

//right foot
ctx.moveTo(198,175)
ctx.lineTo(195,180)
ctx.moveTo(214,175)
ctx.lineTo(217,180)
ctx.quadraticCurveTo(217,180,195,180)


//body
ctx.strokeRect(165,95,50,50)




//right arm
ctx.strokeRect(215,100,18,15)
ctx.strokeRect(220,100,18,15)
ctx.strokeRect(225,100,18,15)

//right hand
ctx.moveTo(243,100)
ctx.lineTo(250,95)
ctx.moveTo(243,115)
ctx.lineTo(250,120)
ctx.quadraticCurveTo(250,120,250,95)
ctx.strokeRect(250,113,4,4)
ctx.strokeRect(253,113,4,4)
ctx.strokeRect(256,113,4,4)

ctx.strokeRect(250,105,4,4)
ctx.strokeRect(253,105,4,4)
ctx.strokeRect(256,105,4,4)

ctx.strokeRect(250,97,4,4)
ctx.strokeRect(253,97,4,4)
ctx.strokeRect(256,97,4,4)


//left arm
ctx.strokeRect(137,100,18,15)
ctx.strokeRect(142,100,18,15)
ctx.strokeRect(147,100,18,15)

//left hand
ctx.moveTo(136,100)
ctx.lineTo(129,95)
ctx.moveTo(136,115)
ctx.lineTo(129,120)
ctx.quadraticCurveTo(129,120,129,95)
ctx.strokeRect(124,113,4,4)
ctx.strokeRect(121,113,4,4)
ctx.strokeRect(119,113,4,4)

ctx.strokeRect(124,105,4,4)
ctx.strokeRect(121,105,4,4)
ctx.strokeRect(119,105,4,4)

ctx.strokeRect(124,97,4,4)
ctx.strokeRect(121,97,4,4)
ctx.strokeRect(119,97,4,4)

//head
ctx.moveTo(176,95);
ctx.lineTo(176,70);
ctx.moveTo(202,95);
ctx.lineTo(202,70);
ctx.bezierCurveTo(202,70,189,50,176,70)

//eyes
ctx.moveTo(184,74);
ctx.arc(184,74,3,0,Math.PI*2,true)
ctx.moveTo(194,74);
ctx.arc(194,74,3,0,Math.PI*2,true)
ctx.stroke();

//mouth
ctx.moveTo(180,82)
ctx.lineTo(198,82)
ctx.lineTo(198,90)
ctx.lineTo(180,90)
ctx.lineTo(180,82)
ctx.moveTo(180,86)
ctx.lineTo(198,86)
ctx.moveTo(194,82)
ctx.lineTo(194,90)
ctx.moveTo(190,82)
ctx.lineTo(190,90)
ctx.moveTo(186,82)
ctx.lineTo(186,90)
ctx.moveTo(182,82)
ctx.lineTo(182,90)
ctx.stroke()


//antenna
ctx.moveTo(186,61)
ctx.lineTo(188,50)
ctx.moveTo(190,61)
ctx.lineTo(188,50)
ctx.arc(188,50,2,0,Math.PI*2,true)
ctx.stroke()
