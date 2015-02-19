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
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 450,
                        tx: 600,
                        ty: -100,
                        sx: 3,
                        sy: 3,
                        landing: 0,
                        rotate:-40,
                        ease: KeyframeTweener.linear
                    },

                    // {
                    //     frame: 430,
                    //     tx: 500,
                    //     ty: 550,
                    //     sx: 3,
                    //     sy: 3,
                    //     landing: 0,
                    //     rotate:-40,
                    //     ease: KeyframeTweener.linear
                    // },

                   
               ]

            },

            // {
            //     draw: LevineSprites.drawMeeseeks,
            //     keyframes:[
            //         {
            //             frame: 40,
            //             tx: 400,
            //             ty: 200,
            //             handPosition: 0
            //         },

            //         {
            //             frame: 70,
            //             tx: 400,
            //             ty: 200,
            //             handPosition: 2
            //         },

            //         {
            //             frame: 100,
            //             tx: 400,
            //             ty: 200,
            //             handPosition: 0
            //         },

            //         {
            //             frame: 120,
            //             tx: 400,
            //             ty: 200,
            //             handPosition: 1
            //         }
            //     ]

            // },

            {
                draw: circle,
                keyframes: [
                    {
                        frame: 50,
                        tx: 300,
                        ty: 600,
                        sx: 0.5,
                        sy: 0.5,
                        ease: KeyframeTweener.quadEaseOut
                    },

                    {
                        frame: 100,
                        tx: 300,
                        ty: 0,
                        sx: 3,
                        sy: 0.25,
                        ease: KeyframeTweener.quadEaseOut
                    },

                    {
                        frame: 150,
                        tx: 300,
                        ty: 600,
                        sx: 0.5,
                        sy: 0.5
                    }
                ]
            }
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