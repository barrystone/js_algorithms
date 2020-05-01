nativeSearch=(longStr,shortStr)=>{
    let count=0;
    next:
    for(let i=0;i<=longStr.length-1;i++){
        if(longStr[i]===shortStr[0]){
            for(let j=1;j<=shortStr.length-1;j++){
                if(longStr[j+i]!==shortStr[j]) continue next;
            }
            count++;
        }
    }
    return count;
}

console.log(nativeSearch("abjabcsabc","abc"));