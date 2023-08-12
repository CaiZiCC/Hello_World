function sumit(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        console.log('out' + i);
        var currentRow = matrix[i];
        for (var i_1 = 0; i_1 < currentRow.length; i_1++) {
            console.log('in' + i_1);
            sum += currentRow[i_1];
        }
    }
    return sum;
}
var list = [[1, 8], [2, 5]];
sumit(list);
