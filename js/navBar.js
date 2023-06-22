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

document.addEventListener("DOMContentLoaded", function(){
   document.querySelectorAll('.modal-btn').forEach(item => {
      item.addEventListener('click', event => {

         let elemName = event.target.className;
         let elem = event.target;
         if (elemName.includes('bi')){
            elem = event.target.parentElement;
         } else if(elemName.includes('label')){
            elem = event.target.parentElement.parentElement;
         }

         elem.setAttribute(
            'aria-expanded', 
            elem.getAttribute('aria-expanded') === 'true'? 'false': 'true'
         );
         elem.classList.toggle('open');

         // Open modal
         let modal = document.querySelector(elem.getAttribute('data-target'));
         modal.classList.toggle('show');
         modal.classList.toggle('hide');
      });
   });
});
