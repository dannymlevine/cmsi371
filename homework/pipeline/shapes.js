/*
 * This module defines/generates vertex arrays for certain predefined shapes.
 * The "shapes" are returned as indexed vertices, with utility functions for
 * converting these into "raw" coordinate arrays.
 */

var Shapes = {
    // JD: 9(a)
    cylinder: function () {
        return {
            vertices: [],

            indices: []

        }
    },

    cone: function () {
        return {
            vertices: [],
            indices: []

        }
    },

    sphere: function () {
        return {
            vertices: [],
            indices: []
        }
    },

    doublePyramid: function () {
        return {
            vertices: [
                [0, 0, 0],
                [0.1, 0.1, 0.1],
                [-0.1, 0.1, -0.1],
                [-0.1, 0.1, 0.1],
                [0.1, 0.1, -0.1],
                [0.1, -0.1, 0.1],
                [-0.1, -0.1, -0.1],
                [-0.1, -0.1, 0.1],
                [0.1, -0.1, -0.1]
            ],
            indices: [
                [0, 1, 2],
                [0, 3, 4],
                [1, 3, 4],
                [2, 3, 4],
                [0, 5, 6],
                [0, 7, 8],
                [5, 7, 8],
                [6, 7, 8]
            ]
        }
    },

    /*
     * Utility function for turning indexed vertices into a "raw" coordinate array
     * arranged as triangles.
     */
    toRawTriangleArray: function (indexedVertices) {
        var result = [],
            i,
            j,
            maxi,
            maxj;

        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                indexedVertices.vertices[
                indexedVertices.indices[i][j]]);
            }
        }

        return result;
    },

    /*
     * Utility function for turning indexed vertices into a "raw" coordinate array
     * arranged as line segments.
     */
    toRawLineArray: function (indexedVertices) {
        var result = [],
            i,
            j,
            maxi,
            maxj;

        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                    // JD: 7(a)
                indexedVertices.vertices[
                indexedVertices.indices[i][j]],

                indexedVertices.vertices[
                indexedVertices.indices[i][(j + 1) % maxj]]);
            }
        }

        return result;
    },

    // JD: 10(a)
    drawCylinder: function (indexedVertices) {
        var center = [0, 0, 0];
        var radius = 0.5;
        var l = 20;
        var angleInRadians;
        var s;
        var c;
        // JD: 11(a)
        var MAGIC_NUMBER = 360;
        var max = 2 * Math.PI;
        var incr = max / MAGIC_NUMBER;
        for (angleInRadians = 0; angleInRadians < max; angleInRadians += incr) {
            s = Math.sin(angleInRadians);
            c = Math.cos(angleInRadians);
            for (var i = radius; i >= -radius; i -= 0.05) {
                indexedVertices.vertices.push([s / 2, i, c / 2])
            }
        }
        for (var j = 0; j < indexedVertices.vertices.length; j++) {
            indexedVertices.indices.push([j, l++, j])
        }
        var result = [],
            maxi,
            maxj;

        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                    // JD: 7(a)
                indexedVertices.vertices[
                indexedVertices.indices[i][j]],

                indexedVertices.vertices[
                indexedVertices.indices[i][(j + 1) % maxj]]);
            }
        }
        return result;
    },

    //http://www.webglacademy.com/courses.php#16
    // JD: 12(a)
    drawSphere: function (indexedVertices) {
        var numberOfVertices = 0;
        var theta, phi;
        for (var i = 0; i <= 64; i++) {
            phi = Math.PI * i / 64;

            for (j = 0; j <= 32; j++) {
                theta = 2 * Math.PI * j / 32;

                indexedVertices.vertices.push([Math.cos(theta) * Math.sin(phi), Math.cos(phi), Math.sin(theta) * Math.sin(phi)])
                if (i !== 0) {
                    indexedVertices.indices.push([i * (32 + 1) + j, i * (32 + 1) + j - 1, (i - 1) * (32 + 1) + j]);
                    numberOfVertices += 3;
                }
                if (i !== 0 && i !== 1) {
                    indexedVertices.indices.push([i * (32 + 1) + j - 1, (i - 1) * (32 + 1) + j, (i - 1) * (32 + 1) + j - 1]);
                    numberOfVertices += 3;
                }
            }
        }

        var result = [],
            maxi,
            maxj;

        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                    // JD: 7(a)
                indexedVertices.vertices[
                indexedVertices.indices[i][j]]);
            }
        }
        return result;
    },

    drawCone: function (indexedVertices) {
        var center = [0, 0, 0];
        var radius = 0.5;
        var l = 20;
        var angleInRadians;
        var s;
        var c;
        var MAGIC_NUMBER = 360; // JD: 11(a)
        var max = 2 * Math.PI;
        var incr = max / MAGIC_NUMBER;
        for (angleInRadians = 0; angleInRadians < max; angleInRadians += incr) {
            s = Math.sin(angleInRadians);
            c = Math.cos(angleInRadians);

            for (var i = radius; i >= -radius; i -= 0.05) {
                var ratio = i - 1 * radius
                indexedVertices.vertices.push([s / 2 * ratio, i, c / 2 * ratio])
            }
        }
        for (var j = 0; j < indexedVertices.vertices.length; j++) {
            indexedVertices.indices.push([j, l++, j])
        }

        var result = [],
            maxi,
            maxj;

        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                    // JD: 7(a)
                indexedVertices.vertices[
                indexedVertices.indices[i][j]],

                indexedVertices.vertices[
                indexedVertices.indices[i][(j + 1) % maxj]]);
            }
        }
        return result;
    }

    // JD: 11(b)
};