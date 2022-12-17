// Housey pricey (A house price estimator)

// Variable declaration and assignment
let myArray = ["Peter", "Julia"];
let houseWidth = [8, 5];
let houseDeep = [10, 11];
let houseHeight = [10, 8];
let gardenSizeInM2 = [100, 70];
let housePricePaid = [2500000, 1000000];
let i = 0;


// House price for Peter
let volumeInMeters = houseWidth[i] * houseDeep[i] * houseHeight[i];
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2[i] * 300;

if (housePrice < housePricePaid[i]) {
    console.log(myArray[i] + " paid more");
} else {
    console.log(myArray[i] + " paid less");
}


// House price for Julia
i++;
volumeInMeters = houseWidth[i] * houseDeep[i] * houseHeight[i];
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2[i] * 300;

if (housePrice < housePricePaid[i]) {
    console.log(myArray[i] + " paid more");
} else {
    console.log(myArray[i] + " paid less");
}
