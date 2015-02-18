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
                        frame: 0,
                        tx: 1000,
                        ty: 300,
                        sx: .5,
                        sy: .5,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 20,
                        tx: 900,
                        ty: 300,
                        sx: .5,
                        sy: .5,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 40,
                        tx: 850,
                        ty: 300,
                        sx: .5,
                        sy: .5,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 60,
                        tx: 800,
                        ty: 300,
                        sx: .5,
                        sy: .5,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 80,
                        tx: 750,
                        ty: 300,
                        sx: .5,
                        sy: .5,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 100,
                        tx: 700,
                        ty: 300,
                        sx: .5,
                        sy: .5,
                        leftLegPosition: 1,
                        rightLegPosition: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 120,
                        tx: 650,
                        ty: 280,
                        sx: .5,
                        sy: .5,
                        leftLegPosition: 0,
                        rightLegPosition: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 140,
                        tx: 600,
                        ty: 200,
                        sx: .5,
                        sy: .5,
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
                        frame: 0,
                        tx: 500,
                        ty: 200,
                        sx: 3,
                        sy: 3,
                        landing: 1,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 50,
                        tx: 500,
                        ty: 200,
                        sx: 3,
                        sy: 3,
                        landing: 0,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 500,
                        tx: 800,
                        ty: -100,
                        sx: 3,
                        sy: 3,
                        landing: 0,
                        ease: KeyframeTweener.linear
                    }

                    // {
                    //     frame: 150,
                    //     tx: 800,
                    //     ty: 600,
                    //     landing: 1,
                    //     ease: KeyframeTweener.linear
                    // }
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