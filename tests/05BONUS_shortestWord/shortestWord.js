function findShortestWord(text) {
  const textToArray = text.split(' ');
  let smallestWord = textToArray[0];

  for (let i = 0; i < textToArray.length; i++) {
    if (textToArray[i].length < smallestWord.length) {
      smallestWord = textToArray[i];
    }
  }
  return smallestWord;
}

module.exports = { findShortestWord };
