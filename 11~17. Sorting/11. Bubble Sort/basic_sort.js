//[].sort(val);
//if val negative : first second
//       possitive: second forst
//       0        : first second (as same)

// numberCompare=(num1,num2)=>{
//     return num2-num1;
// }
//
// console.log([6,4,15,10].sort(numberCompare));

compareByLen=(str1,str2)=>{
    return str2.length-str1.length;
}
console.log(["Steele","Colt","Data Structures","Algotrithms"].sort(compareByLen));