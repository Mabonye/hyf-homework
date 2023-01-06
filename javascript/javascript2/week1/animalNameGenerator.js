// Create input element
const inputElement = document.createElement("input");
inputElement.setAttribute("type", "text");

// Create a button
const myButton = document.createElement("button")
myButton.textContent = "Click me!";

// Create a paragraph
const para = document.createElement("p");

const animalArray = ["The crying butterfly", "The lonely wolf", "The clumsy panda", "The clever rabbit", "The blind mole", "The slow snail", "The tall giraffe", "The fullmoon wolf", "The scaredy rat", "The peaceful tortoise"];


const body = document.querySelector("body");
body.append(inputElement, myButton, para);

myButton.addEventListener("click", getName);

inputElement.addEventListener("mouseover", onMouseOver);


// Function for assigning spirit animal name to user
function getName() {
    if (inputElement.value === "") {
        para.innerHTML = "Please enter your name!";
    } else {
        para.innerHTML = inputElement.value;
    }
}


/* 
  Function for getting spirited animal name on mouseover 
  filled input element
*/
function onMouseOver() {
    let index = Math.floor(Math.random() * animalArray.length);

    if (inputElement.value !== "") {
        para.innerHTML = inputElement.value + " - " + animalArray[index];
    }
}