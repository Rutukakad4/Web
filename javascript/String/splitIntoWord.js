function splitIntoWords(sentence){
    let words=[];
    let currentWord="";
    for(let i=0;i<sentence.length;i++){
        if(sentence[i]===""){
            words.push(currentWord);
            currentWord="";
        }else{
            currentWord+=sentence[i];
        }
    }
    if(currentWord)words.push(currentWord);
    return words;

}
console.log(splitIntoWords("This is javascript"));