selectionSort=(arr)=>{
    const swap=(arr,idx1,idx2)=>
        [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]];
    for(let i=0;i<arr.length;i++){
        let lowest=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[lowest]) lowest=j;
        }
        if(lowest!==i) swap(arr,i,lowest);
    }
    return arr;
}

console.log(selectionSort([0,2,34,22,10,19,17]));