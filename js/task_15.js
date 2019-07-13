    
// / Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    arr.sort();
    var maxSum = 0;
    var minSum = 0;
    var i;
    for (i = 0; i < 4; i++) {
        minSum += arr[i];
    }
    for (i = 1; i < 5; i++) {
        maxSum += arr[i];
    }
    console.log(minSum, maxSum)
}
