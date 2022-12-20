const myObj = {};
const todoArr = [];
const myMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// Voice assistant function
function getReply(command) {

    if (command) {
        const commandArr = command.split(" ");
        command = command.toLowerCase();

        // Get user name
        if (command.startsWith("hey") || command.startsWith("hello") || command.startsWith("hi") || command.startsWith("my name")) {
            let word = commandArr.pop();
            if (Object.keys(myObj).length === 0) {
                myObj.name = word;
            }
            return `Nice to meet you ${myObj.name}`;

        } else if (command.startsWith("what") && command.endsWith("name?")) {
            if (myObj.name) {
                return `Your name is ${myObj.name}`;
            } else {
                return "You have not mentioned your name, what is your name?";
            }

        } else if (command.endsWith("my name")) {
            word = commandArr.shift();
            if (Object.keys(myObj).length === 0) {
                myObj.name = word;
            }
            return `Nice to meet you ${myObj.name}`;

        // Create a todo list
        } else if (command.includes("add") && (command.includes("singing") || command.includes("fishing"))) {
            word = commandArr[1];
            if (word === "singing") {
                word += " in the shower";
            }
            todoArr.push(word)
            myObj.todos = todoArr;
            return `${word} added to your todo`;

        } else if (command.includes("what") && command.endsWith("todo?")) {
            word = todoArr.join(" and ");
            return `you have ${todoArr.length} todos - ${word}`;

        // Remove fishing from the todo list
        } else if (command.includes("remove") && command.includes("fishing")) {

            if (todoArr.includes("fishing")) {
                let index = todoArr.indexOf("fishing");
                word = todoArr.splice(index, 1);
                return `Removed ${word} from your todo`;
            }
            return "Fishing is not in your todo";

        // Get today's date
        } else if (command.startsWith("what") && command.includes("today")) {
            let myDate = new Date();
            return `${myDate.getDate()} of ${myMonth[myDate.getMonth()]} ${myDate.getFullYear()}`;

        // Perform arithmetic operations
        } else if (command.includes("*") || command.includes("+") || command.includes("-") || command.includes("/")) {
            word = commandArr.slice(-3).join(' ');
            return `${eval(word)}`;

        // Set timeout in minutes
        } else if (command.includes("timer") && command.includes("minutes")) {
            word = commandArr.indexOf("minutes");
            setTimeout(() => { 
                console.log("Timer Done"); 
            }, commandArr[word - 1] * 60 * 1000);
            return `Timer set for ${commandArr[word - 1]} minutes`;

        // End conversation with voice assistant 
        } else if (command.includes("bye") || command.includes("stop")) {
            return "Bye!!";
        }

    } else {
        return "Hi! What is your name?";
    }

}


//console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
//console.log(getReply("My name is Benjamin"));
console.log(getReply("Benjamin is my name"));
//console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing to my todo"));
//console.log(getReply("Remove fishing from my todo"));
console.log(getReply("what is on my todo?"));
console.log(getReply("What day is it today?"));
//console.log(getReply("11 * 3"));
//console.log(getReply("set a timer for 4 minutes"));
console.log(getReply("Goodbye"));
//console.log(getReply());

//console.log(myObj);



