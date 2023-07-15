function menuButtonAnimation() {
  let button = document.getElementsByClassName("mobile-menu-button");
  button[0].classList.toggle("active");
}

function closeMenu() {
  let button = document.getElementsByClassName("mobile-menu-button");
  button[0].classList.toggle("collapsed");
  button[0].classList.toggle("active");

  let menu = document.getElementsByClassName("navbar-collapse");
  menu[0].classList.toggle("show");
}

function resizeTimeline() {
  let deloitteModal = document.getElementById("deloitteModal");
  let timelineCard = document.getElementsByClassName("side-menu_container")[0];
  const modalsDiv = document.getElementsByClassName("side-menu_modals")[0];
  
  if (window.innerWidth > 767) {
    timelineCard.style.minHeight = deloitteModal.offsetHeight + "px";
    if (modalsDiv.childElementCount == 0){
      makeSideMenu();
    }
  } else {
    timelineCard.style.minHeight = "auto";
    makeAcccordion();
  }
}

function visibilityMenu(item) {
  item.setAttribute(
    "aria-expanded",
    item.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
  item.toggleAttribute("disabled");

  let details = document.getElementById(item.getAttribute("data-bs-target"));
  details.classList.toggle("hide");
  Array.from(details.getElementsByClassName("fade-in")).forEach((text) => {
    text.classList.toggle("show");
  });
}

function makeSideMenu() {
  const modalsDiv = document.getElementsByClassName("side-menu_modals")[0];

  document.querySelectorAll(".side-menu_btn").forEach((item) => {    
    let modal = document.getElementById(item.getAttribute("data-bs-target"));
    modalsDiv.appendChild(modal);

    if(modal.id === "deloitteModal"){
      visibilityMenu(item);
      item.disabled= true;
    }
  });
}

function menuFunctionality(){
  let elem = event.target;

  Array.from(elem.parentNode.children).forEach((item) => {
    if (item.getAttribute("aria-expanded") === "true") {
      visibilityMenu(item);
    }
  });

  visibilityMenu(elem);
}

function makeAcccordion() {
  document.querySelectorAll(".side-menu_btn").forEach((item) => {
    let modal = document.getElementById(item.getAttribute("data-bs-target"));
    item.after(modal);

    if (item.getAttribute("aria-expanded") === "true") {
      item.setAttribute("aria-expanded", "false");
      item.disabled = false;
      modal.classList.toggle("hide");

      Array.from(modal.getElementsByClassName("fade-in")).forEach((text) => {
        text.classList.toggle("show");
      });
    }
  });
}

function visibilityAccordion(elem) {
  elem.setAttribute("aria-expanded",
    elem.getAttribute("aria-expanded") === "true" ? "false" : "true");

  let details = document.getElementById(elem.getAttribute("data-bs-target"));
  details.classList.toggle("hide");
  Array.from(details.getElementsByClassName("fade-in")).forEach((text) => {
    text.classList.toggle("show");
  });
}

function accordionFunctionality() {   
  let elem = event.target;
  let activeElem;
  let found = false;

  for (let i = 0; i < document.querySelectorAll(".side-menu_btn").length; i++) {
    let item = document.querySelectorAll(".side-menu_btn")[i];

    if (item.getAttribute("aria-expanded") === "true") {
      activeElem = item;

      // Check if target is the same as active
      if (activeElem != null && elem.getAttribute("data-bs-target") === activeElem.getAttribute("data-bs-target")) {
        visibilityAccordion(elem);
        found = true;
        break;
      } else {
        visibilityAccordion(elem);
        visibilityAccordion(activeElem);
        found = true;
        break;
      }
    }
  }

  // No other active element
  if (!found) {
    visibilityAccordion(elem);
  }
}


document.addEventListener("DOMContentLoaded", function () {
  resizeTimeline();

  window.onresize = function () {
    resizeTimeline();
  };

  document.querySelectorAll(".side-menu_btn").forEach((item) => {
    item.addEventListener("click", (event) => {
      if (window.innerWidth > 767){
        menuFunctionality();
      } else {
        accordionFunctionality();
      }
    });
  });
});
