function toggleParagraph() {
    var paragraph = document.getElementById("paragraph");
   if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
        document.getElementById("toggleButton").textContent = "Hide";
    } else {
        paragraph.style.display = "none";
        document.getElementById("toggleButton").textContent = "Show";
    }
}