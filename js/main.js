  "use strict";

  //faq
  const btns = document.querySelectorAll(".faq-question");
  function accordion() {
    this.classList.toggle("open");
  }
  btns.forEach((el) => el.addEventListener("click", accordion));

  //menu
  const menuBtn = document.querySelectorAll(".header-menu-btn");
  const headerMenu = document.getElementsByClassName("header-menu")[0];
  function menuBtnToggle() {
    this.classList.toggle("active");
    headerMenu.classList.toggle("active");
    document.getElementsByTagName("html")[0].classList.toggle("overflow");
    document.getElementsByTagName("body")[0].classList.toggle("overflow");
  }
  function menuItemToggle() {
    menuBtn.forEach((el) => el.classList.toggle("active"));
    headerMenu.classList.toggle("active");
    document.getElementsByTagName("html")[0].classList.toggle("overflow");
    document.getElementsByTagName("body")[0].classList.toggle("overflow");
  }
  menuBtn.forEach((el) => el.addEventListener("click", menuBtnToggle));
  headerMenu.querySelectorAll("a").forEach((el) => el.addEventListener("click", menuItemToggle));


  //numbers
  function increaseNum() {
    var coords = document.getElementById("numbers").getBoundingClientRect();
    var windowHeight = document.getElementsByTagName("html")[0].getBoundingClientRect(); //-1200
    var countH = windowHeight.top + (-windowHeight.top) + (-windowHeight.top);
    if (countH - 1500 >= coords.top) {
      function counter(id, start, end, duration) {
        if (end % 1 != 0) {
          let obj = document.getElementById(id);
          let current = start;
          let range = +end - start;
          let increment = +end > start ? 0.1 : -0.1;
          let step = duration / (range * 10);
          let timer = setInterval(() => {
              current += increment;
              obj.textContent = current.toFixed(1);
              if (current >= +end - 0.1) {
                clearInterval(timer);
              }
            }, step);
        }
        else {
          let obj = document.getElementById(id);
          let current = start;
          let range = end - start;
          let increment = end > start ? 1 : -1;
          let step = Math.abs(Math.floor(duration / range));
          let timer = setInterval(() => {
              current += increment;
              obj.textContent = current;
              if (current == end) {
                clearInterval(timer);
              }
            }, step);
        }
      }
      let numberValue = document.querySelectorAll('.number-value');
        for (let i = 0; i < numberValue.length; i++){
            let fixed = 0;
            if (numberValue[i] % 1 == 0) {
              fixed = 0.1;
            }
            else {
              fixed = 0;
            }
            counter(numberValue[i].id, fixed, numberValue[i].textContent, 4000);
        }
      document.removeEventListener('scroll', increaseNum);
    }
  }
  document.addEventListener('scroll', increaseNum);
