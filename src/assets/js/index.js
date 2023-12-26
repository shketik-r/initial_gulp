
document.addEventListener("DOMContentLoaded", function (event) {

  /*----------------------------Modal-----------------------------*/
  class Modal {
    constructor(wrap, btn) {
      this.wrap = typeof wrap === "string" ? document.querySelector(wrap) : wrap;
      this.btn = typeof btn === "string" ? document.querySelector(btn) : btn;
      this.menu = this.wrap.firstElementChild;
      this.#click();
      this.#closeWindow();
    }

    #click() {
      this.btn.addEventListener('click', () => {
        this.wrap.classList.toggle('active');
        this.btn.classList.toggle('active');
        this.wrap.classList.contains('active') ? this.#disableScroll() : this.#enableScroll();
      })
    }

    #closeWindow() {
      this.wrap.addEventListener('click', (event) => this.#hide(event));
    }


    #hide(event) {
      if (this.menu.contains(event.target))
        return;
      this.wrap.classList.remove('active');
      this.btn.classList.remove('active');
      this.#enableScroll();
      this.wrap.removeEventListener("click", event => this.#hide(event));
    }

    #disableScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      document.documentElement.classList.add('overflow');
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    }

    #enableScroll() {
      document.documentElement.classList.remove('overflow');
      window.onscroll = function () { };
    }
  }

  // const btn = document.querySelector('.open-menu');
  // const wrap = document.querySelector('.menu-wrapper');


  // if (btn && wrap) {
  //   const menu = new Modal(wrap, btn)
  // }
  /*-----------------------*/



  /*----------------------------DropDownList-----------------------------*/
  class DropDownList {

    constructor(dropDown, setting) {
      this.dropDown = dropDown;
      this.setting = setting
      this.#getElements();
      this.#click();
      if (this.setting.closeWindow === true) {
        this.#closeWindow()
      }
    }

    #getElements() {
      this.#getBtn();
      this.#getPanel();
    }

    #getBtn() {
      return this.btn = typeof this.setting.btn === "string" ? this.dropDown.querySelector(this.setting.btn) : this.setting.btn; //получить кнопки
    }
    #getPanel() {
      return this.panel = typeof this.setting.panel === "string" ? this.dropDown.querySelector(this.setting.panel) : this.setting.panel; // получить панели
    }

    #click() {
      this.btn.addEventListener('click', () => {
        if (this.panel.style.maxHeight) {
          this.panel.style.maxHeight = null;
          this.dropDown.classList.remove('active');
        } else {
          this.panel.style.maxHeight = this.panel.scrollHeight + "px";

          this.dropDown.classList.add('active');
        }
      })
    }
    #closeWindow() {
      this.dropDown.addEventListener('click', () => {
        document.addEventListener("click", event => {
          this.#hide(event);
        });
      })
    }
    #hide(event) {
      if (this.dropDown.contains(event.target))
        return;
      this.panel.style.maxHeight = null;
      this.dropDown.classList.remove('active');
      document.removeEventListener("click", event => {
        this.#hide(event);
      });
    }
  }


  // let dropdown = document.querySelectorAll('.dropdown');

  // if (dropdown.length > 0) {
  //   dropdown.forEach(dd => {
  //     new DropDownList(dd, {
  //       panel: '.dropdown__panel',
  //       btn: '.dropdown__btn',
  //       closeWindow: true, // не обязательно, закрывать панель при клике вне блока
  //     })

  //   })
  // }
  /*-----------------------*/


  /*----------------------------Accordion-----------------------------*/
  class Accordion {


    constructor(accordion, setting) {

      this.accordion = typeof accordion === "string" ? document.querySelector(accordion) : accordion;
      this.setting = setting;
      this.#getElements();
      this.#click();
      this.#showPanel();
    }

    #getElements() {
      this.#getBtn();
      this.#getPanel();
    }

    #getBtn() {
      return this.btnAll = typeof this.setting.btn === "string" ? this.accordion.querySelectorAll(this.setting.btn) : this.setting.btn;  //получить все кнопки
    }
    #getPanel() {
      return this.panelAll = typeof this.setting.panel === "string" ? this.accordion.querySelectorAll(this.setting.panel) : this.setting.panel; // получить все панели
    }


    #click() {
      this.btnAll.forEach((el, id) => {
        el.addEventListener('click', () => {
          //если true показывать только одну панель 
          if (this.setting.onlyOnePanel === true) {
            if (this.panelAll[id].style.maxHeight) {
              this.panelAll[id].style.maxHeight = null;
              this.btnAll[id].classList.remove('active');
              return;
            }
            this.panelAll.forEach((p, id) => {
              p.style.maxHeight = null;
              this.btnAll[id].classList.remove('active');
            });
            this.panelAll[id].style.maxHeight = this.panelAll[id].scrollHeight + "px";
            this.btnAll[id].classList.add('active');
          } else {
            if (this.panelAll[id].style.maxHeight) {
              this.panelAll[id].style.maxHeight = null;
              this.btnAll[id].classList.remove('active');
            } else {
              this.panelAll[id].style.maxHeight = this.panelAll[id].scrollHeight + "px";
              this.btnAll[id].classList.add('active');
            }
          }
        })
      });
    }

    #showPanel() {
      // открытая панель
      if (this.setting.showPanel) {
        const counter = this.setting.showPanel - 1;
        this.panelAll.forEach((p, id) => {
          if (counter === id) {
            p.style.maxHeight = this.panelAll[id].scrollHeight + "px";
            this.btnAll[id].classList.add('active');
          }
        });
      }
    }
  }



  // new Accordion('.accordion', {
  //   panel: '.accordion__panel',
  //   btn: '.accordion__btn',
  //   onlyOnePanel: true,        // открывать только одну
  //   showPanel: 1,               // выбираем открытую панель
  // })
  /*-----------------------*/




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
  /*-----------------------*/

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
  /*-----------------------*/




  function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    document.documentElement.scrollLeft;
    document.documentElement.style.setProperty('scroll-behavior', 'hidden');
    document.documentElement.classList.add('scroll-lock');

    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    document.documentElement.style.setProperty('scroll-behavior', null);
    document.documentElement.classList.remove('scroll-lock');
    window.onscroll = function () { };
  }





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
  /*-----------------------*/

  /*---------------------------------form---------------------------------*/
  // let formContract = document.querySelectorAll('form')
  // if (formContract) {
  //   formContract.forEach(f => {
  //     f.addEventListener("submit", (e) => {
  //       e.preventDefault();
  //     })
  //   })
  // }
  /*-----------------------*/


});