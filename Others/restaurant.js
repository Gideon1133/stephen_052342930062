function checkScreenWidth(){
     const element = document.querySelector(".header,.responsive");
     if(window.innerWidth<=600){
        element.classList.add("responsive");
        element.classList.remove("header");
     }else{
        element.classList.add("header");
        element.classList.remove("responsive");
     }
}

window.addEventListener("resize",checkScreenWidth);
checkScreenWidth();

function rst(){
   window.open("Others/request.html");

}
function sub(){
   window.close();
}