const openmodal = document.querySelector("#open");
const closemodal =document.querySelector("#close");


const fade = document.querySelector("#fade");
const modal = document.querySelector("#modal");


const toggle=()=>{
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}


[openmodal,closemodal,fade].forEach((el)=>{

    el.addEventListener("click",()=> toggle());

});

