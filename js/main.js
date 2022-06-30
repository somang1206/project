"use strict";





/* main_cont_news slide영역 */


const bannerBox = document.querySelector('.new_list');
const bannerItem = document.querySelectorAll('.new_list li');

const prevBtn = document.getElementById("btn_prev");
const nextBtn = document.getElementById("btn_next");

const size = bannerItem[0].clientWidth;

let counter = 0;

let banner = setInterval(()=>{
    if(counter < bannerItem.length - 1) {
        counter++;
        bannerBox.style.transform = "translateX("+ -size * counter + "px)"
    }
},4000);

nextBtn.addEventListener('click', ()=>{
    clearInterval(banner);
    banner = setInterval(()=>{
        if(counter < bannerItem.length -1) {
            counter++;
            bannerBox.style.transform = "translateX(" + -size * counter + "px)"
        }else if (counter === bannerItem.length -1){
            counter = 0;
            bannerBox.style.transform = "translateX("+ -size * counter +"px)"
        }
    },4000);

    if (counter < bannerItem.length -1){
        counter++;
        bannerBox.style.transform = "translateX("+ -size * counter + "px)";
    }else if(counter === bannerItem.length -1){
        counter = 0;
        bannerBox.style.transform = "translateX("+ -size * counter + "px)";
    }
});


prevBtn.addEventListener('click', ()=>{
    clearInterval(banner);
    banner = setInterval(()=>{
        if(counter < bannerItem.length -1){
            counter++;
            bannerBox.style.transform = "translateX("+ -size * counter + "px)";
        }else if(counter === bannerItem.length -1){
            counter = 0;
            bannerBox.style.transform = "translateX("+ -size * counter + "px)";
        }
    },4000);
    if (counter > 0) {
        counter--;
        bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    }else{
        counter = bannerItem.length -1;
        bannerBox.style.transform = "translateX(" + -size * counter + "px)";
    }
});








/* main_cont_news2 slide영역 */


const moveBox = document.querySelector('.new_list2');
const move = document.querySelectorAll('.new_list2_li');

const prevButton = document.getElementById("btn_prev2");
const nextButton = document.getElementById("btn_next2");

const wide = move[0].clientWidth;

let number = 0;

let sliding = setInterval(()=>{
    if(number < move.length -1){
        number++;
        moveBox.style.transform = "translate(" + -wide * number + "px)"
    }
},4000)


nextButton.addEventListener('click', ()=>{
    clearInterval(sliding);
    sliding = setInterval(()=>{
        if(number < move.length -1) {
            number++;
            moveBox.style.transform = "translateX(" + -wide * number + "px)"
        }else if (number === move.length -1){
            number = 0;
            moveBox.style.transform = "translateX("+ -wide * number +"px)"
        }
    },4000);

    if (number < move.length -1){
        number++;
        moveBox.style.transform = "translateX("+ -wide * number + "px)";
    }else if(counter === bannerItem.length -1){
        number = 0;
        moveBox.style.transform = "translateX("+ -wide * number + "px)";
    }
});


prevButton.addEventListener('click', ()=>{
    clearInterval(sliding);
    sliding = setInterval(()=>{
        if(number < move.length -1){
            number++;
            moveBox.style.transform = "translateX("+ -wide * number + "px)";
        }else if(number === move.length -1){
            number = 0;
            moveBox.style.transform = "translateX("+ -wide * number + "px)";
        }
    },4000);
    if (number > 0) {
        number--;
        moveBox.style.transform = "translateX(" + -wide * number + "px)";
    }else{
        number = move.length -1;
        moveBox.style.transform = "translateX(" + -wide * number + "px)";
    }
});




/* new_list_txt영역 */

