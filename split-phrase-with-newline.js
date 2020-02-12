function splitPhrase (phrase) {
    //splits the phrase into an array of words with space as the separator
    let words = phrase.split(" ")
    // takes the array of words and adds a new line between each word
    let newLine = words.join("\n")
    return newLine;
  }
  
  console.log(splitPhrase('How do you do?'))
  /* returns
    How
    do
    you
    do?
  */