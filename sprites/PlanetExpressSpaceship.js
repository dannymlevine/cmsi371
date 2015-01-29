var canvas = document.getElementById('spaceShip');
var ctx = canvas.getContext('2d');
console.log(ctx)



window.LevineSprites = window.LevineSprites || {};
topHull = function () {
    ctx.fillStyle = "#00FA9A"
    ctx.beginPath();
    ctx.moveTo(70, 0);
    ctx.quadraticCurveTo(10, -80, -130, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //redline
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.moveTo(70, 0);
    ctx.lineTo(-130, 0);
    ctx.lineTo(-122, -5);
    ctx.lineTo(66, -5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //fin
    ctx.fillStyle = "#4F8E83";
    ctx.beginPath();
    ctx.moveTo(-60, -32);
    ctx.lineTo(-100, -70);
    ctx.lineTo(-170, -70);
    ctx.lineTo(-115, -50);
    ctx.lineTo(-122, -5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //door
    ctx.strokeRect(-50, -20, 6, 10);
}

wing = function () {
    ctx.fillStyle = "#4F8E83";
    ctx.beginPath();
    ctx.moveTo(-115, 33);
    ctx.quadraticCurveTo(-70, 20, -50, 33);
    ctx.lineTo(-60, 65);
    ctx.lineTo(-128, 70);
    ctx.lineTo(-98, 50);
    ctx.lineTo(-115, 33);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

}

lowerHull = function () {
    ctx.fillStyle = "#00FA9A"
    ctx.beginPath();
    ctx.moveTo(-130, 0);
    ctx.lineTo(-130, 20);
    ctx.quadraticCurveTo(-125, 25, -118, 33);
    ctx.lineTo(-115, 33);
    ctx.quadraticCurveTo(-70, 20, -50, 33);
    ctx.lineTo(30, 33);
    ctx.quadraticCurveTo(50, 0, 70, 0);
    ctx.fill();
    ctx.stroke();
}

landingGear = function () {
    ctx.fillStyle = "#00FA9A"
    ctx.moveTo(40, 20);
    ctx.lineTo(62, 40);
    ctx.lineTo(70, 40);
    ctx.lineTo(43, 15);
    ctx.fill();
    ctx.stroke();
}

windows = function () {
    ctx.fillStyle = "#BEBEBE";
    ctx.beginPath();
    ctx.moveTo(-20, -20);
    ctx.arc(-20, -20, 4, 0, Math.PI * 2, true);
    ctx.moveTo(0, -20);
    ctx.arc(0, -20, 3, 0, Math.PI * 2, true);
    ctx.moveTo(20, -20);
    ctx.arc(20, -20, 2, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}


windshield = function () {
    ctx.fillStyle = "#BEBEBE";
    ctx.beginPath();
    ctx.moveTo(50, -20);
    ctx.lineTo(40, -20);
    ctx.lineTo(37, -15);
    ctx.lineTo(59, -12);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

engine = function () {
    ctx.fillStyle = "#F5F5DC"
    ctx.beginPath();
    ctx.moveTo(-130, 10)
    ctx.quadraticCurveTo(-135, -10, -160, -5)
    ctx.lineTo(-160, 25)
    ctx.quadraticCurveTo(-135, 40, -130, 20)
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

flames = function () {
    ctx.fillStyle = "blue"
    ctx.beginPath();
    ctx.moveTo(-160, 25);
    ctx.lineTo(-160, -5);
    ctx.lineTo(-165, -5);
    ctx.lineTo(-160, 0);
    ctx.lineTo(-165, 0);
    ctx.lineTo(-160, 5);
    ctx.lineTo(-165, 5);
    ctx.lineTo(-160, 10);
    ctx.lineTo(-165, 10);
    ctx.lineTo(-160, 20);
    ctx.lineTo(-165, 20);
    ctx.lineTo(-160, 25);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

drawSpaceship = function (ctx, flying) {
    if (flying === 0) {
        topHull();
        wing();
        lowerHull();
        landingGear();
        windows();
        windshield();
        engine();
    } else if (flying === 1) {
        topHull();
        wing();
        lowerHull();
        windows();
        windshield();
        engine();
        flames();
    }
}
