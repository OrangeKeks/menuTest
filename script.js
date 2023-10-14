let burger = document.getElementById("burger");
let menu = document.getElementById("menu");

burger.addEventListener("click", activeMenu);

let isActive = false;

function activeMenu()
{
isActive = !isActive;
if (isActive)
{
    menu.classList.add("menu-active");
    
}
else
{
    menu.classList.remove("menu-active");
}
}