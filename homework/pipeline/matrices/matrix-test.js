$(function () {

    // This suite checks instantiation basics.
    test("Creation", function () {

        var v = new matrix(4);

        equal(v.matrixArray.length, 4, "Matrix size");
        equal(v.matrixArray[0][0], 1, "First element of first row");
        equal(v.matrixArray[1][1], 1, "Second element of second row");
        equal(v.matrixArray[2][2], 1, "Third element of third row");
        equal(v.matrixArray[3][3], 1, "Fourth element of fouth row");
        equal(v.matrixArray[0][1], 0, "Second element of first row");
        equal(v.matrixArray[2][3], 0, "Third element of fourth row");

    });

    test("translation", function () {
        var v = new matrix(4);

        equal(v.matrixArray.length, 4, "Matrix size");

        v.translation([1, 2, 3]);

        equal(v.matrixArray[0][3], 1, "Fourth element of first row");
        equal(v.matrixArray[1][3], 2, "Fourth element of second row");
        equal(v.matrixArray[2][3], 3, "Fourth element of third row");
        equal(v.matrixArray[3][3], 1, "Fourth element of fourth row");

    });

    test("Scale", function () {
        var v = new matrix(4);

        equal(v.matrixArray.length, 4, "Matrix size");

        v.scale([2, 3, 4]);

        equal(v.matrixArray[0][0], 2, "First element of first row");
        equal(v.matrixArray[1][1], 3, "Second element of second row");
        equal(v.matrixArray[2][2], 4, "Third element of third row");
        equal(v.matrixArray[3][3], 1, "Fourth element of fourth row");

    });

    test("Multiplication", function () {
        var v = new matrix(4);
        var x = new matrix(4);
        var k;

        equal(v.matrixArray.length, 4, "Matrix size");
        equal(x.matrixArray.length, 4, "Matrix size");

        // JD: 4(b)
        v.translation([1, 2, 3]);
        x.scale([2, 3, 4]);

        k = v.multiplication(x);

        equal(k.matrixArray[0][3], 1, "Fourth element of first row");
        equal(k.matrixArray[1][3], 2, "Fourth element of second row");
        equal(k.matrixArray[2][3], 3, "Fourth element of third row");
        equal(k.matrixArray[0][0], 2, "First element of first row");
        equal(k.matrixArray[1][1], 3, "Second element of second row");
        equal(k.matrixArray[2][2], 4, "Third element of third row");
        equal(k.matrixArray[3][3], 1, "Fourth element of fourth row");

    });

    test("Rotation", function () {
        var v = new matrix(4);

        equal(v.matrixArray.length, 4, "Matrix size");

        v.rotation([90, 2, 3, 4]);

        equal(v.matrixArray[0][0], 0.13793103448275865, "First element of first row");
        equal(v.matrixArray[1][1], 0.3103448275862069, "Second element of second row");
        equal(v.matrixArray[2][2], 0.5517241379310345, "Third element of third row");
        equal(v.matrixArray[3][3], 1, "Fourth element of fourth row");

    });

    test("Orthographic", function () {
        var v = new matrix(4);

        equal(v.matrixArray.length, 4, "Matrix size");

        v.orthographic(1, 2, 3, 4, 5, 6);

        equal(v.matrixArray[0][0], -2, "First element of first row");
        equal(v.matrixArray[3][1], 7, "Second element of fourth row");
        equal(v.matrixArray[3][2], -11, "Third element of fourth row");
        equal(v.matrixArray[3][3], 1, "Fourth element of fouth row");

    });

    test("Frustum", function () {
        var v = new matrix(4);

        equal(v.matrixArray.length, 4, "Matrix size");

        v.frustum(1, 2, 3, 4, 5, 6);

        equal(v.matrixArray[0][0], -10, "First element of first row");
        equal(v.matrixArray[1][2], -7, "Third element of second row");
        equal(v.matrixArray[2][2], -11, "Third element of third row");

    });

    test("toWebGL", function () {
        var v = new matrix(4);
        var result = [];

        equal(v.matrixArray.length, 4, "Matrix size");

        result = v.toWebGL();

        equal(result[0], 1, "First element of first row");
        equal(result[1], 0, "Second element of second row");
        equal(result[2], 0, "Third element of third row");
        equal(result[3], 0, "Fourth element of fouth row");

    });

});