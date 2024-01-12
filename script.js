const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


var abc = document.querySelector(".fixed-image");
var bcd = document.querySelector(".allStack");

bcd.addEventListener("mouseover", function() {
    abc.style.display = "block";
});

bcd.addEventListener("mouseleave", function() {
    abc.style.display = "none";
});


var stock = document.querySelectorAll(".stack")
stock.forEach(function(sto){
    sto.addEventListener("mouseenter", function(){
        var image = sto.getAttribute("daimg")
        abc.style.backgroundImage = `url(${image})`
    })
})



// Swiper JS

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
  });

// Swiper JS

var menu = document.querySelector(".nav-p2 h3");
var menuscr = document.querySelector(".menuscr");
var navimg = document.querySelector("nav img");
var flag = 0;
menu.addEventListener("click",function(){
  if(flag == 0){
        menuscr.style.top = 0;
        navimg.style.opacity = 0;
        flag = 1;
  }else{
       menuscr.style.top = "-100%";
       navimg.style.opacity = 1;
       flag = 0;
  }
} )
