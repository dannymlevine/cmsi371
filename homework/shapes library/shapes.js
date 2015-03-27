/*
 * This module defines/generates vertex arrays for certain predefined shapes.
 * The "shapes" are returned as indexed vertices, with utility functions for
 * converting these into "raw" coordinate arrays.
 */

var Shapes = {
    /*
     * Returns the vertices for a small icosahedron.
     */
    cylinder: function () {
        return{
            vertices: [
            ],

            indices: [
            ]

        }
    },

    sphere: function (){
        return{
            vertices:[
            ],
            indices: [
            ]
        }
    },

    doublePyramid: function (){
        return{
            vertices:[
            [0,0,0],
            [0.1,0.1,0.1],
            [-0.1,0.1,-0.1],
            [-0.1,0.1,0.1],
            [0.1,0.1,-0.1],
            [0.1,-0.1,0.1],
            [-0.1,-0.1,-0.1],
            [-0.1,-0.1,0.1],
            [0.1,-0.1,-0.1]
            ],
            indices: [
            [0,1,2],
            [0,3,4],
            [1,3,4],
            [2,3,4],
            [0,5,6],
            [0,7,8],
            [5,7,8],
            [6,7,8]
            ]
        }
    },

    // star:function(){
    //     return{
    //         vertices:[
    //         [0.2,0.2,0.2],
    //         [0.1,0.1,0.1],

    //         ],
    //         indices:[
    //         ]
    //     }
    // }


    // icosahedron: function () {
    //     // These variables are actually "constants" for icosahedron coordinates.
    //     var X = 0.525731112119133606,
    //         Z = 0.850650808352039932;

    //     return {
    //         vertices: [
    //             [ -X, 0.0, Z ],
    //             [ X, 0.0, Z ],
    //             [ -X, 0.0, -Z ],
    //             [ X, 0.0, -Z ],
    //             [ 0.0, Z, X ],
    //             [ 0.0, Z, -X ],
    //             [ 0.0, -Z, X ],
    //             [ 0.0, -Z, -X ],
    //             [ Z, X, 0.0 ],
    //             [ -Z, X, 0.0 ],
    //             [ Z, -X, 0.0 ],
    //             [ -Z, -X, 0.0 ]
    //         ],

    //         indices: [
    //             [ 1, 4, 0 ],
    //             [ 4, 9, 0 ],
    //             [ 4, 5, 9 ],
    //             [ 8, 5, 4 ],
    //             [ 1, 8, 4 ],
    //             [ 1, 10, 8 ],
    //             [ 10, 3, 8 ],
    //             [ 8, 3, 5 ],
    //             [ 3, 2, 5 ],
    //             [ 3, 7, 2 ],
    //             [ 3, 10, 7 ],
    //             [ 10, 6, 7 ],
    //             [ 6, 11, 7 ],
    //             [ 6, 0, 11 ],
    //             [ 6, 1, 0 ],
    //             [ 10, 1, 6 ],
    //             [ 11, 0, 9 ],
    //             [ 2, 11, 9 ],
    //             [ 5, 2, 9 ],
    //             [ 11, 2, 7 ]
    //         ]
    //     };
    // },

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
                        indexedVertices.indices[i][j]
                    ]
                );
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
                    indexedVertices.vertices[
                        indexedVertices.indices[i][j]
                    ],

                    indexedVertices.vertices[
                        indexedVertices.indices[i][(j + 1) % maxj]
                    ]
                );
            }
        }

        return result;
    },

    // Denote the distinguished point by x0=(x0,y0,z0), 
//pick any (nonzero) vector a=(a,b,c) parallel to the line,
// and let R denote the desired radius of the circle.
 //Then, the circle is locus of points in the plane orthogonal to the line (and hence v) at x0 that are a distance R from x0, that is, the points x satisfying
