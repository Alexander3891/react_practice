"use strict";

// const cards = document.querySelectorAll(".card");
// const cardsPrices = document.querySelectorAll(".card__price");
// const cardsAddBtns = document.querySelectorAll(".card__add-btn");
// const cardsRemoveBtns = document.querySelectorAll(".card__remove-btn");
// const itemsCounter = document.querySelector(".cart__counter");
// const priceCounter = document.querySelector(".cart__price");
// let totalPrice = 0;

// cardsAddBtns.forEach((item, index) => {
//  item.addEventListener("click", () => {
//      addToCart(index);
//   });
// }); 

// cardsRemoveBtns.forEach((item, index) => {
//  item.addEventListener("click", () => {
//      removeFromCart(index);
//   });
// });

// function addToCart (index) {
//  totalPrice += Number(cardsPrices[index].innerText);
//  priceCounter.innerText = totalPrice;
  
//   itemsCounter.innerText++;
// }

// function removeFromCart (index) {
//  if (itemsCounter.innerText === "0") return;
//  totalPrice -= Number(cardsPrices[index].innerText);
//   priceCounter.innerText = totalPrice;
  
//   itemsCounter.innerText--;
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
let totalPrice = 0,
arrSumProducts = [],
SumProductsHeader = 0,
SumPricesHeader = [0];
let PrisesCards = [],
    sumArr = 0;



                 // =========================== mainCards =============================

