let temp;
let message = "";

// Function for determining what to wear based on temperature
function getWeatherOutfit(temp){
    if (temp < 0) {
        message = "Jacket, scarf, gloves, thick ha and clothes";

    } else if (temp < 15) {
        message = "Jackets  and thick clothes";

    } else if (temp < 25) {
        message = "Light jacket";

    } else {
        message = "Shorts and t-shirt"
    }

    return message;
}

const clothesToWear = getWeatherOutfit(11);
console.log(clothesToWear);