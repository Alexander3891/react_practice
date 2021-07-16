"use strict";


    //========== slider 1 ==================
let slideIndex = 1;
showSlides(slideIndex);

// Вперед/назад элементы управления
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Элементы управления миниатюрами изображений
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

 //========== slider 2 ==================
let slideIndex2 = 1;
showSlides2(slideIndex2);

// Вперед/назад элементы управления
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Элементы управления миниатюрами изображений
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let j;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (j = 0; j < slides2.length; j++) {
      slides2[j].style.display = "none";
  }
  for (j = 0; j < dots2.length; j++) {
      dots2[j].className = dots2[j].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
}
//========== slider 3 ==================
let slideIndex3 = 1;
showSlides3(slideIndex3);

// Вперед/назад элементы управления
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Элементы управления миниатюрами изображений
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let k;
  let slides3 = document.getElementsByClassName("mySlides3");
  let dots3 = document.getElementsByClassName("dot3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (k = 0; k < slides3.length; k++) {
      slides3[k].style.display = "none";
  }
  for (k = 0; k < dots3.length; k++) {
      dots3[k].className = dots3[k].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
}
//  ============= hover price at cart ================
  let a = document.querySelector('.main_cart_price_price_2');
  //вешаем на него события
a.onmouseover = function (e) {
    document.querySelector('.main_cart_price_price_2_less').style.display = 'block';
}

a.onmouseout = function (e) {
    document.querySelector('.main_cart_price_price_2_less').style.display = 'none';
}
// ========= button =============

const btns = document.querySelectorAll(".main_cart_button");
    const hoverClass = "main_cart_button_hover",
          hoverClass2 = "main_cart_button_hover2";

    btns.forEach(item => {
          // ========= button hover =============
        item.addEventListener("mouseover", function () {
          this.classList.add(hoverClass);
        });

        item.addEventListener("mouseout", function () {
            this.classList.remove(hoverClass);
        });
          // ========= button click =============
          item.addEventListener("click", function () {
            this.classList.add(hoverClass2);
            this.innerHTML =  `
                    <div class="main_cart_button_buy">
                       <div class="main_cart_button_buy_calc">
                           <div class="main_cart_button_buy_calc_add"><img src="" alt=""></div>
                           <div class="main_cart_button_buy_calc_sum">1шт.</div>
                           <div class="main_cart_button_buy_calc_delete"><img src="" alt=""></div>
                       </div>
                       <div class="main_cart_button_buy_button">Оформить</div>
                    </div>
  
          `;  

        });
    });

   
 


// const btns = document.querySelectorAll(".main_cart_button");
//     const hoverClass = "main_cart_button_hover";

//     btns.forEach(item => {
//         item.addEventListener("mouseover", function (e) {
//             e.target.classList.add(hoverClass);
//         });

//         item.addEventListener("mouseout", function (e) {
//             e.target.classList.remove(hoverClass);
//         });
//     });