// Goodboy-Oldboy (A dog age calculator)

// Variable declaration and assignment
const dogYearOfBirth = 2020;
const dogYearFuture = 2045;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogYear * 7 + " dog years old in " + dogYearFuture);
} else {
    let dogYear = dogYearFuture - dogYearOfBirth;
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture);
}