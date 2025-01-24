function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
    
    return [...uniqueSet];
}

const array = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
console.log("Array after removing duplicates:", removeDuplicates(array));
