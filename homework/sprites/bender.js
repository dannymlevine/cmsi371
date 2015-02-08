(function () {
    legs = function (ctx) {
        ctx.fillStyle = "#BCC6CC";
        //left leg
        ctx.fillRect(-33, -30, 15, 5);
        ctx.fillRect(-33, -45, 15, 20);
        ctx.fillRect(-33, -55, 15, 20);
        ctx.strokeRect(-33, -30, 15, 5);
        ctx.strokeRect(-33, -45, 15, 20);
        ctx.strokeRect(-33, -55, 15, 20);


        //left foot
        ctx.beginPath();
        ctx.moveTo(-33, -25);
        ctx.lineTo(-36, -20);
        ctx.lineTo(-14, -20);
        ctx.lineTo(-17, -25);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //right Leg
        ctx.fillRect(-2, -30, 15, 5);
        ctx.fillRect(-2, -45, 15, 20);
        ctx.fillRect(-2, -55, 15, 20);
        ctx.strokeRect(-2, -30, 15, 5);
        ctx.strokeRect(-2, -45, 15, 20);
        ctx.strokeRect(-2, -55, 15, 20);


        //right foot
        ctx.beginPath();
        ctx.moveTo(-2, -25);
        ctx.lineTo(-5, -20);
        ctx.lineTo(17, -20);
        ctx.lineTo(14, -25);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    },

    body = function (ctx) {
        //body
        ctx.fillRect(-35, -105, 50, 50);
        ctx.strokeRect(-35, -105, 50, 50);
        ctx.strokeRect(-25, -100, 35, 35);

        //door
        ctx.beginPath();
        ctx.arc(5, -85, 3, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.stroke();
    },


    arms = function (ctx) {
        //right arm
        ctx.fillRect(15, -100, 18, 15);
        ctx.fillRect(20, -100, 18, 15);
        ctx.fillRect(25, -100, 18, 15);
        ctx.strokeRect(15, -100, 18, 15);
        ctx.strokeRect(20, -100, 18, 15);
        ctx.strokeRect(25, -100, 18, 15);

        //right hand
        ctx.beginPath();
        ctx.moveTo(43, -100);
        ctx.lineTo(50, -105);
        ctx.lineTo(50, -80);
        ctx.lineTo(43, -85);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //fingers
        ctx.fillRect(50, -87, 4, 4);
        ctx.fillRect(53, -87, 4, 4);
        ctx.fillRect(56, -87, 4, 4);
        ctx.strokeRect(50, -87, 4, 4);
        ctx.strokeRect(53, -87, 4, 4);
        ctx.strokeRect(56, -87, 4, 4);

        ctx.fillRect(50, -95, 4, 4);
        ctx.fillRect(53, -95, 4, 4);
        ctx.fillRect(56, -95, 4, 4);
        ctx.strokeRect(50, -95, 4, 4);
        ctx.strokeRect(53, -95, 4, 4);
        ctx.strokeRect(56, -95, 4, 4);

        ctx.fillRect(50, -103, 4, 4);
        ctx.fillRect(53, -103, 4, 4);
        ctx.fillRect(56, -103, 4, 4);
        ctx.strokeRect(50, -103, 4, 4);
        ctx.strokeRect(53, -103, 4, 4);
        ctx.strokeRect(56, -103, 4, 4);


        //left arm
        ctx.fillRect(-63, -100, 18, 15);
        ctx.fillRect(-58, -100, 18, 15);
        ctx.fillRect(-53, -100, 18, 15);
        ctx.strokeRect(-63, -100, 18, 15);
        ctx.strokeRect(-58, -100, 18, 15);
        ctx.strokeRect(-53, -100, 18, 15);

        //left hand
        ctx.beginPath();
        ctx.moveTo(-64, -100);
        ctx.lineTo(-71, -105);
        ctx.lineTo(-71, -105);
        ctx.lineTo(-71, -80);
        ctx.lineTo(-64, -85);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();


        //fingers
        ctx.fillRect(-76, -87, 4, 4);
        ctx.fillRect(-79, -87, 4, 4);
        ctx.fillRect(-81, -87, 4, 4);
        ctx.strokeRect(-76, -87, 4, 4);
        ctx.strokeRect(-79, -87, 4, 4);
        ctx.strokeRect(-81, -87, 4, 4);

        ctx.fillRect(-76, -95, 4, 4);
        ctx.fillRect(-79, -95, 4, 4);
        ctx.fillRect(-81, -95, 4, 4);
        ctx.strokeRect(-76, -95, 4, 4);
        ctx.strokeRect(-79, -95, 4, 4);
        ctx.strokeRect(-81, -95, 4, 4);

        ctx.fillRect(-76, -103, 4, 4);
        ctx.fillRect(-79, -103, 4, 4);
        ctx.fillRect(-81, -103, 4, 4);
        ctx.strokeRect(-76, -103, 4, 4);
        ctx.strokeRect(-79, -103, 4, 4);
        ctx.strokeRect(-81, -103, 4, 4);
    },

    head = function (ctx) {
        //head
        ctx.beginPath();
        ctx.moveTo(-24, -105);
        ctx.lineTo(-24, -130);
        ctx.bezierCurveTo(-24, -130, -11, -150, 2, -130);
        ctx.lineTo(2, -105);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    },

    antennaUp = function (ctx) {
        //antenna
        ctx.moveTo(-14, -139);
        ctx.lineTo(-12, -150);
        ctx.lineTo(-9, -139);
        ctx.moveTo(-12, -150);
        ctx.arc(-12, -150, 2, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();
    },

    antennaDown = function (ctx) {
        ctx.moveTo(-12, -140);
        ctx.arc(-12, -140, 2, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.stroke();
    },

    face = function (ctx) {
        //eyes
        ctx.fillStyle = "#FEF1B5";
        ctx.beginPath();
        ctx.moveTo(-16, -126);
        ctx.arc(-16, -126, 3, 0, Math.PI * 2, true);
        ctx.moveTo(-6, -126);
        ctx.arc(-6, -126, 3, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //mouth
        ctx.moveTo(-20, -118);
        ctx.lineTo(-2, -118);
        ctx.lineTo(-2, -110);
        ctx.lineTo(-20, -110);
        ctx.lineTo(-20, -118);
        ctx.moveTo(-20, -114);
        ctx.lineTo(-2, -114);
        ctx.moveTo(-6, -118);
        ctx.lineTo(-6, -110);
        ctx.moveTo(-10, -118);
        ctx.lineTo(-10, -110);
        ctx.moveTo(-14, -118);
        ctx.lineTo(-14, -110);
        ctx.moveTo(-18, -118);
        ctx.lineTo(-18, -110);
        ctx.fill();
        ctx.stroke();
    };
    if (!window.LevineSprites) {
        window.LevineSprites = {};
    }
    window.LevineSprites.drawBender = function (ctx, antennaPos) { // JD: 3
        if (antennaPos === 0) { // JD: 4
            legs(ctx);
            body(ctx);
            arms(ctx);
            head(ctx);
            antennaDown(ctx); // JD: 5, 6
            face(ctx);
        } else if (antennaPos === 1) {
            legs(ctx);
            body(ctx);
            arms(ctx);
            head(ctx);
            antennaUp(ctx);
            face(ctx);
        }
    };
})();