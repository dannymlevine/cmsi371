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
    matrix.multiplication = function multiplyMatrices(matrix2) {
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

    matrix.translation = function translation(vector){
        vector.push(1);
        matrix = matrix.multiplication(vector);
        return matrix
    }

    return matrix
}