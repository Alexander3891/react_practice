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
        name: 'Nike',
        img1: 'image/1/114667_1-1024x768.jpg',
        img2: 'image/1/114668_2-1024x768.jpg',
        img3: 'image/1/114669_3-1024x768.jpg',
        img4: 'image/1/114667-1024x768.jpg',
        img5: 'image/1/114668-1024x768.jpg',
        img6: 'image/1/114669-1024x768.jpg',
        price: 150,
    },
    {
        id: 'el2',
        name: 'Puma',
        img1: 'image/2/108964_1-1024x768.jpg',
        img2: 'image/2/112690_2-1024x768.jpg',
        img3: 'image/2/113010_3-1024x768.jpg',
        img4: 'image/2/108964-1024x768.jpg',
        img5: 'image/2/112690-1024x768.jpg',
        img6: 'image/2/113010-1024x768.jpg',
        price: 220,
    },
    {
        id: 'el3',
        name: 'Vans',
        img1: 'image/3/112688_1-1024x768.jpg',
        img2: 'image/3/113024_2-1024x768.jpg',
        img3: 'image/3/113025_3-1024x768.jpg',
        img4: 'image/3/112688-1024x768.jpg',
        img5: 'image/3/113024-1024x768.jpg',
        img6: 'image/3/113025-1024x768.jpg',
        price: 300,
    },
    {
        id: 'el4',
        name: 'Adidas', 
        img1: 'image/4/112686_1-1024x768.jpg',
        img2: 'image/4/113022_2-1024x768.jpg',
        img3: 'image/4/113023_3-1024x768.jpg',
        img4: 'image/4/112686-1024x768.jpg',
        img5: 'image/4/113022-1024x768.jpg',
        img6: 'image/4/113023-1024x768.jpg',
        price: 620,
    },
    {
        id: 'el5',
        name: 'Reebok',
        img1: 'image/5/108967_1-1024x768.jpg',
        img2: 'image/5/112693_2-1024x768.jpg',
        img3: 'image/5/113030_3-1024x768.jpg',
        img4: 'image/5/108967-1024x768.jpg',
        img5: 'image/5/112693-1024x768.jpg',
        img6: 'image/5/113030-1024x768.jpg',
        price: 180,
    },
    {
        id: 'el6',
        name: 'Ecco',
        img1: 'image/6/108971_1-1024x768.jpg',
        img2: 'image/6/112697_2-1024x768.jpg',
        img3: 'image/6/112938_3-1024x768.jpg',
        img4: 'image/6/108971-1024x768.jpg',
        img5: 'image/6/112697-1024x768.jpg',
        img6: 'image/6/112938-1024x768.jpg',
        price: 340,
    },
    
];
let card = '';
  CATALOG.forEach(({id, price, name,img1,img2,img3,img4,img5,img6}) => {
         card += `
            <div class="main_cart">
               <div class="main_cart_slider">
                    <div class="main_cart_slider_foto">
                            <div class="main_cart_slider_foto_container">
                                <div class="main_cart_slider_foto_1">
                                <img src=${img1} alt="">
                                </div>
                            </div>
                            <div class="main_cart_slider_foto_container">
                                <div class="main_cart_slider_foto_1">
                                <img src=${img2} alt="">
                                </div>
                            </div>
                            <div class="main_cart_slider_foto_container">
                                <div class="main_cart_slider_foto_1">
                                <img src=${img3} alt="">
                               </div>
                            </div>
                        </div>
                        <!-- Контейнер слайд-шоу -->
                        <div class="slideshow-container">
                            <div class="mySlides fade">
                                <div class="main_row4_slaider_row">
                                    <div class="main_row4_slaider_collum1">
                                <img src=${img4} alt="">
                                    
                                    </div>
                                </div>
                            </div>
                            <div class="mySlides fade">
                                <div class="main_row4_slaider_row">
                                    <div class="main_row4_slaider_collum12">
                                <img src=${img5} alt="">
                                    
                                    </div>
                                </div>
                            </div>
                            <div class="mySlides fade">
                                <div class="main_row4_slaider_row">
                                    <div class="main_row4_slaider_collum13">
                                <img src=${img6} alt="">
                                    
                                    </div>
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
                        <div class="main_cart_price_title">${name}</div>
                        <div class="main_cart_price_price">${price}</div>
                    </div>
                    <button class="main_cart_button">Начать оформление</button>
                    </div>
                </div>
             `;

            });


                 // =========================== mainCards =============================
document.querySelector('.main_container').innerHTML = card;
const mainCards = document.querySelectorAll('.main_cart');
// console.log(mainCards);
mainCards.forEach(function (item,index) {
            // item.innerHTML = card;
            //  console.log(item);                   

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
    btns.forEach((item) => {
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
            //  console.log(arrSumProducts);
             const cardsPrices = document.querySelectorAll(".main_cart_price_price");
             console.log(cardsPrices[index]);

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



