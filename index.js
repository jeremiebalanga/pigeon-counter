// Get a reference to the HTML element that will display the count.
// This reference will be used to update the count displayed on the page.
let numberMagic = document.getElementById("numbermagic")

// Initialize the count to 0. This count is used to keep track of how many times 
// the increment function has been called since the last save.
let count = 0

// Get a reference to the HTML element that will display the history of saved counts.
// This reference will be used to add new entries to the history.
let saveEL = document.getElementById("save-el")

// Define a function that increments the count and updates the count displayed on the page.
function increment() {
    // Increment the count.
    count += 1

    // Update the count displayed on the page.
    numberMagic.textContent = count
}

// Define a function that saves the current count to the history and resets the count.
function save() {
    // Create a string that represents the current count. This string will be added to the history.
    let newNumber = count + " - "

    // Add the new entry to the history displayed on the page.
    saveEL.textContent += newNumber

    // Reset the count displayed on the page to 0.
    numberMagic.textContent = 0

    // Reset the count.
    count = 0
}
