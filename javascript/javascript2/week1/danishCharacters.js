const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
const myObj = {};


// Function for returning Danish letters from a string
function getDanishCharacters(words) {
    let arr = words.match(/[^\x00-\x7F]+/gi); //Not including ASCII character set (0 - 127)
    myObj.total = arr.length;
    arr.forEach(element => {
        myObj[element] = (myObj[element] || 0) + 1;
    })

    return myObj;
}

console.log(getDanishCharacters(danishString));
console.log(getDanishCharacters(danishString2));