binarySearch=(arr,val)=>{
    search=(left,right)=> {
        let middle = Math.floor((left + right) / 2);
        if(middle===left) {
            if(arr[middle]===val) return middle;
            if(arr[middle+1]===val) return middle+1;
            else return -1;
        }
        if (val > arr[middle]) left = middle+1;
        else if (val < arr[middle]) right = middle-1;
        else  return middle;
        return search(left, right);
    }
    return search(0,arr.length-1);
}

console.log(binarySearch([1,2,3,4,5,6,7],6));



var t1=Date.now();
binarySearch([1,2,3,4,5,6,7],6)
var t2=Date.now();
console.log(`Time Elapsed: ${(t2-t1)/1000} seconds.`);