// ES2015 Version
bubbleSort=(arr)=>{
    const swap=(arr,idx1,idx2)=>
        [arr[idx1],arr[idx2]]=[arr[idx2],arr[idx1]];
    let noSwap;
    for(let i=arr.length;i>0;i--){
        noSwap=true;
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]) {
                swap(arr,j,j+1)
                noSwap=false;
            };
        }
        if(noSwap) break;
    }
    return arr;
}


// Clean code (normal version)
// bubbleSort=(arr)=>{
//     let noSwap;
//     for(let i=arr.length;i>0;i--){
//         noSwap=true;
//         for(let j=0;j<i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//                 noSwap=false;
//             }
//         }
//         if(noSwap) break;
//     }
//     return arr;
// }

//// Breakdown
// bubbleSort=(arr)=>{
//     let noSwap, move=0,round=0;
//     for(let i=arr.length;i>0;i--){
//         noSwap=true;
//         for(let j=0;j<i-1;j++){
//             console.log(arr,"j:",arr[j]," j+1:",arr[j+1]);
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;
//                 noSwap=false;
//             }
//             ++move;
//         }
//         ++round;
//         console.log("ONE PASS COMPLETE!",round)
//         if(noSwap) break;
//     }
//     console.log("All of moves: ",move," rounds: ",round);
//     return arr;
// }

console.log(bubbleSort([37,45,29,8,12,88,-3]));
// console.log(bubbleSort([8,1,2,3,4,5,6,7]));