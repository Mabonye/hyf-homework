let days =
    ["Sunday", "Monday", "Tuesday", "Wednesday", "Thusday", "Friday", "Saturday"];
const todayDate = new Date(); //Gets today's date

function getEventWeekday(numberOfDays) {
    /*
    todayDate.getDay() gets the index for day of the week on todayDate
    (7 - index) returns number of days left in a week after todayDate
    */

    if (typeof numberOfDays === "number") {
        if (numberOfDays > (7 - todayDate.getDay())) {
            let eventDayIndex = (numberOfDays + todayDate.getDay()) % 7;
            console.log("The event will be held on a " + days[eventDayIndex]);
        } else {
            let newIndex = todayDate.getDay() + numberOfDays;
            console.log("The event will be held on a " + days[newIndex]);
        }
    } else {
        console.log("Please, enter the scheduled days for the event");
    }

}

getEventWeekday(4);

