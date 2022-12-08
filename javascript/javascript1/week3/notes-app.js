const notes = [];

// Function for saving note
function saveNote(content, id) {
    notes.push({ "content": content, "id": id });  // push object to notes array 
    return notes;
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Wash dishes", 3);

console.log(notes);



// Function for getting a specific note
function getNote(id) {

    if (!id || typeof id !== "number") {
        return "An error string";
    } else {
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === id) {
                return notes[i];
            }
        }
        return "The id is not in any object";
    }
}

const firstNote = getNote(2);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}



// Function for logging out notes
function logOutNotesFormatted() {
    for (let i in notes) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
    }
}

logOutNotesFormatted();



// Additional function for deleting specific note using id
function deleteObjectWithId(arr, id) {
    const objIdIndex = arr.findIndex((obj) => obj.id === id);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id && typeof arr[i].id === "number") {
            arr.splice(objIdIndex, 1); // Remove the object with objIdIndex
            return arr;
        }
    }
    console.log("The id is not in the object");

}

console.log(deleteObjectWithId(notes, 2));
