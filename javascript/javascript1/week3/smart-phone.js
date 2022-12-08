const activities = [];
const date = new Date().toLocaleDateString();

// Function for adding activity into array
function addActivity(activity, duration) {
    if (typeof date === "string" && typeof activity === "string" && typeof duration === "number") {
        activities.push({
            "date": date,
            "activity": activity,
            "duration": duration
        });
        return activities;
    } else {
        return "Enter valid values";
    }
}

addActivity("Youtube", 30);
addActivity("Netflix", 22);
addActivity("Dramacool", 40);
console.log(activities);


function showStatus(myArray) {
    let totalTime = 0;
    if (myArray && myArray === activities) {
        for (let i = 0; i < myArray.length; i++) {
            totalTime += myArray[i].duration;
        }
        console.log(`You have added ${myArray.length} activities. They amount to ${totalTime} min. of usage`);
        return totalTime;
    } else {
        console.log("Add some activities before calling showStatus");
    }
}

showStatus(activities);


// Function for setting limit to smartphone usage
function usageLimit(storageLimit) {
    if (storageLimit && typeof storageLimit === "number") {
        if (storageLimit < showStatus(activities)) {
            console.log("You have reached your limit, no more smartphoning for you!");
        } else {
            console.log("Continue usage, you have not reached your limit");
        }
    } else {
        console.log("Please, set the limit in number");
    }
}

usageLimit(30);


// Function for calculating the activity a user has spent the most time on 
function maxActivityTime(arr) {
    // Create new array of durations
    const ids = arr.map(item => {
        return item.duration;
    });
    console.log(Math.max(...ids));
}

maxActivityTime(activities);