const mainCards = document.querySelectorAll('.main_cart');
mainCards.forEach(function (item) {
    item.innerHTML = `
                    <div class="main_cart_slider">
                    <div class="main_cart_slider_foto">
                            <div class="main_cart_slider_foto_container">
                                <div class="main_cart_slider_foto_1">
                                <img src="/DreamJob/image/slider_kedy2.png" alt="">
                                </div>
                            </div>
                            <div class="main_cart_slider_foto_container">
                                <div class="main_cart_slider_foto_1">
                                <img src="/DreamJob/image/slider_obuv_1.png" alt="">
                                </div>
                            </div>
                            <div class="main_cart_slider_foto_container">
                                <div class="main_cart_slider_foto_1">
                                <img src="/DreamJob/image/slider_muzhskiye-tufli.png" alt="">
                               </div>
                            </div>
                        </div>
                        <!-- Контейнер слайд-шоу -->
                        <div class="slideshow-container">
                            <div class="mySlides fade">
                                <div class="main_row4_slaider_row">
                                    <div class="main_row4_slaider_collum1"></div>
                                </div>
                            </div>
                            <div class="mySlides fade">
                                <div class="main_row4_slaider_row">
                                    <div class="main_row4_slaider_collum12"></div>
                                </div>
                            </div>
                            <div class="mySlides fade">
                                <div class="main_row4_slaider_row">
                                    <div class="main_row4_slaider_collum13"></div>
                                </div>
                            </div>
                    
                            <!-- Точки/круги -->
                            <div style="text-align:center">
                                <span class="dot"></span>
                                <span class="dot"></span>
                                <span class="dot"></span>
                            </div>
                        </div>
                    
                    </div>
                     <div class="main_cart_price_price_2_less">2145</div> 

                     <div class="main_cart_price">
                        <div class="main_cart_price_title">Nice</div>
                        <div class="main_cart_price_price">485</div>
                    </div>
                    <button class="main_cart_button">Начать оформление</button>
                    </div>
    `;

                   //========== mainCards- slider ==================
     
    let slideIndex = 1;
    showSlides(slideIndex);
     // Вперед/назад элементы управления
     
    // Элементы управления миниатюрами изображений
       function showSlides(n) {
     let i;
     let slides = item.getElementsByClassName("mySlides");
     let dots = item.getElementsByClassName("dot");
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
    item.querySelectorAll('.main_cart_slider_foto_1').forEach((item, index) => {
	item.addEventListener("click", () => {
        showSlides(slideIndex = index + 1);
         });
    });
        
    item.querySelectorAll('.dot').forEach((item, index) => {
	item.addEventListener("click", () => {
      showSlides(slideIndex = index+1); 
         });
    });
    
                  //  ============= mainCards - hover price at cart ================
    
  let a = item.querySelector('.main_cart_price_price');
  //вешаем на него события
  a.onmouseover = function (e) {
    item.querySelector('.main_cart_price_price_2_less').style.display = 'block';
}

  a.onmouseout = function (e) {
    item.querySelector('.main_cart_price_price_2_less').style.display = 'none';
}

                       // ========= mainCards button =============

const btns = item.querySelectorAll(".main_cart_button");
    const hoverClass = "main_cart_button_hover",
          hoverClass2 = "main_cart_button_hover2";
     
    btns.forEach((item,index) => {
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
                           <div class="main_cart_button_buy_calc_sum">0</div>
                           <div class="main_cart_button_buy_calc_delete"><img src="" alt=""></div>
                       </div>
                       <div class="main_cart_button_buy_button">Оформить</div>
                    </div>
                 `;
                 item.querySelector('.main_cart_button_buy_calc_add').onclick = () => {
                    onClick1()
                     }
                item.querySelector(".main_cart_button_buy_calc_sum").innerHTML = clicks;
                
                item.querySelector('.main_cart_button_buy_calc_delete').onclick = () => {
                    onClick2();
                }
                item.querySelector('.main_cart_button_buy_button').onclick = () => {
                  onClick3()
                }
              document.querySelector(".basket_quantity").innerHTML = SumProductsHeader;

                 
              
                  
        //     const cardsAddBtns = item.querySelectorAll(".main_cart_button_buy_calc_add");
        //     const cardsRemoveBtns = item.querySelectorAll(".main_cart_button_buy_calc_delete");
        //     const itemsCounter = document.querySelector(".basket_quantity");
        //     const priceCounter = document.querySelector(".basket_sum");

        //    console.log(priceCounter.innerText);
        //    console.log(cardsPrices[1].innerText);
        //    console.log(itemsCounter.innerText);
        //    console.log(totalPrice);

           
           
        //    cardsAddBtns.forEach((item, index) => {
	    //        item.addEventListener("click", () => {
  	    //        addToCart(index);
        //       });
        //    }); 
        //     cardsRemoveBtns.forEach((item, index) => {
        //  	item.addEventListener("click", () => {
  	    //     removeFromCart(index);

        //         });
        //     });

        //     function addToCart(index) {
        //         totalPrice += Number(cardsPrices[index].innerText);      
        //         priceCounter.innerText = totalPrice;
        //         itemsCounter.innerText++;

        //     }
       
        //     function removeFromCart (index) {
        //         if (itemsCounter.innerText === "0") return;
        //     totalPrice -= Number(cardsPrices[index].innerText);
        //     priceCounter.innerText = totalPrice;
        //     itemsCounter.innerText--;
        //     }


    });
    let clicks = 0;
                function onClick1() {
                    clicks += 1;
                    return clicks;
                };
                function onClick2() {
                  if (clicks == 0) {
                  return clicks = 0;
                 } else clicks--;
                      
                  item.querySelector("main_cart_button_buy_calc_sum").innerHTML = clicks;
                };
                let arrProducts = [],
                arrSumProduct;
               function onClick3() {
                      arrProducts.push(clicks);
                      arrSumProduct = arrProducts[arrProducts.length-1] ;
                     clicks = 0;
                     onClick4();
                     // console.log(arrProducts);
                    // console.log(arrSumProduct);
                    
                }
                function onClick4() {
                    arrSumProducts.push(arrSumProduct);
                   onClick5();
              // ========================
             }
             console.log(arrSumProducts);
             const cardsPrices = document.querySelectorAll(".main_cart_price_price");

            function onClick5() {
                SumProductsHeader = arrSumProducts.reduce(function (a, b) {
                      return a + b;
                  });
                //   console.log(SumProductsHeader);
                //   console.log(PrisesCards);
                //   console.log(SumPricesHeader);

                  if(arrSumProducts != []){

                    sumArr += Number(cardsPrices[index].innerText) * arrSumProduct;

                    document.querySelector(".basket_sum").innerHTML =`
                  ${sumArr} <span>р</span>
                  ` ;
                  } else{
                    sumArr = PrisesCards.reduce(function(r,a,i){return r+a*k[i]},0);
                    document.querySelector(".basket_sum").innerHTML =`
                    ${sumArr} <span>р</span>
                    `; 
                  }
  
            }

     });
            
  
});


