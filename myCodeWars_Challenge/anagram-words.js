const anagrams = (word, words) => words.filter(wrd => wrd.split('').sort().join('') === word.split('').sort().join(''));



//Test =============

console.log(

  anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) //=> ['aabb', 'bbaa']
)

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) //=> ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) //=> []