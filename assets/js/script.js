
const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load",function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});