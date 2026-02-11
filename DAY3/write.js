

const fs = require('fs');


fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});

const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
