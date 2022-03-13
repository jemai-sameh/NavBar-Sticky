const body =document.querySelector("body");
const navbar=document.querySelector(".navbar");
const menu=document.querySelector(".menu-list");
const menuBtn=document.querySelector(".menu-btn");
const cancelBtn=document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
    menu.classList.add("show");
    menuBtn.classList.add("hide");
   body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("show");
   body.classList.remove("disabledScroll");
    menuBtn.classList.remove("hide");
}
window.onscroll=()=>{
    this.scrollY>20?navbar.classList.add("sticky"):navbar.classList.remove("sticky");
}