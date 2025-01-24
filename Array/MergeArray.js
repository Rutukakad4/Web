function mergeArraysWithoutDuplicates(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    const uniqueArray = [...new Set(mergedArray)];
    
    return uniqueArray;
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

console.log("Merged Array without Duplicates:", mergeArraysWithoutDuplicates(array1, array2));
