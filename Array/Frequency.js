function findFrequency(arr) {
    const frequencyMap = {};

    for (let i = 0; i < arr.length; i++) {
        if (frequencyMap[arr[i]]) {
            frequencyMap[arr[i]]++;  
        } else {
            frequencyMap[arr[i]] = 1;  
        }
    }

    return frequencyMap;
}

const array = [1, 2, 2, 3, 3, 3, 4, 5, 5];
console.log("Frequency of Each Element:", findFrequency(array));
