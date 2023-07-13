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

function changeModalVisibility(item) {
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

document.addEventListener("DOMContentLoaded", function () {
  let timelineCard = document.getElementsByClassName("side-menu_container")[0];
  timelineCard.style.minHeight = timelineCard.offsetHeight + "px";

  document.querySelectorAll(".side-menu_btn").forEach((item) => {
    item.addEventListener("click", (event) => {
      let elem = event.target;

      Array.from(elem.parentNode.children).forEach((item) => {
        if (item.getAttribute("aria-expanded") === "true") {
          changeModalVisibility(item);
        }
      });

      changeModalVisibility(elem);
    });
  });
});

// document.querySelectorAll('.carouselCard').forEach(item => {
//    item.addEventListener('click', event =>{
//       let elemName = event.target.className;
//       let elem = event.target;

//       if (!elemName.includes('carouselCard')){
//          elem = event.target.parentElement;
//       }

//       console.log(elem);
//       console.log(elem.querySelector('button'));
//       let activeButton = elem.getElementsByTagName('button')[0];
//       if (activeButton.disabled){
//          activeButton.disabled = false;
//       }
//    })
// });
