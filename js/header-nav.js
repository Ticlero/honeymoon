const navEle = document.querySelector(".icon__nav i");

navEle.addEventListener("click", (event) => {
  const body_overlay_Ele = document.querySelector(".overlay");
  body_overlay_Ele.classList.toggle("body-overlay");

  const nav = document.querySelector(".nav-list");
  nav.classList.toggle("show-nav");

  if (nav.classList.contains("show-nav")) {
    nav.style.display = "block";
    nav.childNodes[1].style.animation =
      "show-menu-lists 0.5s ease-in-out forwards";
    nav.style.animation = "dropdown 0.5s ease-in-out forwards";
  } else {
    nav.childNodes[1].style.animation =
      "hide-menu-lists 0.5s ease-in-out forwards";
    nav.style.animation = "dropup 0.5s ease-in-out forwards";
  }
});
