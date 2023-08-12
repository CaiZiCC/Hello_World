function sumit(matrix: number[][]) {
    var sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        console.log('out'+ i);
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            console.log('in' + i);
            sum += currentRow[i];
        }
    }

    return sum;
}

var list: number[][] = [[1,8],[2,5]]
sumit(list);