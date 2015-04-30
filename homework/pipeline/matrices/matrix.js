var matrix = function (size) {
    this.matrixArray = [];
    for (var i = 0; i < size; i++) {
        this.matrixArray[i] = [];
        for (var j = 0; j < size; j++) {
            if (i === j) {
                this.matrixArray[i][j] = 1;
            } else {
                this.matrixArray[i][j] = 0;
            }
        }

    }
};

matrix.prototype.multiplication = function (matrix2) {
    var result = new matrix(0);
    if (this.matrixArray[0].length !== matrix2.matrixArray.length) {
        throw "Cannot multiply these 2 Matrices";
    } else {
        for (var i = 0; i < this.matrixArray.length; i++) {
            result.matrixArray[i] = [];
            for (var j = 0; j < matrix2.matrixArray[0].length; j++) {
                var sum = 0;
                for (var k = 0; k < this.matrixArray[0].length; k++) {
                    sum += this.matrixArray[i][k] * matrix2.matrixArray[k][j];
                }
                result.matrixArray[i][j] = sum;
            }
        }
        return result;
    }
},

matrix.translation = function (array) {
    this.matrixArray = [
        [1, 0, 0, array[0]],
        [0, 1, 0, array[1]],
        [0, 0, 1, array[2]],
        [0.0, 0.0, 0.0, 1.0]
    ];

    return matrix;
},

matrix.scale = function (scaleSize) {
    this.matrixArray = [
        [scaleSize[0], 0, 0, 0],
        [0, scaleSize[1], 0, 0],
        [0, 0, scaleSize[2], 0],
        [0.0, 0.0, 0.0, 1.0]
    ];

    return matrix;
},

angle, x, y, z
matrix.rotation = function (rotationArray) {
    var axisLength = Math.sqrt((rotationArray[1] * rotationArray[1]) + (rotationArray[2] * rotationArray[2]) + (rotationArray[3] * rotationArray[3])),
        s = Math.sin(rotationArray[0] * Math.PI / 180.0),
        c = Math.cos(rotationArray[0] * Math.PI / 180.0),
        oneMinusC = 1.0 - c,

        // We can't calculate this until we have normalized
        // the axis vector of rotation.
        x2, // "2" for "squared."
        y2,
        z2,
        xy,
        yz,
        xz,
        xs,
        ys,
        zs;

    // Normalize the axis vector of rotation.
    rotationArray[1] /= axisLength;
    rotationArray[2] /= axisLength;
    rotationArray[3] /= axisLength;

    // *Now* we can calculate the other terms.
    x2 = rotationArray[1] * rotationArray[1];
    y2 = rotationArray[2] * rotationArray[2];
    z2 = rotationArray[3] * rotationArray[3];
    xy = rotationArray[1] * rotationArray[2];
    yz = rotationArray[2] * rotationArray[3];
    xz = rotationArray[1] * rotationArray[3];
    xs = rotationArray[1] * s;
    ys = rotationArray[2] * s;
    zs = rotationArray[3] * s;

    // GL expects its matrices in column major order.
    matrix1 = [
        [(x2 * oneMinusC) + c, (xy * oneMinusC) + zs, (xz * oneMinusC) - ys, 0.0],
        [(xy * oneMinusC) - zs, (y2 * oneMinusC) + c, (yz * oneMinusC) + xs, 0.0],
        [(xz * oneMinusC) + ys, (yz * oneMinusC) - xs, (z2 * oneMinusC) + c, 0.0],
        [0.0, 0.0, 0.0, 1.0]
    ];

    for (var i = 0; i < this.matrixArray.length; i++) {
        for (var j = 0; j < this.matrixArray.length; j++) {
            this.matrixArray[i][j] = matrix1[i][j];
        }
    }


    return matrix;
},

matrix.orthographic = function (right, left, top, bottom, near, far) {
    var width = right - left,
        height = top - bottom,
        depth = far - near;

    matrix1 = [
        [2.0 / width, 0.0, 0.0, 0.0],
        [0.0, 2.0 / height, 0.0, 0.0],
        [0.0, 0.0, -2.0 / depth, 0.0],
        [-(right + left) / width, -(top + bottom) / height, -(far + near) / depth, 1.0]
    ];

    for (var i = 0; i < this.matrixArray.length; i++) {
        for (var j = 0; j < this.matrixArray.length; j++) {
            this.matrixArray[i][j] = matrix1[i][j];
        }
    }

    return matrix;
},

matrix.frustum = function (right, left, top, bottom, near, far) {
    var width = right - left,
        height = top - bottom,
        depth = far - near;

    matrix1 = [
        [((2 * near) / width), 0, ((right + left) / width), 0],
        [0, ((2 * near) / height), ((top + bottom) / height), 0],
        [0, 0, -(far + near) / depth, -((2 * near * far) / depth)],
        [0, 0, -1, 0]
    ];

    for (var i = 0; i < this.matrixArray.length; i++) {
        for (var j = 0; j < this.matrixArray.length; j++) {
            this.matrixArray[i][j] = matrix1[i][j];
        }
    }

    return matrix;
},

matrix.lookAtMatrix = function(x1,y1,z1,x2,y2,z2,x3,y3,z3){
    var xaxis = new vector1(x1,y1,z1)
    var yaxis = new vector2(x2,y2,z2)
    var zaxis = new vector3(x3,y3,z3)

    this.matrixArray = [
        [xaxis.x, xaxis.y, xaxis.z, 0],
        [yaxis.x, yaxis.y, xaxis.z, 0],
        [zaxis.x, zaxis.y, xaxis.z, 0],
        [0.0, 0.0, 0.0, 1.0]
    ];

    return matrix
}

matrix.toWebGL = function () {
    var result = [];
    result = result.concat.apply(result, this.matrixArray);
    return result;
};
