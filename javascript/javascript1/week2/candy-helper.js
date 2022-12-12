const boughtCandyPrices = [];
const myObj = {
    "sweet": 0.5,
    "chocolate": 0.7,
    "toffee": 1.1,
    "chewing-gum": 0.03
};
let amountToSpend = Math.random() * 100;

// Function for adding candy prices into array
function addCandy(candyType, weight) { 
    if (myObj.hasOwnProperty(candyType)) {
        boughtCandyPrices.push(myObj[candyType] * weight);
        return boughtCandyPrices;
    }
    return "The candy type is not available";  
}


function canBuyMoreCandy() {
    //console.log(boughtCandyPrices);
    let i = 0;
    let total = 0;
    while (i < boughtCandyPrices.length) {
        total += boughtCandyPrices[i];
        i++;
    }
    
    if (amountToSpend > total) {
        //console.log(amountToSpend, total);
        console.log("You can buy more, so please do!");
    } else {
        console.log("Enough candy for you!");
    }

}

console.log(addCandy("mint", 20));
console.log(addCandy("toffee", 20));
console.log(addCandy("chewing-gum", 20));
console.log(addCandy("chocolate", 20));
canBuyMoreCandy();