const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

// Function for returning shortest word in the array
function getShortestWord(arr) {
    let word = arr.sort((a, b) => a.length - b.length);
    return word[0];
}


console.log(getShortestWord(danishWords)); 