const newsUl = document.querySelectorAll(".new_list");
const newsList = document.querySelectorAll(".new_list_li");
const hideTxt = document.querySelectorAll(".new_list_txt");


    

    for(let i=0; i < newsUl.length; i++){
            newsUl[i].addEventListener('mouseover', function(e){
                if (e.target.classList.contains("on")){
                    e.target.classList.remove("on");
                }else{
                    e.target.classList.add("on");
                }
            });
        
    }

    for(let i=0; i < newsUl.length; i++){
            newsUl[i].addEventListener("mouseleave", function(e){
                if(e.target.classList.contains("on")){
                    e.target.classList.remove("on");
                }else{
                    e.target.classList.add("on");
                }
            });
        
    }

    

/* new_list2_txt영역 */
    

const newUl = document.querySelectorAll(".new_list2");
const newList = document.querySelectorAll(".new_list2_li");
const hidTxt = document.querySelectorAll(".new_list2_txt");




    for(let i=0; i < newUl.length; i++){
        newUl[i].addEventListener('mouseover', function(e){
                if (e.target.classList.contains("on")){
                    e.target.classList.remove("on");
                }else{
                    e.target.classList.add("on");
                }
            });
        
    }

    for(let i=0; i < newUl.length; i++){
        newUl[i].addEventListener("mouseleave", function(e){
                if(e.target.classList.contains("on")){
                    e.target.classList.remove("on");
                }else{
                    e.target.classList.add("on");
                }
            });
        
    }
        






/* news_list영역 */

const dome = document.querySelector(".domestic");
const abroad = document.querySelector(".abroad");

const mainFirst = document.querySelector(".main_cont_news_inner");
const mainSecond = document.querySelector(".main_cont_news_inner2");

const btnPrev = document.getElementById("btn_prev2");
const btnNext = document.getElementById("btn_next2");

dome.addEventListener("click", ()=>{
   
    mainFirst.style.height = "320px";
    mainSecond.style.height = "0px";
    btnPrev.style.display = "none";
    btnNext.style.display = "none";
});


abroad.addEventListener("click", ()=>{
   
    mainSecond.style.height = "320px";
    mainFirst.style.height = "0px";
    btnPrev.style.display = "block";
    btnNext.style.display = "block";
    
});





/* dropdown영역 */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }



/* promo_area영역 */


const slider = document.querySelector(".promo_slide");
const slides = document.querySelectorAll(".promo_slide > li");

const width = slides[0].clientWidth;

let count = 0;

let slideAll = setInterval(()=>{
    if(count < slides.length -1 ){
        count++;
        slider.style.transform = "translateX("+ -width * count + "px)"
    }else if (count === slides.length -1){
        count = 0;
        slider.style.transform = "translateX("+ -width * count + "px)"
    }
},3000);




/* popup영역 */


const pop = document.querySelector(".popup");

pop.addEventListener("click", ()=>{
    pop.style.display = "none";
});



/* payment_special영역 */

const look = document.querySelector(".look");
const looks = document.querySelector(".look2");

const special = document.querySelector(".pay_spe_list");
const specials = document.querySelector(".pay_spe_list2");


look.addEventListener("click", (e)=>{
    if(e.target.innerText === "국내항공 전용혜택 보기 ▶"){
        e.target.innerText = "해외항공 전용혜택 보기 ▶";
        special.style.height = "0px";
        specials.style.height = "123px";
    }else{
        e.target.innerText = "국내항공 전용혜택 보기 ▶"
        specials.style.height = "0px";
        special.style.height = "123px";
    }
})





/* query_btn영역 */

const queryBtn = document.querySelector(".query_btn");
const queryBody = document.querySelector(".main_cont_list_query");

queryBtn.addEventListener("click", ()=>{
    if(queryBody.classList.contains("query")){
        queryBody.classList.remove("query");
    }else{
        queryBody.classList.add("query");
    }
});
queryBody.addEventListener("mouseleave", ()=>{
    if(queryBody.classList.contains("query")){
        queryBody.classList.remove("query");
    }else{
        queryBody.classList.add("query");
    }
});