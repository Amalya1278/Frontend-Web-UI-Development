
    var images = [
        "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/summer-background-abstract-background-wallpaper-use-for-presentation_HDDYoJOhMg_thumb.jpg",
        "https://wallpaper.dog/large/11021111.jpg",
        "https://marketplace.canva.com/EAD2962NKnQ/2/0/400w/canva-rainbow-gradient-pink-and-purple-virtual-background-LrNk7fAXxw8.jpg",
    ];

    var index = 0;
    var image = document.getElementById("image");
    var prev= document.getElementById("prev");
    var next = document.getElementById("next");

    
    function update() {
        image.src = images[index];
    }

    next.addEventListener("click", function() {
        index = (index + 1) % images.length;
        update();
    });
    prev.addEventListener("click", function() {
        index = (index - 1 + images.length) % images.length;
        update();
    });


    update();
