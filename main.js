const nav = document.querySelector("nav")

const navOffset = nav.offsetTop
window.addEventListener("scroll",()=>{
    if (window.pageYOffset >= navOffset) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
})
const burger = nav.querySelector('img')
const list = nav.querySelector('ul')
burger.addEventListener("click",()=>{
    if(list.style.display=="none")
        list.style.display="block";
    else if(list.style.display="block")
        list.style.display="none";
})
list.addEventListener("click",(event)=>{
    if(event.target.tagName=="A")
        list.style.display="none";
})