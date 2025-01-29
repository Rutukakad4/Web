function isPalindrome(str){
    let reversed="";
    for(let i=str.length-1; i>-0; i--){
        reversed +=str[i];
    }
    return str === reversed;
}
console.log("IS 'radar' a palindrome ?",isPalindrome("radar"));
console.log("Is 'helo' a palindrome ?",isPalindrome("hello"));