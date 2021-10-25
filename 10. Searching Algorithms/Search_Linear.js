linearSearch=(arr,val)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val) return i;
    }
    return -1;
}

console.log(linearSearch([12,6,43,100,89,1],10)) ;