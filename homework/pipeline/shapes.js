/*
 * This module defines/generates vertex arrays for certain predefined shapes.
 * The "shapes" are returned as indexed vertices, with utility functions for
 * converting these into "raw" coordinate arrays.
 */

var Shapes = (function(){
    var shapes = function(attributes){
        this.color = attributes.color || {r:0,b:1,g:0}
        this.children = attributes.children || []
        this.vertices = attributes.vertices || []
        this.indices = attributes.indices || []
        this.shininess = attributes.shininess || 5
        this.specularColor = attributes.specularColor || {r:0,b:1,g:0}
        //this.normals = attributes.normals || 
        this.mode = attributes.mode
        this.tansforms = {}
        //this.transforms.scale = attributes.transforms.scale || [0.5,0.5,0.5]
        //this.transforms.translate = attributes.transforms.translate || [1,1,1]
    };

    shapes.cylinder = function () {
        this.vertices = []
        this.indices = []

        var center = [0, 0, 0];
        var radius = 0.5;
        var l = 20;
        var angleInRadians;
        var s;
        var c;
        var degreesInCircle = 360;
        var max = 2 * Math.PI;
        var incr = max / degreesInCircle;
        for (angleInRadians = 0; angleInRadians < max; angleInRadians += incr) {
            s = Math.sin(angleInRadians);
            c = Math.cos(angleInRadians);
            for (var i = radius; i >= -radius; i -= 0.05) {
                this.vertices.push([s / 2, i, c / 2])
            }
        }
        for (var j = 0; j < this.vertices.length; j++) {
            this.indices.push([j, l++, j])
        }
        return {
            vertices: this.vertices,

            indices: this.indices

        }
    },

    shapes.cone = function () {
        this.vertices = []
        this.indices = []
        var center = [0, 0, 0];
        var radius = 0.5;
        var l = 20;
        var angleInRadians;
        var s;
        var c;
        var degreesInCircle = 360; // JD: 11(a)
        var max = 2 * Math.PI;
        var incr = max / degreesInCircle;
        for (angleInRadians = 0; angleInRadians < max; angleInRadians += incr) {
            s = Math.sin(angleInRadians);
            c = Math.cos(angleInRadians);

            for (var i = radius; i >= -radius; i -= 0.05) {
                var ratio = i - 1 * radius
                this.vertices.push([s / 2 * ratio, i, c / 2 * ratio])
            }
        }
        for (var j = 0; j < this.vertices.length; j++) {
            this.indices.push([j, l++, j])
        }
        return {
            vertices: this.vertices,
            indices: this.indices

        }
    },

    //http://www.webglacademy.com/courses.php#16
    shapes.sphere = function () {
        this.vertices = []
        this.indices = []
        var numberOfVertices = 0;
        var theta, phi;
        for (var i = 0; i <= 64; i++) {
            phi = Math.PI * i / 64;

            for (j = 0; j <= 32; j++) {
                theta = 2 * Math.PI * j / 32;

                this.vertices.push([Math.cos(theta) * Math.sin(phi), Math.cos(phi), Math.sin(theta) * Math.sin(phi)])
                if (i !== 0) {
                    this.indices.push([i * (32 + 1) + j, i * (32 + 1) + j - 1, (i - 1) * (32 + 1) + j]);
                    numberOfVertices += 3;
                }
                if (i !== 0 && i !== 1) {
                    this.indices.push([i * (32 + 1) + j - 1, (i - 1) * (32 + 1) + j, (i - 1) * (32 + 1) + j - 1]);
                    numberOfVertices += 3;
                }
            }
        }
        return {
            vertices: this.vertices,

            indices: this.indices

        }
    },

    shapes.doublePyramid = function () {
        return new shapes({
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
        })
    },

    /*
     * Utility function for turning indexed vertices into a "raw" coordinate array
     * arranged as triangles.
     */
    shapes.toRawTriangleArray = function (indexedVertices) {
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
    shapes.toRawLineArray = function (indexedVertices) {
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

    /*
     * Utility function for computing normal vectors based on indexed vertices.
     * The secret: take the cross product of each triangle.  Note that vertex order
     * now matters---the resulting normal faces out from the side of the triangle
     * that "sees" the vertices listed counterclockwise.
     *
     * The vector computations involved here mean that the Vector module must be
     * loaded up for this function to work.
     */

    shapes.toNormalArray = function (indexedVertices) {
        var result = [],
            i,
            j,
            maxi,
            maxj,
            p0,
            p1,
            p2,
            v0,
            v1,
            v2,
            normal;

        // For each face...
        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            // We form vectors from the first and second then second and third vertices.
            p0 = indexedVertices.vertices[indexedVertices.indices[i][0]];
            p1 = indexedVertices.vertices[indexedVertices.indices[i][1]];
            p2 = indexedVertices.vertices[indexedVertices.indices[i][2]];

            // Technically, the first value is not a vector, but v can stand for vertex
            // anyway, so...
            v0 = new Vector(p0[0], p0[1], p0[2]);
            v1 = new Vector(p1[0], p1[1], p1[2]).subtract(v0);
            v2 = new Vector(p2[0], p2[1], p2[2]).subtract(v0);
            normal = v1.cross(v2).unit();

            // We then use this same normal for every vertex in this face.
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                    [ normal.x(), normal.y(), normal.z() ]
                );
            }
        }

        return result;
    },

    /*
     * Another utility function for computing normals, this time just converting
     * every vertex into its unit vector version.  This works mainly for objects
     * that are centered around the origin.
     */
    shapes.toVertexNormalArray = function (indexedVertices) {
        var result = [],
            i,
            j,
            maxi,
            maxj,
            p,
            normal;

        // For each face...
        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            // For each vertex in that face...
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                p = indexedVertices.vertices[indexedVertices.indices[i][j]];
                normal = new Vector(p[0], p[1], p[2]).unit();
                result = result.concat(
                    [ normal.x(), normal.y(), normal.z() ]
                );
            }
        }

        return result;
    }
    return shapes

})()