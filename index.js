const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let updatedTutorial = tutorials.map((tutorial) => {
    let words = tutorial.split(" ");
    let titleCase = words.map(word => {
      let firstLetter = word.charAt(0).toUpperCase();
      let remainingWord = word.substring(1);
      return firstLetter + remainingWord;
    })
      return titleCase.join(" ");
  });

  return updatedTutorial;
};

console.log(titleCased());