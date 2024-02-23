var clickCount = 0;

    function updateClickCount() {
        clickCount++;
        document.getElementById("clickDisplay").textContent = "COUNT-->" + clickCount;
    }