console.log("sanity check");

//on mobile devices, when the list icon is clicked, toggle display of navbar:
const nav = document.body.querySelector("nav");
nav.addEventListener("click", toggleDisplayNav);

function toggleDisplayNav() {
  nav.classList.toggle("display");
}
