function toggleText() {  /*function for toggling*/
    var button = document.getElementById("toggleButton");
    if (button.textContent === "Hello") {
        button.textContent = "Goodbye";
    } else {
        
        button.textContent = "Hello";
    }
}
