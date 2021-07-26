"use strict";


let totalPrice = 0,
arrSumProducts = [],
SumProductsHeader = 0,
SumPricesHeader = [0],
PrisesCards = [],
sumArr = 0;

const CATALOG = [
    {
        id: 'el1',
        name: 'Кеды мужские Welfare 332674411/BLUE/40',
        img: 'image/1/114667-1024x768',
        price: 150,
    },
    {
        id: 'el2',
        name: 'Кеды мужские Welfare 340654211/BRN/40',
        img: 'image/2/112690-1024x768.jpg',
        price: 220,
    },
    {
        id: 'el3',
        name: 'Кеды мужские Welfare 340661211/BLUE/40',
        img: 'image/3/112688-1024x768.jpg',
        price: 300,
    },
    {
        id: 'el4',
        name: 'Кеды мужские Welfare 340674111/BEIGE/40', 
        img: 'image/4/112686-1024x768.jpg',
        price: 620,
    },
    {
        id: 'el5',
        name: 'Кеды мужские Welfare 340694411/D.BLUE/40',
        img: 'image/5/112693-1024x768.jpg',
        price: 180,
    },
    {
        id: 'el6',
        name: 'Кеды мужские Welfare Pulse 340594211/RED/40',
        img: 'image/6/112697-1024x768.jpg',
        price: 340,
    },
    
];
//   CATALOG.forEach(({id, price}) => {
        //    console.log(id,price);
// });

                 // =========================== mainCards =============================

const mainCards = document.querySelectorAll('.main_cart');
  CATALOG.forEach(({id, price}) => {

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
                        <div class="main_cart_price_price">${price}</div>
                    </div>
                    <button class="main_cart_button">Начать оформление</button>
                    </div>
    `;
           console.log(id,price);

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
                           <div class="main_cart_button_buy_calc_spinner">
                         <img src="/DreamJob/image/spinner.svg" style="display: block; margin: 2px 0px 0px 42px;">
                         </div>
                           <div class="main_cart_button_buy_calc_delete"><img src="" alt=""></div>
                       </div>
                       <div class="main_cart_button_buy_button">Оформить</div>
                    </div>
                 `;

            
                 item.querySelector('.main_cart_button_buy_calc_add').onclick = () => {
                  onClickAdd()
                  onClickSpiner()
                   timeSpiner().then(function (done) {
                  spinner = done;
                     item.querySelector('.main_cart_button_buy_calc_spinner').style.display = spinner;
                  });
                     timeSum().then(function (done) {
                  sum = done;
                     item.querySelector('.main_cart_button_buy_calc_sum').style.display = sum;
                  });

                }
                item.querySelector('.main_cart_button_buy_calc_spinner').style.display = spinner;
                item.querySelector('.main_cart_button_buy_calc_sum').style.display = sum;

                item.querySelector(".main_cart_button_buy_calc_sum").innerHTML = clicks;
                
                item.querySelector('.main_cart_button_buy_calc_delete').onclick = () => {
                    onClickDelete();
                  onClickSpiner()
                   timeSpiner().then(function (done) {
                  spinner = done;
                     item.querySelector('.main_cart_button_buy_calc_spinner').style.display = spinner;
                  });
                     timeSum().then(function (done) {
                  sum = done;
                     item.querySelector('.main_cart_button_buy_calc_sum').style.display = sum;
                  });
                 }
                item.querySelector('.main_cart_button_buy_button').onclick = () => {
                  onClickBuyButtob()
                }
                document.querySelector(".basket_quantity").innerHTML = SumProductsHeader;

          });
        let spinner = 'none',
            sum = 'block',
            clicks = 0;

        function onClickSpiner() {
            spinner = 'block',
            sum = 'none';
        }

         function timeSpiner() {
         let promise = new Promise(function(resolve, reject) {
         window.setTimeout(function() {
          resolve('none');
          }, 300);
         });
         return promise;
        }

        function timeSum() {
        let promise = new Promise(function(resolve, reject) {
        window.setTimeout(function() {
         resolve('block');
        }, 300);
        });
        return promise;
        }
        function onClickAdd() {
            
            clicks += 1;
            return clicks;
        };
             
        function onClickDelete() {
                  if (clicks == 0) {
                  return clicks = 0;
                 } else clicks--;
        };


        let arrProducts = [],
            arrSumProduct;
               function onClickBuyButtob() {
                      arrProducts.push(clicks);
                      arrSumProduct = arrProducts[arrProducts.length-1] ;
                     clicks = 0;
                     CreateProducts();
                   }
                function CreateProducts() {
                    arrSumProducts.push(arrSumProduct);
                   CreateProductsHeader();
             }
             console.log(arrSumProducts);
             const cardsPrices = document.querySelectorAll(".main_cart_price_price");

            function CreateProductsHeader() {
                SumProductsHeader = arrSumProducts.reduce(function (a, b) {
                      return a + b;
                });
              
            if(arrSumProducts != []){
                  sumArr += Number(cardsPrices[index].innerText) * arrSumProduct;
                  document.querySelector(".basket_sum").innerHTML =`
                  ${sumArr} <span>р</span>
                  ` ;
            }
            else {
                    sumArr = PrisesCards.reduce(function(r,a,i){return r+a*k[i]},0);
                    document.querySelector(".basket_sum").innerHTML =`
                    ${sumArr} <span>р</span>
                    `; 
            }
        }

     });

   
            
  
});

});


