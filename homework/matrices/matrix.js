var Matrix = function (n) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        matrix[i] = [];
        for (var j = 0; j < n; j++) {
            if (i === j) {
                matrix[i][j] = 1;
            } else {
                matrix[i][j] = 0;
            }
        }
    }

    matrix.multiplication = function multiply(matrix2) {
        var result = [];
        if (matrix[0].length !== matrix2.length) {
            throw "Cannot multiply these 2 Matrices";
        } else {
            for (var i = 0; i < matrix.length; i++) {
                result[i] = [];
                for (var j = 0; j < matrix2[0].length; j++) {
                    var sum = 0;
                    for (var k = 0; k < matrix[0].length; k++) {
                        sum += matrix[i][k] * matrix2[k][j];
                    }
                    result[i][j] = sum;
                }
            }
            return result;
        }
    };

    matrix.translation = function translation(array) {
        for (var i = 0; i < array.length; i++) {
            matrix[i][matrix.length - 1] = array[i];
        }
        return matrix;
    };

    matrix.scale = function scale(scaleSize) {
        var j = 0;
        for (var i = 0; i < matrix.length; i++) {
            matrix[i][j] = scaleSize[i];
            if (i >= scaleSize.length) {
                matrix[i][j] = 1;
            }
            j++;
        }
        return matrix;
    };

    matrix.rotation = function rotation(angle, x, y, z) {
        var axisLength = Math.sqrt((x * x) + (y * y) + (z * z)),
            s = Math.sin(angle * Math.PI / 180.0),
            c = Math.cos(angle * Math.PI / 180.0),
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
        x /= axisLength;
        y /= axisLength;
        z /= axisLength;

        // *Now* we can calculate the other terms.
        x2 = x * x;
        y2 = y * y;
        z2 = z * z;
        xy = x * y;
        yz = y * z;
        xz = x * z;
        xs = x * s;
        ys = y * s;
        zs = z * s;

        // GL expects its matrices in column major order.
        matrix = [
            [(x2 * oneMinusC) + c, (xy * oneMinusC) + zs, (xz * oneMinusC) - ys, 0.0],
            [(xy * oneMinusC) - zs, (y2 * oneMinusC) + c, (yz * oneMinusC) + xs, 0.0],
            [(xz * oneMinusC) + ys, (yz * oneMinusC) - xs, (z2 * oneMinusC) + c, 0.0],
            [0.0, 0.0, 0.0, 1.0]
        ];
        return matrix;
    };

    matrix.orthographic = function orthographic(right, left, top, bottom, near, far) {
        var width = right - left,
            height = top - bottom,
            depth = far - near;

        matrix = [
            [2.0 / width, 0.0, 0.0, 0.0],
            [0.0, 2.0 / height, 0.0, 0.0],
            [0.0, 0.0, -2.0 / depth, 0.0],
            [-(right + left) / width, -(top + bottom) / height, -(far + near) / depth, 1.0]
        ];
        return matrix;
    };

    matrix.frustum = function frustum(right, left, top, bottom, near, far) {
        var width = right - left,
            height = top - bottom,
            depth = far - near;

        matrix = [
            [((2 * near) / width), 0, ((right + left) / width), 0],
            [0, ((2 * near) / height), ((top + bottom) / height), 0],
            [0, 0, -(far + near) / depth, -((2 * near * far) / depth)],
            [0, 0, -1, 0]
        ];
        return matrix;
    };

    matrix.toWebGL = function webGl() {
        var result = [];
        result = result.concat.apply(result, matrix);
        return result;
    };

    return matrix;
};