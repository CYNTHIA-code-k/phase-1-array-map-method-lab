//
const tutorials = [
  "What Does The This Keyword Mean?",
  "What Is The Constructor OO Pattern?",
  "Implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What Is NaN And How Can We Check For It",
  "What Is The Difference Between StopPropagation And PreventDefault?",
  "Immutable State And Pure Functions",
  "What Is The Difference Between == And ===?",
  "What Is The Difference Between Event Capturing And Bubbling?",
  "What Is JSONP?"
];

function titleCased() {
  return tutorials.map(tutorial => {
    // Split the tutorial title into individual words
    let words = tutorial.split(' ');
    // Capitalize the first letter of each word
    let capitalizedWords = words.map(word => {
      // Capitalize only the first letter of the word
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    // Join the capitalized words back into a title
    return capitalizedWords.join(' ');
  });
}
console.log(titleCased());
