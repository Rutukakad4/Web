function shiftLeft(arr) {
    if (arr.length === 0) return arr; 

    const firstElement = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    arr[arr.length - 1] = firstElement;

    return arr;
}

const array = [1, 2, 3, 4, 5];
console.log("Array after shifting left by one position:", shiftLeft(array));
