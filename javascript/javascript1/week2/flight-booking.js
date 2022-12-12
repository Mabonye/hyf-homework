let firstname;
let surname;
let useFormalName; //Boolean variable


function getFullname(firstname = "Jane", surname = "Doe", useFormalName = false) {
    let fullname = firstname + " " + surname;
    while (useFormalName) {
        //const prompt = require("prompt-sync")();
        const gender = prompt("Can you input your gender (male or female): ");

        if (gender === "male") {
            return fullname = "Lord " + fullname;

        } else if (gender === "female") {
            return fullname = "Lady " + fullname;
            
        } else {
            console.log("Wrong answer!");
        }

    }
    return fullname;

}

let fullname1 = getFullname();
console.log(fullname1);

let fullname2 = getFullname("Alexander", "Sechu", true);
console.log(fullname2);