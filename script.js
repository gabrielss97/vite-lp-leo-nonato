// Selecione os elementos necessários
const menuBtn = document.querySelector(".nav__menu img"); // o botão do menu hambúrguer
const sideMenu = document.querySelector(".side-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const bannerTopMenu = document.querySelector(".banner-top-menu");
const discoveryMenuEL = document.querySelector("#discoveryMenu");
const ultimateMenuEL = document.querySelector("#ultimateMenu");
const privateMenuEL = document.querySelector("#privateMenu");

// Função para mostrar o menu lateral
function openMenu() {
  sideMenu.style.left = "0";
  menuOverlay.style.display = "block";
  bannerTopMenu.style.display = "flex";
}

// Função para ocultar o menu lateral
function closeMenu() {
  sideMenu.style.left = "-203px";
  menuOverlay.style.display = "none";
  bannerTopMenu.style.display = "none";
}

// Adicione eventos de clique aos elementos
menuBtn.addEventListener("click", openMenu);
menuOverlay.addEventListener("click", closeMenu);
discoveryMenuEL.addEventListener("click", closeMenu);
ultimateMenuEL.addEventListener("click", closeMenu);
privateMenuEL.addEventListener("click", closeMenu);
