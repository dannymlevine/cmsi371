/*
 * This file demonstrates how our homebrew keyframe-tweening
 * engine is used.
 */
(function () {
    var canvas = document.getElementById("canvas"),

        // First, a selection of "drawing functions" from which we
        // can choose.  Their common trait: they all accept a single
        // renderingContext argument.
        square = function (renderingContext) {
            renderingContext.fillStyle = "blue";
            renderingContext.fillRect(-20, -20, 40, 40);
        },

        circle = function (renderingContext) {
            renderingContext.strokeStyle = "red";
            renderingContext.beginPath();
            renderingContext.arc(0, 0, 50, 0, Math.PI * 2);
            renderingContext.stroke();
        },

        // Then, we have "easing functions" that determine how
        // intermediate frames are computed.

        // Now, to actually define the animated sprites.  Each sprite
        // has a drawing function and an array of keyframes.
        sprites = [
            {
                draw: LevineSprites.drawBender ,
                keyframes: [
                    {
                        frame: 150,
                        tx: 950,
                        ty: 800,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 170,
                        tx: 900,
                        ty: 800,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 190,
                        tx: 850,
                        ty: 800,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 210,
                        tx: 800,
                        ty: 800,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 230,
                        tx: 750,
                        ty: 600,
                        sx: .3,
                        sy: .3,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 235,
                        tx: 730,
                        ty: 600,
                        sx: .3,
                        sy: .3,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    }
                ]

            },

                        {
                draw: LevineSprites.drawBender ,
                keyframes: [
                    {
                        frame: 240,
                        tx: 950,
                        ty: 600,
                        sx: 2,
                        sy: 2,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 260,
                        tx: 850,
                        ty: 600,
                        sx: 2,
                        sy: 2,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 280,
                        tx: 750,
                        ty: 600,
                        sx: 2,
                        sy: 2,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 300,
                        tx: 650,
                        ty: 600,
                        sx: 2,
                        sy: 2,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 320,
                        tx: 550,
                        ty: 600,
                        sx: 2,
                        sy: 2,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 340,
                        tx: 450,
                        ty: 600,
                        sx: 2,
                        sy: 2,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 350,
                        tx: 300,
                        ty: 600,
                        sx: 2,
                        sy: 2,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    }

                ]
                
            },

            {
                draw: LevineSprites.drawBender ,
                keyframes: [
                    {
                        frame: 360,
                        tx: 800,
                        ty: 690,
                        sx:.4,
                        sy:.4,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 380,
                        tx: 700,
                        ty: 690,
                        sx:.4,
                        sy:.4,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 400,
                        tx: 650,
                        ty: 630,
                        sx:.4,
                        sy:.4,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 410,
                        tx: 630,
                        ty: 620,
                        sx:.4,
                        sy:.4,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    }

                ]
                
            },

            {
                draw: LevineSprites.drawSpaceship,
                keyframes:[
                    {
                        frame: 360,
                        tx: 500,
                        ty: 550,
                        sx: 3,
                        sy: 3,
                        landing: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 415,
                        tx: 500,
                        ty: 550,
                        sx: 3,
                        sy: 3,
                        landing: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 430,
                        tx: 500,
                        ty: 550,
                        sx: 3,
                        sy: 3,
                        landing: 0,
                        rotate:-40,
                        ease: KeyframeTweener.elasticEaseIn
                    },

                    {
                        frame: 450,
                        tx: 600,
                        ty: -200,
                        sx: 3,
                        sy: 3,
                        landing: 0,
                        rotate:-40,
                        ease: KeyframeTweener.quadEaseInAndOut
                    },

               ]

            },

            {
                draw: LevineSprites.drawSpaceship,
                keyframes:[
                    {
                        frame: 475,
                        tx: 0,
                        ty: 300,
                        landing: 0,
                        ease: KeyframeTweener.elasticOut
                    },

                    {
                        frame: 500,
                        tx: 600,
                        ty: 150,
                        landing: 0,
                        ease: KeyframeTweener.elasticOut
                    },

                    {
                        frame: 530,
                        tx: 1200,
                        ty: 400,
                        landing: 0,
                        ease: KeyframeTweener.elasticEaseIn
                    },


                   
               ]

            },

            {
                draw: LevineSprites.drawSpaceship,
                keyframes:[
                    {
                        frame: 600,
                        tx: 0,
                        ty: 600,
                        landing: 0,
                    },

                    {
                        frame: 630,
                        tx: 200,
                        ty: 400,
                        sx: .5,
                        sy: .5,
                        landing: 0,

                    },

                    {
                        frame: 650,
                        tx: 480,
                        ty: 240,
                        sx: .2,
                        sy: .2,
                        landing: 0,

                    },

                    {
                        frame: 670,
                        tx: 480,
                        ty: 240,
                        sx: .1,
                        sy: .1,
                        landing: 0,

                    },
                   
               ]

            },

            {
                draw: LevineSprites.drawBender ,
                keyframes: [
                    {
                        frame: 730,
                        tx: 150,
                        ty: 550,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 780,
                        tx: 200,
                        ty: 600,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 810,
                        tx: 300,
                        ty: 650,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 830,
                        tx: 400,
                        ty: 720,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 860,
                        tx: 500,
                        ty: 740,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 890,
                        tx: 600,
                        ty: 740,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 910,
                        tx: 700,
                        ty: 740,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 930,
                        tx: 800,
                        ty: 740,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 940,
                        tx: 800,
                        ty: 740,
                        leftLegPosition: 1,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 970,
                        tx: 800,
                        ty: 740,
                        leftLegPosition: 1,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 980,
                        tx: 600,
                        ty: 740,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 990,
                        tx: 600,
                        ty: 740,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 1000,
                        tx: 300,
                        ty: 650,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 1010,
                        tx: 200,
                        ty: 600,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },



                ]

            },

            {
                draw: LevineSprites.drawSpaceship,
                keyframes:[
                    {
                        frame: 715,
                        tx: 0,
                        ty: 500,
                        sx: 5,
                        sy: 5,
                        landing: 1,
                    },

                    {
                        frame: 1020,
                        tx: 0,
                        ty: 500,
                        sx: 5,
                        sy: 5,
                        landing: 1,
                    },

                    {
                        frame: 1030,
                        tx: 0,
                        ty: 500,
                        sx: 5,
                        sy: 5,
                        landing: 0,
                    },

                    {
                        frame: 1040,
                        tx: 0,
                        ty: 500,
                        sx: 5,
                        sy: 5,
                        landing: 0,
                        rotate:-40,
                        ease: KeyframeTweener.elasticEaseIn
                    },

                    {
                        frame: 1050,
                        tx: 600,
                        ty: -600,
                        sx: 5,
                        sy: 5,
                        landing: 0,
                        rotate:-40,
                        ease: KeyframeTweener.quadEaseInAndOut
                    }, 

                    {
                        frame: 1120,
                        tx: 600,
                        ty: -600,
                        sx: 5,
                        sy: 5,
                        landing: 0,
                        rotate:-40,
                        ease: KeyframeTweener.quadEaseInAndOut
                    },                   
                   
               ]

            },

            {
                draw: LevineSprites.drawMeeseeks,
                keyframes:[
                    {
                        frame: 940,
                        tx: 900,
                        ty: 690,
                        handPosition: 0
                    },

                    {
                        frame: 950,
                        tx: 900,
                        ty: 690,
                        handPosition: 1
                    },

                    {
                        frame: 960,
                        tx: 900,
                        ty: 690,
                        handPosition: 0
                    },

                    {
                        frame: 970,
                        tx: 900,
                        ty: 690,
                        handPosition: 1
                    },

                    {
                        frame: 980,
                        tx: 900,
                        ty: 690,
                        handPosition: 0
                    },

                    {
                        frame: 990,
                        tx: 900,
                        ty: 690,
                        handPosition: 1
                    },

                    {
                        frame: 1000,
                        tx: 900,
                        ty: 690,
                        handPosition: 0
                    },

                    {
                        frame: 1010,
                        tx: 900,
                        ty: 690,
                        handPosition: 1
                    },

                    {
                        frame: 1020,
                        tx: 900,
                        ty: 690,
                        handPosition: 0
                    },

                    {
                        frame: 1030,
                        tx: 900,
                        ty: 690,
                        handPosition: 1
                    }

                ]

            },

            {
            draw: LevineSprites.drawMeeseeks,
                keyframes:[
                    {
                        frame: 940,
                        tx: 930,
                        ty: 700,
                        handPosition: 0
                    },

                    {
                        frame: 950,
                        tx: 930,
                        ty: 700,
                        handPosition: 1
                    },

                    {
                        frame: 960,
                        tx: 930,
                        ty: 700,
                        handPosition: 0
                    },

                    {
                        frame: 970,
                        tx: 930,
                        ty: 700,
                        handPosition: 1
                    },

                    {
                        frame: 980,
                        tx: 930,
                        ty: 700,
                        handPosition: 0
                    },

                    {
                        frame: 990,
                        tx: 930,
                        ty: 700,
                        handPosition: 1
                    },

                    {
                        frame: 1000,
                        tx: 930,
                        ty: 700,
                        handPosition: 0
                    },

                    {
                        frame: 1010,
                        tx: 930,
                        ty: 700,
                        handPosition: 1
                    },

                    {
                        frame: 1020,
                        tx: 930,
                        ty: 700,
                        handPosition: 0
                    },

                    {
                        frame: 1030,
                        tx: 930,
                        ty: 700,
                        handPosition: 1
                    }

                ]
            },

            {
            draw: LevineSprites.drawMeeseeks,
                keyframes:[
                    {
                        frame: 940,
                        tx: 910,
                        ty: 700,
                        handPosition: 0
                    },

                    {
                        frame: 950,
                        tx: 910,
                        ty: 700,
                        handPosition: 1
                    },

                    {
                        frame: 960,
                        tx: 910,
                        ty: 700,
                        handPosition: 0
                    },

                    {
                        frame: 970,
                        tx: 910,
                        ty: 700,
                        handPosition: 1
                    },

                    {
                        frame: 980,
                        tx: 910,
                        ty: 700,
                        handPosition: 0
                    },

                    {
                        frame: 990,
                        tx: 910,
                        ty: 700,
                        handPosition: 1
                    },

                    {
                        frame: 1000,
                        tx: 910,
                        ty: 700,
                        handPosition: 0
                    },

                    {
                        frame: 1010,
                        tx: 910,
                        ty: 700,
                        handPosition: 1
                    },

                    {
                        frame: 1020,
                        tx: 910,
                        ty: 700,
                        handPosition: 0
                    },

                    {
                        frame: 1030,
                        tx: 910,
                        ty: 700,
                        handPosition: 1
                    }
                ]
            },
        ];

    // Finally, we initialize the engine.  Mainly, it needs
    // to know the rendering context to use.  And the animations
    // to display, of course.
    KeyframeTweener.initialize({
        renderingContext: canvas.getContext("2d"),
        width: canvas.width,
        height: canvas.height,
        sprites: sprites
    });
}());