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
//  ============= hover price at cart ================
  let a = document.querySelector('.main_cart_price_price_2');
  //вешаем на него события
a.onmouseover = function (e) {
    document.querySelector('.main_cart_price_price_2_less').style.display = 'block';
}

a.onmouseout = function (e) {
    document.querySelector('.main_cart_price_price_2_less').style.display = 'none';
}
