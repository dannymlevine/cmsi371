    //http://www.hotscripts.com/forums/javascript/59719-changing-images-body-background.html
    /* you must supply your own immages */
    var bgimages = ["planet express.jpeg", "empty living room.jpeg", "hangar.jpg", "space.jpeg", "planet.jpeg", "planet surface.jpeg"];

    // JD: 9


    //preload images
    var pathToImg = []; // JD: 9a
    for (i = 0; i < bgimages.length; i++) {
        pathToImg[i] = new Image();
        pathToImg[i].src = bgimages[i];
    }

    var inc = -1; // JD: 9a

    function bgSlide() { // JD: 9b
        if (inc < bgimages.length - 1) {
            inc++;
        }
        document.body.style.backgroundImage = "url('" + pathToImg[inc].src + "')";

    }

    // JD: 9c
    if (document.all || document.getElementById) window.onload = new Function('setInterval("bgSlide()",6000)') /* JD: 9d */;