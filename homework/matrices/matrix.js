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
    matrix.multiplication = function multiplyMatrices(m2) {
        var result = [];
        for (var i = 0; i < matrix.length; i++) {
            result[i] = [];
            for (var j = 0; j < m2[0].length; j++) {
                var sum = 0;
                for (var k = 0; k < matrix[0].length; k++) {
                    sum += matrix[i][k] * m2[k][j];
                }
                result[i][j] = sum;
            }
        }
            return result;
    }

    return matrix
}