let mobileBtn = document.querySelector(".header__mobile");
let sideBar = document.querySelector(".header__sidebar");
let closeBtn = document.querySelector(".header__sidebar-logo-closed");
let overlayBar =document.querySelector (".header__overlay")

console.log(overlayBar)

const handleShow = () => {
  sideBar.classList.add("handle__mobile-open");
  overlayBar.classList.add("handle__mobile-open")
};
const handleClose = () => {
  sideBar.classList.remove("handle__mobile-open");
  overlayBar.classList.remove("handle__mobile-open")
};

mobileBtn.addEventListener("click", handleShow);
closeBtn.addEventListener("click", handleClose);


