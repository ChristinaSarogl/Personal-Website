function menuButtonAnimation(){document.getElementsByClassName("mobile-menu-button")[0].classList.toggle("active")}function closeMenu(){let e=document.getElementsByClassName("mobile-menu-button");e[0].classList.toggle("collapsed"),e[0].classList.toggle("active");document.getElementsByClassName("navbar-collapse")[0].classList.toggle("show")}function resizeTimeline(){let e=document.getElementById("ucyModal"),t=document.getElementsByClassName("side-menu_container")[0],i=document.getElementsByClassName("side-menu_modals")[0];window.innerWidth>767?(t.style.minHeight=e.offsetHeight+"px",0==i.childElementCount&&makeSideMenu()):(t.style.minHeight="auto",makeAcccordion())}function visibilityMenu(e){e.setAttribute("aria-expanded","true"===e.getAttribute("aria-expanded")?"false":"true"),e.toggleAttribute("disabled");let t=document.getElementById(e.getAttribute("data-bs-target"));t.classList.toggle("hide"),Array.from(t.getElementsByClassName("fade-in")).forEach(e=>{e.classList.toggle("show")})}function makeSideMenu(){let e=document.getElementsByClassName("side-menu_modals")[0];document.querySelectorAll(".side-menu_btn").forEach(t=>{let i=document.getElementById(t.getAttribute("data-bs-target"));e.appendChild(i),"ucyModal"===i.id&&(visibilityMenu(t),t.disabled=!0)})}function menuFunctionality(){let e=event.target;Array.from(e.parentNode.children).forEach(e=>{"true"===e.getAttribute("aria-expanded")&&visibilityMenu(e)}),visibilityMenu(e)}function makeAcccordion(){document.querySelectorAll(".side-menu_btn").forEach(e=>{let t=document.getElementById(e.getAttribute("data-bs-target"));e.after(t),"true"===e.getAttribute("aria-expanded")&&(e.setAttribute("aria-expanded","false"),e.disabled=!1,t.classList.toggle("hide"),Array.from(t.getElementsByClassName("fade-in")).forEach(e=>{e.classList.toggle("show")}))})}function visibilityAccordion(e){e.setAttribute("aria-expanded","true"===e.getAttribute("aria-expanded")?"false":"true");let t=document.getElementById(e.getAttribute("data-bs-target"));t.classList.toggle("hide"),Array.from(t.getElementsByClassName("fade-in")).forEach(e=>{e.classList.toggle("show")})}function accordionFunctionality(){let e=event.target,t,i=!1;for(let n=0;n<document.querySelectorAll(".side-menu_btn").length;n++){let a=document.querySelectorAll(".side-menu_btn")[n];if("true"===a.getAttribute("aria-expanded")){if(null!=(t=a)&&e.getAttribute("data-bs-target")===t.getAttribute("data-bs-target")){visibilityAccordion(e),i=!0;break}visibilityAccordion(e),visibilityAccordion(t),i=!0;break}}i||visibilityAccordion(e)}document.addEventListener("DOMContentLoaded",function(){resizeTimeline(),window.onresize=function(){resizeTimeline()},document.querySelectorAll(".side-menu_btn").forEach(e=>{e.addEventListener("click",e=>{window.innerWidth>767?menuFunctionality():accordionFunctionality()})})});