// a⋅(x−x0)=0and(x−x0)⋅(x−x0)=R2.
// In components this is
// a(x−x0)+b(y−y0)+c(z−z0)=0and(x−x0)2+(y−y0)2+(z−z0)2=R2.
// One can parameterize this circle by picking an orthonormal pair (p,q) of vectors each orthogonal to v and declaring
// γ(t):=x0+Rcostp+Rsintq.
//  xc + x1, yc + y1
//  xc + x1, yc - y1
//   xc + y1, yc + x1
//  xc + y1, yc - x1
// xc - x1, yc + y1
// xc - x1, yc - y1
//  xc - y1, yc + x1
//  xc - y1, yc - x1,
//     function printSineAndCosineForAnAngle(angleInDegrees) {
//         var angleInRadians = angleInDegrees * Math.PI / 180;
//         var s = Math.sin(angleInRadians);
//         var c = Math.cos(angleInRadians);
//         // console.log("s = " + s + " c = " + c);
//     }
  

    drawCylinder: function(indexedVertices){
        var center = [0,0,0];
        var radius = 0.5;
        var l = 20;
        var angleInRadians;
        var s;
        var c;
        // x= vertexArray[0]+ Math.cos(t) + Math.sin(t)q
        // for(var i = angleInDegrees;i===360;i+=10){
        var MAGIC_NUMBER = 360;
        var max = 2*Math.PI;
        var incr = max/MAGIC_NUMBER;
        for(angleInRadians = 0; angleInRadians < max; angleInRadians += incr) {
            s = Math.sin(angleInRadians);
            c = Math.cos(angleInRadians);
            for(var i=radius;i>=-radius;i-=0.05){
                indexedVertices.vertices.push([s/2,i,c/2])
            }
        }
        // console.log(indexedVertices.vertices)
            for(var j=0;j<indexedVertices.vertices.length;j++ ){
                indexedVertices.indices.push([j,l++,j])
            }
        //indexedVertices.vertices.length
        var result = [],
            i,
            j,
            maxi,
            maxj;

        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                    indexedVertices.vertices[
                        indexedVertices.indices[i][j]
                    ],

                    indexedVertices.vertices[
                        indexedVertices.indices[i][(j + 1) % maxj]
                    ]
                );
            }
        }
        // console.log(result)
        return result;
    },

    // drawSphere: function(indexedVertices){
    //     var radius = 0.1
    //     var center = [0,0,0]
    //     var angleInDegrees = 0
    //     do{
    //         var angleInRadians = angleInDegrees * Math.PI / 180;
    //         var s = Math.sin(angleInRadians);
    //         var c = Math.cos(angleInRadians);
    //         indexedVertices.vertices.push([s,0,c])
    //     }while(angleInDegrees!==360)
        


    // }

    drawSphere:function (indexedVertices){
        var numberOfVertices=0;
        var theta,phi;
        for (var i=0; i<=64; i++) {   //loop on crowns
            phi=Math.PI*i/64;         //compute lattitude

            for (j=0; j<=32; j++) { //loop on bands
                theta=2*Math.PI*j/32;   //compute longitude

                indexedVertices.vertices.push([Math.cos(theta)*Math.sin(phi),Math.cos(phi), Math.sin(theta)*Math.sin(phi)])
                if (i!==0) { //add a triangle face
                    indexedVertices.indices.push([i*(32+1)+j, i*(32+1)+j-1, (i-1)*(32+1)+j]);
                    numberOfVertices+=3;
                }
                if (i!==0 && i!==1) { //add an other triangle face
                    indexedVertices.indices.push([i*(32+1)+j-1, (i-1)*(32+1)+j, (i-1)*(32+1)+j-1]);
                    numberOfVertices+=3;
                }
            }             
        } 

        // var result = [],
        //     i,
        //     j,
        //     maxi,
        //     maxj;

        // for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
        //     for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
        //         result = result.concat(
        //             indexedVertices.vertices[
        //                 indexedVertices.indices[i][j]
        //             ],

        //             indexedVertices.vertices[
        //                 indexedVertices.indices[i][(j + 1) % maxj]
        //             ]
        //         );
        //     }
        // }

        // return result;

        var result = [],
            i,
            j,
            maxi,
            maxj;

        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                    indexedVertices.vertices[
                        indexedVertices.indices[i][j]
                    ]
                );
            }
        }

        return result;   


    }

};