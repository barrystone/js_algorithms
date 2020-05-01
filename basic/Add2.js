function addUpto(n){
    return n*(n+1)/2;
}

// console.log(addUpto(10));

var t1 = performance.now();
addUpto(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1)/1000} seconds.`);