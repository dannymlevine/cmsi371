/*
 * Unit tests for our vector object.
 */
$(function () {

    // This suite checks instantiation basics.
    test("Creation", function () {
        var v = Matrix(4);

        equal(v.length, 4, "Matrix size");
        equal(v[0][0], 1, "First element of first row");
        equal(v[1][1], 1, "Second element of second row");
        equal(v[2][2], 1, "Third element of third row");
        equal(v[3][3], 1, "Fourth element of fouth row");
        equal(v[0][1], 0, "Second element of first row");
        equal(v[2][3], 0, "Third element of fourth row");

    });

    test("translation", function () {
        var v = Matrix(4);

        equal(v.length, 4, "Matrix size");

        v.translation([1, 2, 3]);

        equal(v[0][3], 1, "Fourth element of first row");
        equal(v[1][3], 2, "Fourth element of second row");
        equal(v[2][3], 3, "Fourth element of third row");
        equal(v[3][3], 1, "Fourth element of fourth row");

    });

    test("Scale", function () {
        var v = Matrix(4);

        equal(v.length, 4, "Matrix size");

        v.scale([2, 3, 4]);

        equal(v[0][0], 2, "First element of first row");
        equal(v[1][1], 3, "Second element of second row");
        equal(v[2][2], 4, "Third element of third row");
        equal(v[3][3], 1, "Fourth element of fourth row");

    });

    test("Multiplication", function () {
        var v = Matrix(4);
        var x = Matrix(4);
        var k = [];

        equal(v.length, 4, "Matrix size");
        equal(x.length, 4, "Matrix size");

        v.translation([1, 2, 3]);
        v.scale([2, 3, 4]);
        x.translation([1, 2, 3]);
        x.scale([2, 3, 4]);

        k = v.multiplication(x);

        equal(k[0][3], 3, "Fourth element of first row");
        equal(k[1][3], 8, "Fourth element of second row");
        equal(k[2][3], 15, "Fourth element of third row");
        equal(k[0][0], 4, "First element of first row");
        equal(k[1][1], 9, "Second element of second row");
        equal(k[2][2], 16, "Third element of third row");
        equal(k[3][3], 1, "Fourth element of fourth row");

    });

    test("Rotation", function () {
        var v = Matrix(4);

        equal(v.length, 4, "Matrix size");

        v.rotation(90, 2, 3, 4);

        equal(v[0][0], 0.13793103448275865, "First element of first row");
        equal(v[1][1], 0.3103448275862069, "Second element of second row");
        equal(v[2][2], 0.5517241379310345, "Third element of third row");
        equal(v[3][3], 1, "Fourth element of fourth row");

    });

    test("Orthographic", function () {
        var v = Matrix(4);

        equal(v.length, 4, "Matrix size");

        v.orthographic(1, 2, 3, 4, 5, 6);

        equal(v[0][0], -2, "First element of first row");
        equal(v[3][1], 7, "Second element of fourth row");
        equal(v[3][2], -11, "Third element of fourth row");
        equal(v[3][3], 1, "Fourth element of fouth row");

    });

    test("Frustum", function () {
        var v = Matrix(4);

        equal(v.length, 4, "Matrix size");

        v.frustum(1, 2, 3, 4, 5, 6);

        equal(v[0][0], -10, "First element of first row");
        equal(v[1][2], -7, "Third element of second row");
        equal(v[2][2], -11, "Third element of third row");

    });

    test("toWebGL", function () {
        var v = Matrix(4);
        var result = [];

        equal(v.length, 4, "Matrix size");

        result = v.toWebGL();

        equal(result[0], 1, "First element of first row");
        equal(result[1], 0, "Second element of second row");
        equal(result[2], 0, "Third element of third row");
        equal(result[3], 0, "Fourth element of fouth row");

    });

});