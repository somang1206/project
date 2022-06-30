const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn2 = document.querySelector("#prevBtn2");
const nextBtn2 = document.querySelector("#nextBtn2");
const slidebox = document.querySelector("#hotelKoreaVm");
const items = document.querySelectorAll(".hotelKoreaV");
const slidebox2 = document.querySelector("#hotelGlobalVm");
const size = items[0].clientWidth;

let counter=0;

prevBtn.addEventListener("click", ()=>{
    if (counter > 0) {
        counter--;
        slidebox.style.transform = "translateX(0px)";
        nextBtn.style.display="block";
    }
});
nextBtn.addEventListener("click", ()=>{
    if (counter < 1) {
        counter++;
        slidebox.style.transform = "translateX(" + -size * 6 + "px)";
        nextBtn.style.display="none";
    }
});
prevBtn2.addEventListener("click", ()=>{
    if (counter > 0) {
        counter--;
        slidebox2.style.transform = "translateX(0px)";
        nextBtn2.style.display="block";
    }
});
nextBtn2.addEventListener("click", ()=>{
    if (counter < 1) {
        counter++;
        slidebox2.style.transform = "translateX(" + -size * 6 + "px)";
        nextBtn2.style.display="none";
    }
});


