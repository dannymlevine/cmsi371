var Matrix = function(n) {
    var matrix = [];
    for(var i=0; i<n; i++) {
        matrix[i] = [];
        for(var j=0; j<n; j++) {
            if(i === j){
                matrix[i][j] = 1
            }else{
                matrix[i][j] = 0;
            }
        }
    }
    
    matrix.multiplication = function multiply(matrix2) {
        var result = [];
        if(matrix[0].length !== matrix2.length){
            throw "Cannot multiply these 2 Matrices"
        }else{
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
    }

    matrix.translation = function translation(array){
        for(var i = 0; i<array.length; i++){
            matrix[i].push(array[i]);
        }
        return matrix
    }
    
    matrix.scale = function scale(scaleSize){
        var j = 0;
        for(var i = 0; i<matrix.length; i++){
            matrix[i][j]=scaleSize[i]
            if(i>=scaleSize.length){
                matrix[i][j]=1;
            }
            j++
        }
        return matrix
    }

    matrix.rotation = function rotation(angle, x, y, z){
        // In production code, this function should be associated
        // with a matrix object with associated functions.
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
        matrix = [ [(x2 * oneMinusC) + c, (xy * oneMinusC) + zs, (xz * oneMinusC) - ys, 0.0],
                   [ (xy * oneMinusC) - zs, (y2 * oneMinusC) + c, (yz * oneMinusC) + xs, 0.0],
                   [ (xz * oneMinusC) + ys, (yz * oneMinusC) - xs, (z2 * oneMinusC) + c, 0.0],
                   [0.0, 0.0, 0.0, 1.0] ];
        return matrix
    }

    return matrix
}