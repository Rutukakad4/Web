function getFirstWord(sentence){
    let firstword="";
    for(let i=0;i<sentence.length;i++){
        if(sentence[i]==="")break;
        firstword +=sentence[i];

    }
    return firstword;
}
console.log(getFirstWord("Hello word"));