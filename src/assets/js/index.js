
document.addEventListener("DOMContentLoaded", function (event) {

  /*----------------------------maska input---------------------------*/
  // $(document).ready(function () {
  //   $("#").inputmask({ "mask": "+7 (999) 999-99-99" });
  // });


  /*----------------------------Prelouder-----------------------------*/
  // let promise = new Promise((resolve) => {
  //   setTimeout(() => {
  //     document.body.classList.add('loaded_hiding');
  //     resolve();
  //   }, 1800);

  // });
  // promise
  //   .then(
  //     result => {
  //       setTimeout(() => {
  //         document.body.classList.add('loaded');
  //       }, 500);
  //     }
  //   );


  /*-------------------------------Swipper------------------------------*/
  // new Swiper('.swiper', {
  //   loop: true,
  //   speed:900,
  //   navigation: {
  //     nextEl: '.btn-next',
  //     prevEl: '.btn-prev',
  //   },
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 1,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //     },
  //   },
  // });


  /*-------------------------------Menu---------------------------------*/
  // let menuBtn = document.querySelector('.menu-btn');
  // let menu = document.querySelector('.menu');

  //   if (menuBtn && menu) {
  //     menuBtn.addEventListener('click', function () {
  //       menuBtn.classList.toggle('active');
  //       menu.classList.toggle('active');
  //       document.body.classList.toggle('overflow');
  //       document.documentElement.classList.toggle('overfow');
  //       if(menu.classList.contains('active')){
  //         disableScroll();
  //         return
  //       }
  //       enableScroll();
  //     })
  //   }

  //   document.addEventListener("click", (e) => {
  //     if (e.target.classList.contains('menu')) {
  //       menuBtn.classList.remove('active');
  //       menu.classList.remove('active');
  //       document.body.classList.remove('overflow');
  //       document.documentElement.classList.remove('overfow');
  //       enableScroll();
  //     }
  //   })

  //   function disableScroll() {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  //     window.onscroll = function () {
  //       window.scrollTo(scrollLeft, scrollTop);
  //     };
  //   }
  //   function enableScroll() {
  //     document.documentElement.style.setProperty('scroll-behavior', null);
  //     window.onscroll = function () { };
  //   }


  /*-----------------------------header sticky---------------------------*/
  // let header = document.querySelector(".header");

  // document.addEventListener('scroll', function () {
  //   let res = pageYOffset < document.documentElement.clientHeight
  //   if (!res) {
  //     header.classList.add('header--sticky');
  //     header.classList.add('fade-in');
  //   } else {
  //     header.classList.remove('fade-in');
  //     header.classList.remove('header--sticky');
  //   }
  // });


  /*-------------------------------animation------------------------------*/

  // function onEntry(entry) {
  //   entry.forEach(change => {
  //     if (change.isIntersecting) {
  //       change.target.classList.add('element-show');

  //     } else { change.target.classList.remove('element-show'); }
  //   });
  // }
  // let options = {
  //   threshold: [0.3]
  // };

  // let observer = new IntersectionObserver(onEntry, options);
  // let elements = document.querySelectorAll('.element-animation');
  // let elementsAnimationRight = document.querySelectorAll('.element-animation-right');
  // let elementsAnimationLeft = document.querySelectorAll('.element-animation-left');
  // let elementsAnimationOpacitty = document.querySelectorAll('.element-animation-opacity')

  // function animationElement(elements) {
  //   for (let elm of elements) {
  //     observer.observe(elm);
  //   }
  // };

  // if (elements) {
  //   animationElement(elements);
  // }
  // if (elementsAnimationOpacitty) {
  //   animationElement(elementsAnimationOpacitty);
  // }

  // if (elementsAnimationRight) {
  //   animationElement(elementsAnimationRight);
  // }
  // if (elementsAnimationLeft) {
  //   animationElement(elementsAnimationLeft);
  // }


  /*---------------------------------form---------------------------------*/
  // let formContract = document.querySelectorAll('form')
  // if (formContract) {
  //   formContract.forEach(f => {
  //     f.addEventListener("submit", (e) => {
  //       e.preventDefault();
  //     })
  //   })
  // }



});