var toggleButton = document.getElementById("toggleButton");
var Div = document.getElementById("Div");
toggleButton.addEventListener("click", function() {
    
    if (Div.style.display === "none") {
        Div.style.display = "block";
    } else {
        Div.style.display = "none";
    }
});