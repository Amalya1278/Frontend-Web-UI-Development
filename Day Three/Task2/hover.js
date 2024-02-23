document.addEventListener("DOMContentLoaded",function(){
var items = document.querySelectorAll("#itemList li");
items.forEach(function(item) {
    item.addEventListener("mouseover", function() {
        item.style.color = "purple";
    });

    item.addEventListener("mouseout", function() {
        item.style.color = "black"; 
    });
});
});
