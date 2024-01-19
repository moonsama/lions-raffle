const seedrandom = require('seedrandom')
const fs = require('fs')

// https://explorer.exosama.com/block/7856969
// https://twitter.com/MoonsamaNFT/status/1748326869441577046
// https://t.me/c/1779168373/369219/446976
const rng = seedrandom('0x1dae7e715b814a599d42c3abb434be387c0e1c5bfd2ec90698095fdad29318e2')

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
