function countChar(str){
    let object={};
    for(let char of str){
        if(isAlphaNumeric(char)){
//         if(/[a-z0-9]/.test(char)){
           char=char.toLowerCase(); 
//                object[char]>0?object[char]++:object[char]=1;
               object[char]=++object[char]||1;
        }           
    }
    return object;
}

function isAlphaNumeric(char){
    var c=char.charCodeAt(0)
    if(c>=65&&c<=90||c>=97&&c<=122||c>=48&&c<=57){
        return true;
    }else{
        return false;
    }

}

// countChar('My favorite basketball player is James Harden 13')