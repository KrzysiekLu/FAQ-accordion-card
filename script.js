const btns = document.querySelectorAll(".question_button-up");
const mobileLogoImg = document.querySelector(".card_logo-img");
const mobileBgImg = document.querySelector(".card_logo-bg");
const desktopLogo = document.querySelector(".card_logo-desktop");
const desktopLogoBox = document.querySelector(".card_logo-desktop-box");

const showAnswer = function (e) {
  e.stopPropagation();
  btn = e.currentTarget;
  btn.parentNode.nextElementSibling.style.display = "block";
  btn.parentNode.style.fontWeight = "900";
  btn.classList.toggle("active");
  console.log(btn.classList);
};

const hideAnswer = function (e) {
  e.stopPropagation();
  btn = e.currentTarget;
  btn.parentNode.nextElementSibling.style.display = "none";
  btn.parentNode.style.fontWeight = "400";
  btn.classList.toggle("active");
};

const init = function (e) {
  if (!e.currentTarget.classList.contains("active")) {
    showAnswer(e);
    e.target.style.transform = "rotate(180deg)";
  } else if (e.currentTarget.classList.contains("active")) {
    hideAnswer(e);
    e.target.style.transform = "rotate(360deg)";
  }
};
btns.forEach((btn) => btn.addEventListener("click", init));

const changeImge = function () {
  if (window.innerWidth > 800) {
    mobileLogoImg.classList.add("hide");
    mobileBgImg.classList.add("hide");
    desktopLogo.classList.remove("hide");
    desktopLogoBox.classList.remove("hide");
  } else {
    mobileLogoImg.classList.remove("hide");
    mobileBgImg.classList.remove("hide");
    desktopLogo.classList.add("hide");
    desktopLogoBox.classList.add("hide");
  }
};
changeImge();
addEventListener("resize", changeImge);
