//JS for menu section

//Menu Sticky When Scroll Bottom & Top.
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY >= 50) {
      header.classList.add('sticky-scroll');
  } else {
      header.classList.remove('sticky-scroll');
  }
});

//game Slider
swiper = new Swiper('.games-guide-slider', {
    loop: true,                         
    slidesPerView: 2,
    centeredSlides : true,
    // autoplay : false,
    autoplay: {                         
        delay: 5000,
    },
    navigation: {                       
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

//Blog slider
new Swiper('.blog-slide', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    speed: 5000,
    centeredSlides : true,
    slidesPerView: 2,
})

//Portfolio Slider
new Swiper('.portfolio-slide', {
    loop: true,                         
    slidesPerView: 1.2,
    autoplay : false,
    autoplay: {                         
        delay: 3000,  
    },
    speed: 5000,
})

//Bottom To Top Button
const button = document.querySelector('.b2t-btn');
const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};
const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};
displayButton();
scrollToTop();