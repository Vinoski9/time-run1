const sideMenu = document.querySelector("aside");
const Menu = document.querySelector("menu");
const closeBtn = document.querySelector("closee");

menu.addEventListener('click', () => {
	sideMenu.style.display = 'block';
})

closee.addEventListener('click',() => {
	sideMenu.style.display ='none'
})