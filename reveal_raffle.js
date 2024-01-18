const seedrandom = require('seedrandom')
const fs = require('fs')

const rng = seedrandom('XXXXXXXXXXXXXXXXXX')

const list = JSON.parse(fs.readFileSync('hashed_conservation_dataset.json', 'utf8'))

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(rng() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

console.log('Total samples:', list.length)
shuffle(list)
fs.writeFileSync('./shuffled_hashed_conservation_dataset.json', JSON.stringify(list, null, 2))
console.log('Done', './shuffled_hashed_conservation_dataset.json')
