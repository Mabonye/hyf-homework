const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};


function calculateTravelTime(myObj) {
    let myTime = myObj["destinationDistance"] / myObj["speed"];
    let myMinute = (myTime - Math.floor(myTime)) * 60;
    return `${Math.floor(myTime)} hours and ${Math.floor(myMinute)} minutes`;
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes