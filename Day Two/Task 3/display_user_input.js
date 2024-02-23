function displayContent() {

    var inputField = document.getElementById("inputContent");
    var inputValue = inputField.value;

    // display on the screen
    var displayParagraph = document.getElementById("displayResult");
    displayParagraph.textContent =  inputValue;
}