let toplink = document.getElementsByClassName("top_link_sub");

function handleClick(event) {
  console.log(event.target);

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (let i = 0; i < toplink.length; i++) {
      toplink[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (let i = 0; i < toplink.length; i++) {
    toplink[i].addEventListener("click", handleClick);
  }
}

init();

function openClose1() {
  if (document.getElementById("answer-1").style.display === "block") {
    document.getElementById("answer-1").style.display = "none";
  } else {
    document.getElementById("answer-1").style.display = "block";
  }
}

function openClose2() {
  if (document.getElementById("answer-2").style.display === "block") {
    document.getElementById("answer-2").style.display = "none";
  } else {
    document.getElementById("answer-2").style.display = "block";
  }
}

function openClose3() {
  if (document.getElementById("answer-3").style.display === "block") {
    document.getElementById("answer-3").style.display = "none";
  } else {
    document.getElementById("answer-3").style.display = "block";
  }
}

function openClose4() {
  if (document.getElementById("answer-4").style.display === "block") {
    document.getElementById("answer-4").style.display = "none";
  } else {
    document.getElementById("answer-4").style.display = "block";
  }
}

function openClose5() {
  if (document.getElementById("answer-5").style.display === "block") {
    document.getElementById("answer-5").style.display = "none";
  } else {
    document.getElementById("answer-5").style.display = "block";
  }
}

function openClose6() {
  if (document.getElementById("answer-6").style.display === "block") {
    document.getElementById("answer-6").style.display = "none";
  } else {
    document.getElementById("answer-6").style.display = "block";
  }
}

function openClose7() {
  if (document.getElementById("answer-7").style.display === "block") {
    document.getElementById("answer-7").style.display = "none";
  } else {
    document.getElementById("answer-7").style.display = "block";
  }
}
