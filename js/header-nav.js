const navEle = document.querySelector(".icon__nav i");
const overlayEle = document.querySelector(".overlay");
const body_overlay_Ele = document.querySelector(".overlay");
const nav = document.querySelector(".nav-list");

navEle.addEventListener("click", (event) => {
  body_overlay_Ele.classList.toggle("body-overlay");
  nav.classList.toggle("show-nav");

  if (nav.classList.contains("show-nav")) {
    nav.style.display = "block";
    nav.childNodes[1].style.animation =
      "show-menu-lists 0.5s ease-in-out forwards";
    nav.childNodes[1].style.display = "flex";
    nav.style.animation = "dropdown 0.5s ease-in-out forwards";
  } else {
    nav.childNodes[1].style.animation =
      "hide-menu-lists 0.5s ease-in-out forwards";
    nav.childNodes[1].style.display = "none";
    nav.style.animation = "dropup 0.5s ease-in-out forwards";
  }
});

overlayEle.addEventListener("click", (e) => {
  if (body_overlay_Ele.classList.contains("body-overlay")) {
    body_overlay_Ele.classList.toggle("body-overlay");
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
  }
});
