/*
 * For maximum modularity, we place everything within a single function that
 * takes the canvas that it will need.
 */ (function (canvas) {

    // Because many of these variables are best initialized then immediately
    // used in context, we merely name them here.  Read on to see how they
    // are used.
    var gl, // The WebGL context.

    // This variable stores 3D model information.
    objectsToDraw,

    // The shader program to use.
    shaderProgram,

    // Utility variable indicating whether some fatal has occurred.
    abort = false,

        // Important state variables.
        animationActive = false,
        currentRotation = 0.0,
        vertexPosition,
        vertexDiffuseColor,
        vertexSpecularColor,
        shininess,
        normalVector,
        lightPosition,
        lightDiffuse,
        lightSpecular,
        // The should-now-be-familiar matrices.
        projectionMatrix,
        translationMatrix,
        scaleMatrix,
        rotationMatrix,
        cameraMatrix,

        // An individual "draw object" function.
        drawObject,

        // The big "draw scene" function.
        drawScene,

        // Reusable loop variables.
        i,
        maxi,
        j,
        maxj,

        // Grab the WebGL rendering context.
        gl = GLSLUtilities.getGL(canvas);
    if (!gl) {


        // No WebGL, no use going on...
        return;
    }

    // Set up settings that will not change.  This is not "canned" into a
    // utility function because these settings really can vary from program
    // to program.
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.viewport(0, 0, canvas.width, canvas.height);

    // Build the objects to display.
    // JD: 3(a)
    objectsToDraw = [
    new Shapes({
        color: {
            r: 0.0,
            g: 0.0,
            b: 1.0
        },
        specularColor: {
            r: 1.0,
            g: 0.0,
            b: 1.0
        },
        shininess: 5,
        transforms: {
            scale: [0.5, 0.5, 0.5],
            translate: [0, 0, 0],
            rotate: [90, 1, 2, 3]
        },
        normals: Shapes.toNormalArray(Shapes.cylinder()),
        vertices: Shapes.toRawTriangleArray(Shapes.cylinder()),
        mode: gl.TRIANGLES
    }),

    new Shapes({
        color: {
            r: 0.0,
            g: 1.0,
            b: 0.0
        },
        specularColor: {
            r: 1.0,
            g: 1.0,
            b: 1.0
        },
        shininess: 10,
        normals: Shapes.toNormalArray(Shapes.doublePyramid()),
        vertices: Shapes.toRawTriangleArray(Shapes.doublePyramid()),
        transforms: {
            scale: [1, 1, 1],
            translate: [0, 0, 0],
            rotate: [90, 1, 2, 3]
        },
        mode: gl.TRIANGLES,
        children: [
        new Shapes({
            color: {
                r: 1.0,
                g: 0.0,
                b: 0.0
            },
            specularColor: {
                r: 1.0,
                g: 0.0,
                b: 1.0
            },
            shininess: 10,
            transforms: {
                scale: [1, 1, 1],
                translate: [0, 0, 0],
                rotate: [90, 1, 2, 3]
            },
            normals: Shapes.toVertexNormalArray(Shapes.sphere()),
            vertices: Shapes.toRawTriangleArray(Shapes.sphere()),
            mode: gl.LINES
        })

        ]
    })];


    // Pass the vertices to WebGL.
    var passVertices = function (objectsToDraw) {
        for (i = 0, maxi = objectsToDraw.length; i < maxi; i += 1) {
            objectsToDraw[i].buffer = GLSLUtilities.initVertexBuffer(gl,
            objectsToDraw[i].vertices);

            if (!objectsToDraw[i].colors) {
                // If we have a single color, we expand that into an array
                // of the same color over and over.
                objectsToDraw[i].colors = [];
                for (j = 0, maxj = objectsToDraw[i].vertices.length / 3;
                j < maxj; j += 1) {
                    objectsToDraw[i].colors = objectsToDraw[i].colors.concat(
                    objectsToDraw[i].color.r,
                    objectsToDraw[i].color.g,
                    objectsToDraw[i].color.b);
                }
            }
            objectsToDraw[i].colorBuffer = GLSLUtilities.initVertexBuffer(gl,
            objectsToDraw[i].colors);

            // Same trick with specular colors.
            if (!objectsToDraw[i].specularColors) {
                // Future refactor: helper function to convert a single value or
                // array into an array of copies of itself.
                objectsToDraw[i].specularColors = [];
                for (j = 0, maxj = objectsToDraw[i].vertices.length / 3;
                j < maxj; j += 1) {
                    objectsToDraw[i].specularColors = objectsToDraw[i].specularColors.concat(
                    objectsToDraw[i].specularColor.r,
                    objectsToDraw[i].specularColor.g,
                    objectsToDraw[i].specularColor.b);
                }
            }
            objectsToDraw[i].specularBuffer = GLSLUtilities.initVertexBuffer(gl,
            objectsToDraw[i].specularColors);

            // One more buffer: normals.
            objectsToDraw[i].normalBuffer = GLSLUtilities.initVertexBuffer(gl,
            objectsToDraw[i].normals);

            if (objectsToDraw[i].children && (objectsToDraw[i].children.length !== 0)) {

                passVertices(objectsToDraw[i].children);
            }
        }
    };

    // Initialize the shaders.
    shaderProgram = GLSLUtilities.initSimpleShaderProgram(
    gl,
    $("#vertex-shader").text(),
    $("#fragment-shader").text(),

    // Very cursory error-checking here...
    function (shader) {
        abort = true;

    },

    // Another simplistic error check: we don't even access the faulty
    // shader program.
    function (shaderProgram) {
        abort = true;

    });

    // If the abort variable is true here, we can't continue.
    if (abort) {

        return;
    }

    // All done --- tell WebGL to use the shader program from now on.
    gl.useProgram(shaderProgram);

    // Hold on to the important variables within the shaders.
    vertexPosition = gl.getAttribLocation(shaderProgram, "vertexPosition");
    gl.enableVertexAttribArray(vertexPosition);
    vertexDiffuseColor = gl.getAttribLocation(shaderProgram, "vertexDiffuseColor");
    gl.enableVertexAttribArray(vertexDiffuseColor);
    vertexSpecularColor = gl.getAttribLocation(shaderProgram, "vertexSpecularColor");
    gl.enableVertexAttribArray(vertexSpecularColor);
    normalVector = gl.getAttribLocation(shaderProgram, "normalVector");
    gl.enableVertexAttribArray(normalVector);

    // Finally, we come to the typical setup for transformation matrices:
    // model-view and projection, managed separately.
    translationMatrix = gl.getUniformLocation(shaderProgram, "translationMatrix");
    scaleMatrix = gl.getUniformLocation(shaderProgram, "scaleMatrix");
    rotationMatrix = gl.getUniformLocation(shaderProgram, "rotationMatrix");
    projectionMatrix = gl.getUniformLocation(shaderProgram, "projectionMatrix");
    instanceMatrix = gl.getUniformLocation(shaderProgram, "instanceMatrix");
    cameraMatrix = gl.getUniformLocation(shaderProgram, "cameraMatrix");


    // Note the additional variables.
    lightPosition = gl.getUniformLocation(shaderProgram, "lightPosition");
    lightDiffuse = gl.getUniformLocation(shaderProgram, "lightDiffuse");
    lightSpecular = gl.getUniformLocation(shaderProgram, "lightSpecular");
    shininess = gl.getUniformLocation(shaderProgram, "shininess");

    //matrix setup
    gl.uniformMatrix4fv(translationMatrix, gl.FALSE, new Float32Array(matrix.translation([0, 0, 0]).toWebGL()));

    gl.uniformMatrix4fv(scaleMatrix, gl.FALSE, new Float32Array(matrix.scale([0.5, 0.5, 0.5]).toWebGL()));

    gl.uniformMatrix4fv(cameraMatrix, gl.FALSE, new Float32Array(matrix.cameraMatrix(1, 0, 0, 0, 1, 0, 0, 0, 1).toWebGL()));

    /*
     * Displays an individual object.
     */
    drawObject = function (object, currentTransform) {
        var instanceMat = new matrix(4);
        instanceMat = instanceMat.multiplication(
        matrix.translation(object.transforms.translate)).multiplication(
        matrix.scale(object.transforms.scale)).multiplication(
        matrix.rotation(object.transforms.rotate)).multiplication(currentTransform);


        gl.uniformMatrix4fv(instanceMatrix, gl.FALSE, new Float32Array(instanceMat.toWebGL()));


        // Set the varying colors.
        gl.bindBuffer(gl.ARRAY_BUFFER, object.colorBuffer);
        gl.vertexAttribPointer(vertexDiffuseColor, 3, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, object.specularBuffer);
        gl.vertexAttribPointer(vertexSpecularColor, 3, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, object.normalBuffer);
        gl.vertexAttribPointer(normalVector, 3, gl.FLOAT, false, 0, 0);

        // Set the shininess.
        gl.uniform1f(shininess, object.shininess);

        // Set the varying vertex coordinates.
        gl.bindBuffer(gl.ARRAY_BUFFER, object.buffer);
        gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 0, 0);
        gl.drawArrays(object.mode, 0, object.vertices.length / 3);
        // JD: 8(a)
        if (object.children.length >= 1) {
            for (i = 0; i < object.children.length; i++) {

                drawObject(object.children[i], instanceMat);
            }
        }
    };

    /*
     * Displays the scene.
     */
    drawScene = function () {
        // Clear the display.
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // Set up the rotation matrix.
        gl.uniformMatrix4fv(rotationMatrix, gl.FALSE, new Float32Array(matrix.rotation([currentRotation, 0.5, 1, 1]).toWebGL()));

        // Display the objects.
        for (i = 0, maxi = objectsToDraw.length; i < maxi; i += 1) {

            drawObject(objectsToDraw[i], new matrix());
        }

        // All done.
        gl.flush();
    },

    /*
     * Animates the scene.
     */
    previousTimestamp = null,
    advanceScene = function (timestamp) {

        // Check if the user has turned things off.
        if (!animationActive) {
            return;
        }

        // Initialize the timestamp.
        if (!previousTimestamp) {
            previousTimestamp = timestamp;
            window.requestAnimationFrame(advanceScene);
            return;
        }

        // Check if it's time to advance.
        var progress = timestamp - previousTimestamp;
        if (progress < 30) {
            // Do nothing if it's too soon.
            window.requestAnimationFrame(advanceScene);
            return;
        }

        // All clear.
        currentRotation += 0.033 * progress;
        drawScene();
        if (currentRotation >= 360.0) {
            currentRotation -= 360.0;
        }

        // Request the next frame.
        previousTimestamp = timestamp;
        window.requestAnimationFrame(advanceScene);
    };

    gl.uniformMatrix4fv(projectionMatrix, gl.FALSE, new Float32Array(matrix.orthographic(-2 * (canvas.width / canvas.height),
    2 * (canvas.width / canvas.height), -2,
    2, -10,
    10).toWebGL()));

    gl.uniform4fv(lightPosition, [500.0, 1000.0, 100.0, 1.0]);
    gl.uniform3fv(lightDiffuse, [1.0, 1.0, 1.0]);
    gl.uniform3fv(lightSpecular, [1.0, 1.0, 1.0]);



    // Set up the rotation toggle: clicking on the canvas does it.
    $(canvas).click(function () {
        animationActive = !animationActive;
        if (animationActive) {
            previousTimestamp = null;
            window.requestAnimationFrame(advanceScene);
        }
    });


    passVertices(objectsToDraw);

    // Draw the initial scene.
    drawScene();

}(document.getElementById("hello-webgl")));