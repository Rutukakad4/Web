function replaceSpaces(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result +=str[i] ==="" ? "-":str[i];
    }
    return result;
}
console.log(replaceSpaces("Hello world from javascript"));