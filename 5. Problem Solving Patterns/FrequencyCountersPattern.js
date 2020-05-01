//Big o with o(n**2)
// same = (arr1,arr2)=>{
//     if(arr1.length!==arr2.length){
//         return false;
//     }
//     for(let i=0;i<arr1.length;i++){
//         let correctIndex = arr2.indexOf(arr1[i]**2);
//         if(correctIndex===-1){
//             return false;
//         }
//         arr2.splice(correctIndex,1);
//     }
//     return true;
// }

same = (arr1,arr2)=>{
    if(arr1.length!==arr2.length){
        return false;
    }
    let freqCount1={};
    let freqCount2={};
    for(let val of arr1){
        freqCount1[val]=++freqCount1[val]||1
    }
    for(let val of arr2){
        freqCount2[val]=++freqCount2[val]||1
    }
//     console.log(freqCount1,freqCount2);
    for(let key in freqCount1){
        if(!(key**2 in freqCount2)) return false;
        if(freqCount1[key]!==freqCount2[key**2]) return false;
    }
    return true;
} 