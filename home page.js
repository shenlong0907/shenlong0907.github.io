document.addEventListener("DOMContentLoaded", function(){
    //slide text in header
    var btnNext = document.querySelector(".bottom .arrow .fa-chevron-right"),
        btnPrev = document.querySelector(".bottom .arrow .fa-chevron-left"),
        textSlides = document.querySelectorAll(".bottom .text div"),
        indexTextSlide = 0;

    btnNext.addEventListener("click", function(){
        var currentTextSlide = textSlides[indexTextSlide];
        if(indexTextSlide < textSlides.length - 1){
            indexTextSlide++;
        } else{
            indexTextSlide=0;
        }
        var nextTextSlide = textSlides[indexTextSlide];
        //check the end of animation
        var end = function(){
            this.classList.remove("movingOutNext");
            this.classList.remove("activeText");
            this.classList.add("disappearText");
        }
        var next = function(){
            this.classList.remove("movingInNext");
            this.classList.add("activeText");
            this.classList.remove("disappearText");
        };
        currentTextSlide.addEventListener("webkitAnimationEnd", end);
        nextTextSlide.addEventListener("webkitAnimationEnd", next);
        
        //add class when clicking
        currentTextSlide.classList.add("movingOutNext");
        nextTextSlide.classList.add("movingInNext");
    });

    btnPrev.addEventListener("click", function(){
        var currentTextSlide = textSlides[indexTextSlide];
        if(indexTextSlide > 0){
            indexTextSlide--;
        } else{
            indexTextSlide = textSlides.length -1;
        }
        var prevTextSlide = textSlides[indexTextSlide];
        //check the end of animation
        var end = function(){
            this.classList.remove("movingOutPrev");
            this.classList.remove("activeText");
            this.classList.add("disappearText");
        }
        var prev = function(){
            this.classList.remove("movingInPrev");
            this.classList.add("activeText");
            this.classList.remove("disappearText");
        };
        currentTextSlide.addEventListener("webkitAnimationEnd", end);
        prevTextSlide.addEventListener("webkitAnimationEnd", prev);
        
        //add class when clicking
        currentTextSlide.classList.add("movingOutPrev");
        prevTextSlide.classList.add("movingInPrev");
    });

    
    
    

}, false)


           