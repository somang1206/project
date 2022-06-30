const menu = document.querySelector("#reservation_menu_1");
const hideMenu = document.querySelector(".HideMenu_1");
menu.addEventListener("click", () => {
  if (hideMenu.classList.contains("on")) {
    hideMenu.classList.remove("on");
  } else {
    hideMenu.classList.add("on");
  }
});

const menu2 = document.querySelector("#reservation_menu_2");
const hideMenu2 = document.querySelector(".HideMenu_2");
menu2.addEventListener("click", () => {
  if (hideMenu2.classList.contains("on")) {
    hideMenu2.classList.remove("on");
  } else {
    hideMenu2.classList.add("on");
  }
});

const bannerBox = document.querySelector("#reservation_first_banner_item "); // 배너박스 가져옴
const bannerItem = document.querySelectorAll(".reservation_banner_imgitem"); // ul에있는 li를 배열로 가져옴

const prevBtn = document.getElementById("reservation_preBtn"); //왼쪽 버튼 가져옴
const nextBtn = document.getElementById("reservation_ntxBtn"); //오른쪽 버튼 가져옴

const size = bannerItem[0].clientWidth; //이건 banneritem의 첫번째 사진의 길이를 가져온다.라는뜻

let counter = 0;

nextBtn.addEventListener("click", () => {
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter == bannerItem.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});
prevBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
});

setInterval(() => {
  if (counter < bannerItem.length - 1) {
    counter++;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  } else if (counter == bannerItem.length - 1) {
    counter = 0;
    bannerBox.style.transform = "translateX(" + -size * counter + "px)";
  }
}, 8000);
