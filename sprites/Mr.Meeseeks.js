var canvas = document.getElementById('Meeseeks');
var ctx = canvas.getContext('2d');
console.log(ctx)




var body=function(){
    //left side
    ctx.fillStyle="rgb(0,191,255)";
    ctx.moveTo(0,0);
    ctx.lineTo(0,80);
    ctx.lineTo(-25,80);
    ctx.lineTo(-10,65);
    ctx.lineTo(-10,0);
    ctx.quadraticCurveTo(-20,-20,-15,-60);
    ctx.moveTo(-15,-58);
    ctx.lineTo(-45,-35);
    ctx.lineTo(-25,-20);
    ctx.quadraticCurveTo(-15,-20,-15,-10);
    ctx.quadraticCurveTo(-20,-2,-25,-5);
    ctx.lineTo(-55,-35);
    ctx.lineTo(-15,-70);
    ctx.quadraticCurveTo(-50,-100,-5,-119);
    ctx.quadraticCurveTo(40,-100,5,-70);
    //right side
    ctx.moveTo(0,0);
    ctx.lineTo(8,0);
    ctx.lineTo(8,80);
    ctx.lineTo(33,80);
    ctx.lineTo(18,65);
    ctx.lineTo(18,0);
    ctx.quadraticCurveTo(28,-20,13,-60);
    ctx.lineTo(53,-50);
    ctx.lineTo(57,-80);
    ctx.quadraticCurveTo(65,-110,45,-85);
    ctx.quadraticCurveTo(35,-95,45,-75);
    ctx.lineTo(45,-60);
    ctx.lineTo(6,-70);
    ctx.fill();
    ctx.stroke();
    },
    face=function(){
    //face
    ctx.moveTo(-10,-95);
    ctx.arc(-10,-95,2,0,Math.PI*2,true);
    ctx.moveTo(0,-95);
    ctx.arc(0,-95,2,0,Math.PI*2,true);
    ctx.moveTo(-17,-100);
    ctx.quadraticCurveTo(-16,-102,-10,-105);
    ctx.moveTo(5,-100);
    ctx.quadraticCurveTo(3,-102,0,-105);
    ctx.moveTo(-13,-85);
    ctx.quadraticCurveTo(-3,-80,0,-85);
    ctx.moveTo(-15,-80);
    ctx.quadraticCurveTo(-19,-88,-15,-88);
    ctx.moveTo(2,-80);
    ctx.quadraticCurveTo(6,-88,2,-88);
    ctx.stroke();
    };
ctx.translate(200,200);
body();
face();





