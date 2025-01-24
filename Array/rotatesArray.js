function rotateRight(arr, k) {
    const n = arr.length;
    
    if (n === 0 || k === 0) return arr;

    k = k % n;

    const part1 = arr.slice(0, n - k); 
    const part2 = arr.slice(n - k); 

    return part2.concat(part1);
}

const array = [1, 2, 3, 4, 5];
const k = 2;
console.log("Array after rotating right by " + k + " steps:", rotateRight(array, k));
