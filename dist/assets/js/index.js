
document.addEventListener("DOMContentLoaded", function (event) {


  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  class Modal {

    constructor(option = {}) {

      this.option = option;

      this.ACTIVE_BUTTON = this.option.activeSelectButton ? this.option.activeSelectButton : "active-btn-modal";
      this.ACTIVE_MODAL = this.option.activeSelectModal ? this.option.activeSelectModal : "visibility-modal";
      this.BUTTON_DATA_NAME = this.option.buttonDataName ? this.option.buttonDataName : "open-modal";
      this.MODAL_DATA_NAME = this.option.modalDataName ? this.option.modalDataName : "modal";
      this.CLOSE_DATA_NAME = this.option.closeDataName ? this.option.closeDataName : "close-modal";

      this.btnAll = document.querySelectorAll(`[data-${this.BUTTON_DATA_NAME}]`);
      this.modal = document.querySelectorAll(`[data-${this.MODAL_DATA_NAME}]`);

      this.open();
      this.close();
    }

    open() {

      if (this.btnAll.length > 0) {

        let newDataName = this._convertString();

        this.btnAll.forEach(b => {
          b.addEventListener('click', () => {
            if (b.classList.contains(this.ACTIVE_BUTTON)) {
              this._removeVisibility();
              return;
            }
            b.classList.toggle(this.ACTIVE_BUTTON);
            this.requiredModal = document.querySelector(`[data-${this.MODAL_DATA_NAME}="${b.dataset[newDataName]}"]`);
            if (this.requiredModal) {
              this.requiredModal.classList.toggle(this.ACTIVE_MODAL);
              this._disableScroll();
            }
          })
        })
      }
    }

    close() {
      if (this.modal.length > 0) {
        this.modal.forEach(m => {
          m.addEventListener('click', (event) => this._hide(event));
        })
      }
    }


    _hide(event) {
      this.btnClose = event.currentTarget.querySelectorAll(`[data-${this.CLOSE_DATA_NAME}]`);
      this.content = event.currentTarget.firstElementChild;

      if (this.btnClose.length > 0) {

        this.btnClose.forEach(close => {
          if (this.content.contains(event.target) && !close.contains(event.target)) {
            return;
          }
          this._removeVisibility();
          event.target.removeEventListener("click", event => this._hide(event));

        })


      } else {
        if (this.content.contains(event.target)) {
          return;
        }
        this._removeVisibility();
        event.target.removeEventListener("click", event => this._hide(event));

      }
    }

    _removeVisibility() {
      document.querySelector('.' + this.ACTIVE_BUTTON) ? document.querySelector('.' + this.ACTIVE_BUTTON).classList.remove(this.ACTIVE_BUTTON) : '';
      document.querySelector('.' + this.ACTIVE_MODAL) ? document.querySelector('.' + this.ACTIVE_MODAL).classList.remove(this.ACTIVE_MODAL) : '';
      this._enableScroll();
    }

    _disableScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      document.documentElement.classList.add('lock-scroll');
      window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      };
    }

    _enableScroll() {
      document.documentElement.classList.remove('lock-scroll');
      window.onscroll = function () { };
    }

    _convertString() {
      let str = this.BUTTON_DATA_NAME;
      let i = -1;
      while ((i = str.indexOf('-', i + 1)) != -1) {
        str = str.substr(0, i + 1) + str[i + 1].toUpperCase() + str.substr(i + 2);
      }
      str = str.replace(/[\.\-/\\\s]/g, '');
      return str
    }
  }

  class Accordion {
    constructor(accordion, setting) {

      this.accordion = typeof accordion === "string" ? document.querySelector(accordion) : accordion;
      this.setting = setting;
      this._getElements();
      this.click();
      this._showPanel();
    }

    _getElements() {
      this._getBtn();
      this._getPanel();
    }

    _getBtn() {
      return this.btnAll = typeof this.setting.btn === "string" ? this.accordion.querySelectorAll(this.setting.btn) : this.setting.btn;
    }
    _getPanel() {
      return this.panelAll = typeof this.setting.panel === "string" ? this.accordion.querySelectorAll(this.setting.panel) : this.setting.panel; // получить все панели
    }

    click() {
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
              p.style.maxHeight = p.scrollHeight + "px";
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

    _showPanel() {
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

  class DoubleAccordion extends Accordion {
    click() {
      this.btnAll.forEach((el, id) => {
        el.addEventListener('click', () => {
          if (this.setting.onlyOnePanel === true) {
            if (this.panelAll[id].style.maxHeight) {

              this.panelAll[id].style.maxHeight = null;
              this.btnAll[id].classList.remove('active');
              return;
            }
            this.panelAll.forEach((p, id) => {
              p.style.maxHeight = p.scrollHeight + "px";
              p.style.maxHeight = null;

              this.btnAll[id].classList.remove('active');
            });
            this.panelAll[id].style.maxHeight = '100vh';
            this.btnAll[id].classList.add('active');



          } else {
            if (this.panelAll[id].style.maxHeight) {

              this.panelAll[id].style.maxHeight = null;
              this.btnAll[id].classList.remove('active');
            } else {
              this.panelAll[id].style.maxHeight = '100vh';
              this.btnAll[id].classList.add('active');
            }
          }
        })
      });
    }
  }

  new Modal();

  const Anchors = {
    anchors: document.querySelectorAll("a[href*='#']"),
    btn: document.querySelectorAll("[data-scroll]"),
    top: 100,

    scrollIntoView() {
      if (this.anchors.length > 0) {
        for (let anchor of this.anchors) {
          anchor.addEventListener('click',  (ev) => {
            ev.preventDefault();
            const blockID = anchor.getAttribute('href').substr(1);
            const block = document.getElementById(blockID);
            if (block) {
              block.style.scrollMarginTop = `${this.top}px`
              block.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          })
        }
      }
    },

    clickButtonScroll() {

      if (this.btn.length > 0) {
        for (let b of this.btn) {
          b.addEventListener('click',  (ev) => {
            ev.preventDefault();
            const id = ev.currentTarget.dataset.scroll;
            const bl = document.getElementById(id);
            
            if (bl) {
              bl.style.scrollMarginTop = `${this.top}px`
            
              bl.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
          })
        }
      }
    }

  }

  Anchors.scrollIntoView();
  if (window.innerWidth < 768) {
    Anchors.clickButtonScroll();
  }


  const form = document.querySelectorAll('form');

  if (form) {
    form.forEach(f => {
      f.addEventListener('submit', (e) => {
        e.preventDefault();
      })
    })
  }





});