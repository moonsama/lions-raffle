const fs = require('fs');
const crypto = require('crypto');

const hashedObjects = Array.from({length: 400}, (_, i) => {
    console.log(i+1)
    const obj = JSON.parse(fs.readFileSync(`./conservation_data/${i+1}.json`, 'utf8'))
    const hash = crypto.createHash('sha3-256');
    hash.update(JSON.stringify(obj));
    return hash.digest('hex');
})

// Write the hashed objects to a new JSON file
const outputFile = './hashed_conservation_dataset.json';
fs.writeFileSync(outputFile, JSON.stringify(hashedObjects, null, 2));

console.log('Hashed objects have been written to', outputFile);
