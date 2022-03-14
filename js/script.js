console.log("sanity check");

// when list icon is clicked, toggle display class of nav (Observable on narrow window widths)
const listIcon = document.body.querySelector(".list-icon");
listIcon.addEventListener("click", () => {
  affectDisplayNav("toggle");
});

// when nav link is clicked, remove display class from nav (Observable on narrow window widths)
const navLinks = document.body.querySelectorAll(".nav-links a");
navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    affectDisplayNav("remove");
  })
);

// functions
function affectDisplayNav(classListMethod) {
  const nav = document.body.querySelector("nav");
  nav.classList[classListMethod]("display");
}
