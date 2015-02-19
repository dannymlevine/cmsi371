    //http://www.hotscripts.com/forums/javascript/59719-changing-images-body-background.html
    /* you must supply your own immages */
    var bgimages=["planet express.jpeg","empty living room.jpeg","hangar.jpg","space.jpeg","planet.jpeg"];

     
    //preload images
    var pathToImg=[];
    for (i=0;i<bgimages.length;i++)
    {
      pathToImg[i]=new Image();
      pathToImg[i].src=bgimages[i];
    }
     
    var inc=-1
     
    function bgSlide()
    {
      if (inc<bgimages.length-1){
        inc++;
      }
      document.body.background=pathToImg[inc].src

    }
     
    if (document.all||document.getElementById)
      window.onload=new Function('setInterval("bgSlide()",6000)')