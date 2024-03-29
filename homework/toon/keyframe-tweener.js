/*
 * A simple keyframe-tweening animation module for 2D
 * canvas elements.
 */ (function () { // JD: 4
    // The big one: animation initialization.  The settings parameter
    // is expected to be a JavaScript object with the following
    // properties:
    //
    // - renderingContext: the 2D canvas rendering context to use
    // - width: the width of the canvas element
    // - height: the height of the canvas element
    // - sprites: the array of sprites to animate
    // - frameRate: number of frames per second (default 24)
    //
    // In turn, each sprite is a JavaScript object with the following
    // properties:
    //
    // - draw: the function that draws the sprite
    // - keyframes: the array of keyframes that the sprite should follow
    //
    // Finally, each keyframe is a JavaScript object with the following
    // properties.  Unlike the other objects, defaults are provided in
    // case a property is not present:
    //
    // - frame: the global animation frame number in which this keyframe
    //          it to appear
    // - ease: the easing function to use (default is KeyframeTweener.linear)
    // - tx, ty: the location of the sprite (default is 0, 0)
    // - sx, sy: the scale factor of the sprite (default is 1, 1)
    // - rotate: the rotation angle of the sprite (default is 0)
    var initializeAnimation = function (settings) {
        // We need to keep track of the current frame.
        var currentFrame = 0,

            // Avoid having to go through settings to get to the
            // rendering context and sprites.
            renderingContext = settings.renderingContext,
            width = settings.width,
            height = settings.height,
            sprites = settings.sprites,
            //options = settings.options,
            //options2 = settings.options2

            previousTimestamp = null,
            nextFrame = function (timestamp) {
                // Bail-out #1: We just started.
                if (!previousTimestamp) {
                    previousTimestamp = timestamp;
                    window.requestAnimationFrame(nextFrame);
                    return;
                }

                // Bail-out #2: Too soon.
                if (timestamp - previousTimestamp < (1000 / (settings.frameRate || 24))) {
                    window.requestAnimationFrame(nextFrame);
                    return;
                }

                // Clear the canvas.
                renderingContext.clearRect(0, 0, width, height);

                // For every sprite, go to the current pair of keyframes.
                // Then, draw the sprite based on the current frame.
                for (var i = 0, maxI = sprites.length; i < maxI; i += 1) {
                    for (var j = 0, maxJ = sprites[i].keyframes.length - 1; j < maxJ; j += 1) {
                        // We look for keyframe pairs such that the current
                        // frame is between their frame numbers.
                        if ((sprites[i].keyframes[j].frame <= currentFrame) && (currentFrame <= sprites[i].keyframes[j + 1].frame)) {
                            // Point to the start and end keyframes.
                            var startKeyframe = sprites[i].keyframes[j],
                                endKeyframe = sprites[i].keyframes[j + 1];

                            // Save the rendering context state.
                            renderingContext.save();

                            // Set up our start and distance values, using defaults
                            // if necessary.
                            var ease = startKeyframe.ease || KeyframeTweener.linear,

                                txStart = startKeyframe.tx || 0,
                                txDistance = (endKeyframe.tx || 0) - txStart,

                                tyStart = startKeyframe.ty || 0,
                                tyDistance = (endKeyframe.ty || 0) - tyStart,

                                sxStart = startKeyframe.sx || 1,
                                sxDistance = (endKeyframe.sx || 1) - sxStart,

                                syStart = startKeyframe.sy || 1,
                                syDistance = (endKeyframe.sy || 1) - syStart,

                                // JD: 10
                                leftLeg = startKeyframe.leftLegPosition || 0,
                                leftLegDistance = (endKeyframe.leftLegPosition || 0) - leftLeg,

                                rightLeg = startKeyframe.rightLegPosition || 0,
                                rightLegDistance = (endKeyframe.rightLegPosition || 0) - rightLeg,

                                hand = startKeyframe.handPosition || 0,
                                handDistance = (endKeyframe.handPosition || 0) - hand,

                                land = startKeyframe.landing || 0,
                                landDistance = (endKeyframe.landing || 0) - land,


                                rotateStart = (startKeyframe.rotate || 0) * Math.PI / 180,
                                rotateDistance = (endKeyframe.rotate || 0) * Math.PI / 180 - rotateStart;


                            var currentTweenFrame = currentFrame - startKeyframe.frame,
                                duration = endKeyframe.frame - startKeyframe.frame + 1;

                            //console.log("Ease: " + ease(currentTweenFrame, land, landDistance, duration));
     
                            // JD: 10
                            var leftLegEase = ease(currentTweenFrame, leftLeg, leftLegDistance, duration);
                            var rightLegEase = ease(currentTweenFrame, rightLeg, rightLegDistance, duration);
                            var handEase = ease(currentTweenFrame, hand, handDistance, duration);
                            var landEase = ease(currentTweenFrame, land, landDistance, duration);

                            // Build our transform according to where we should be.
                            renderingContext.translate(
                                // JD: 11
                            ease(currentTweenFrame, txStart, txDistance, duration),
                            ease(currentTweenFrame, tyStart, tyDistance, duration));
                            renderingContext.scale(
                            ease(currentTweenFrame, sxStart, sxDistance, duration),
                            ease(currentTweenFrame, syStart, syDistance, duration));
                            renderingContext.rotate(
                            ease(currentTweenFrame, rotateStart, rotateDistance, duration));

                            // Draw the sprite.
                            // JD: 12
                            sprites[i].draw(renderingContext, (leftLegEase || landEase || handEase), rightLegEase);
                            // Clean up.
                            renderingContext.restore();
                        }
                    }
                }

                // Move to the next frame.
                currentFrame += 1;
                previousTimestamp = timestamp;
                window.requestAnimationFrame(nextFrame);
            };

        window.requestAnimationFrame(nextFrame);
    };

    window.KeyframeTweener = {
        // The module comes with a library of common easing functions.
        linear: function (currentTime, start, distance, duration) {
            var percentComplete = currentTime / duration;
            return distance * percentComplete + start;
        },

        quadEaseIn: function (currentTime, start, distance, duration) {
            var percentComplete = currentTime / duration;
            return distance * percentComplete * percentComplete + start;
        },

        quadEaseOut: function (currentTime, start, distance, duration) {
            var percentComplete = currentTime / duration;
            return -distance * percentComplete * (percentComplete - 2) + start;
        },

        quadEaseInAndOut: function (currentTime, start, distance, duration) {
            var percentComplete = currentTime / (duration / 2);
            return (percentComplete < 1) ? (distance / 2) * percentComplete * percentComplete + start : (-distance / 2) * ((percentComplete - 1) * (percentComplete - 3) - 1) + start;
        },

        // JD: Nicely chosen easing functions :)
        elasticEaseIn: function (t, b, c, d) {
            var ts = (t /= d) * t;
            var tc = ts * t;
            return b + c * (54.595 * tc * ts + -116.29 * ts * ts + 84.295 * tc + -24.1 * ts + 2.5 * t);
        },

        inOutQuartic: function (t, b, c, d) {
            var ts = (t /= d) * t;
            var tc = ts * t;
            return b + c * (6.1975 * tc * ts + -15.04 * ts * ts + 23.685 * tc + -20.79 * ts + 6.9475 * t);
        },

        elasticOut: function (t, b, c, d) {
            var ts = (t /= d) * t;
            var tc = ts * t;
            return b + c * (47.3925 * tc * ts + -149.18 * ts * ts + 169.88 * tc + -82.79 * ts + 15.6975 * t);
        },

        initialize: initializeAnimation
    };
}());