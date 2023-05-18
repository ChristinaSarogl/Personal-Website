function menuButtonAnimation(){
   let button = document.getElementsByClassName("mobile-menu-button");
   button[0].classList.toggle("active");
}

function closeMenu(){
   let button = document.getElementsByClassName("mobile-menu-button");
   button[0].classList.toggle("collapsed");
   button[0].classList.toggle("active");

   let menu = document.getElementsByClassName("navbar-collapse");
   menu[0].classList.toggle("show");
}