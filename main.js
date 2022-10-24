/* =========== ACTIVE LINK ========= */
const navlink = document.querySelectorAll('.nav__link');

function activeLink(){
  navlink.forEach((a) => a.classList.remove('active-link'));
  this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activeLink));


/* =========== MIXITUP FILTER ========= */
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});


/* =========== ACTIVE WORK ========= */
const lineWork = document.querySelectorAll('.category__btn');

function activeWork(){
	lineWork.forEach((a) => a.classList.remove('active-work'));
	this.classList.add('active-work');
}

lineWork.forEach((a) => a.addEventListener('click', activeWork));

/* =========== TESTIMONIALS SWIPER  ========= */

  var testSwiper = new Swiper(".testimonial__container ", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });

