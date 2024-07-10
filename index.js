// Define the global tutorials array
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Function to capitalize the first letter of each word
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Function to convert titles to title case
function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ')
      .map(word => capitalize(word))
      .join(' ');
  });
}

// Test the function
console.log(titleCased());
