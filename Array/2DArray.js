function generateMultiplicationTable() {
    const table = [];

    for (let i = 1; i <= 10; i++) {
        const row = [];
        for (let j = 1; j <= 10; j++) {
            row.push(i * j); 
        }
        table.push(row); 
    }

    return table;
}

const multiplicationTable = generateMultiplicationTable();

for (let i = 0; i < multiplicationTable.length; i++) {
    console.log(multiplicationTable[i].join(' ')); // Print each row
}
