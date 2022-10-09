exports.capitalize = (sentence) => {
  let newWords = [];
  for(let word of sentence.split(" ")) {
    newWords.push(word.charAt(0).toUpperCase() + word.slice(1))
  }

  return newWords.join(" ");
}
