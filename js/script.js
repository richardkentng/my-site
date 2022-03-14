console.log("sanity check");

const nav = document.body.querySelector("nav");

// when list icon is clicked, toggle display class of nav (Observable on narrow window widths)
const listIcon = nav.querySelector(".list-icon");
listIcon.addEventListener("click", () => {
  affectDisplayNav("toggle");
});

// when nav link is clicked, remove display class from nav (Observable on narrow window widths)
const navLinks = nav.querySelectorAll(".nav-links a");
navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    affectDisplayNav("remove");
  })
);

// functions
function affectDisplayNav(classListMethod) {
  nav.classList[classListMethod]("display");
}
