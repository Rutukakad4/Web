function manualIncludes(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true; 
        }
    }
    return false;
}

const array = [1, 2, 3, 4, 5];
console.log(manualIncludes(array, 3)); 
console.log(manualIncludes(array, 6)); 
