function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array must have at least two elements.";
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest; 
            largest = arr[i]; 
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]; 
        }
    }

    return secondLargest;
}

const array = [10, 5, 20, 8, 30];
console.log("Second Largest Number:", findSecondLargest(array));  
