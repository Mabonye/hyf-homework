// Ez Namey (Startup name generator) 

// Variable declaration and assignment
let firstWords = ["Amazing", "Stunning", "Incredible", "Breathtaking", "Astonishing", "Wonderful", "Remarkable", "Marvellous", "Wondrous", "Thrilling"];
let secondWords = ["Easy", "Uncomplicated", "Simple", "Effortless", "Painless", "Undemanding", "Plain", "Straightforward", "Manageable", "Elementary"];
let startupName;

// Generating a random number for the array
const randomNumber = Math.floor(Math.random() * 10);

startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];
console.log("The startup: " + startupName + " contains " + startupName.length + " characters");