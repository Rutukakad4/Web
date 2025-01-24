function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    
    return arr2.filter(element => set1.has(element));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log("Intersection of arrays:", intersection(array1, array2));
