// This is an Immediately Invoked Function Expression (IIFE)
// It allows you to create a private scope for your code
// and avoid polluting the global namespace.

// named iife
(function chai () {
  // Your code here
  console.log("DB Connected");
})();

// anonymous iife
(function () {
  // Your code here
  console.log("DB Connected");
})();

// IIFE with parameters
(function (name) {
  // Your code here
  console.log("DB Connected", name);
})("John Doe");

// IIFE with arrow function
(() => {
  // Your code here
  console.log("DB Connected");
})();