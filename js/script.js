console.log("sanity check");

const nav = document.body.querySelector("nav");

// when hamburger (icon with 3 lines) is clicked, toggle display class of nav (Observable on narrow window widths)
const hamburger = nav.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  navDisplayClass("toggle");
});

// when nav link is clicked, remove display class from nav (Observable on narrow window widths)
const navLinks = nav.querySelectorAll(".nav-links a");
navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    navDisplayClass("remove");
  })
);

// functions

function navDisplayClass(classListMethod) {
  nav.classList[classListMethod]("display");
  chooseHamburgerIcon(nav.classList.contains("display"));

  //local functions
  function chooseHamburgerIcon(navIsDisplayed) {
    //clear hamburger's icon classes
    ["bi-list", "bi-x"].forEach((biClass) =>
      hamburger.classList.remove(biClass)
    );
    //add icon to hamburger
    const biClass = navIsDisplayed ? "bi-x" : "bi-list";
    hamburger.classList.add(biClass);
  }
}
