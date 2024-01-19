// Настройки слайдера
const tours = new Swiper(".tour-slider", {
    // grabCursor: true,

    navigation: {
        nextEl: ".tours-navigation-arrows__right",
        prevEl: ".tours-navigation-arrows__left",
    },
    grabCursor: true,
    slidesPerView: "auto",       
    spaceBetween: 20,   
    loop: true,
    loopedSlides: 3,

    
});

const trainers = new Swiper(".trainers-slider", {
    navigation: {
        nextEl: ".trainers-navigation-arrow__right",
        prevEl: ".trainers-navigation-arrow__left",
    },
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 8,
    initialSlide: 0,
    loop: true,
    loopedSlides: 5,

    
});

const feedback = new Swiper(".feedback-slider", {
    navigation: {
        nextEl: ".feedback-navigation-arrow__right",
        prevEl: ".feedback-navigation-arrow__left",
    },
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 18,
    initialSlide: 0,
    slidesPerGroup:1,
    slidesPerColumn:1,
    loop: true,
    loopedSlides: 3,
});

const gallery = new Swiper(".gallery-slider", {
    navigation: {
        nextEl: ".gallery-navigation-arrow__right",
        prevEl: ".gallery-navigation-arrow__left",
    },
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 5,
    initialSlide: 0,
    slidesPerGroup:1,
    slidesPerColumn:1,
    loop: true,
    loopedSlides: 6,
});


// Логика открытия спойлера
const spoiler = document.querySelector(".show-all-tours__title-text").onclick = function(event){
   event.target.classList.toggle('active')
   if(event.target.classList.contains('active')){
        document.querySelector(".show-all-tours__text").style.maxHeight = document.querySelector(".show-all-tours__text").scrollHeight + "px"        
   } 
   else event.target.nextSibling.nextSibling.style.maxHeight = 0 + 'px'
}

// Адаптация спойлера
window.addEventListener("resize",  function(){
    if(document.querySelector(".show-all-tours__title-text").classList.contains('active')){
      document.querySelector(".show-all-tours__text").style.maxHeight = document.querySelector(".show-all-tours__text").scrollHeight + "px"  
   }
})