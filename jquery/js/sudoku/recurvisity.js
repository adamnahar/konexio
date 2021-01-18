function fibonacci(n){
    var sum = 0;
    for (var i = 1; i<=n; i++){
        sum = sum + i;
    }
    return sum;
}
function fibonacciRecursive(n){
    if (n===1){
        return 1;
    }else {
        return fibonacciRecursive(n-1)+ n;
    }
    console.log(fibonacciRecursive(5));
}