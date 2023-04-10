const hamgurger=document.querySelector(".header .na-bar .nav-list .hamgurger");
const mobile_menu=document.querySelector(".header .na-bar .nav-list ul");
const menu_item=document.querySelectorAll(".header .na-bar .nav-list ul li a");
const header=document.querySelector(".header.container")

hamgurger.addEventListener("click",()=>{
    hamgurger.classList.toggle("active");
    mobile_menu.classList.toggle("active")
});
document.addEventListener("scroll",()=>{
    let scroll_position=window.scrollY;
    if (scroll_position>250)
    {header.style.backgroundColor="#29323c";}
    else
    {header.style.backgroundColor="transparent";}
});

menu_item.forEach((item)=>{
    item.addEventListener("click",()=>{
        hamgurger.classList.toggle("active");
        mobile_menu.classList.toggle("active");
    });
});