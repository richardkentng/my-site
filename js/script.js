console.log("sanity check");

const nav = document.body.querySelector("nav");

// when hamburger (icon with 3 lines) is clicked, toggle display class of nav (Observable on narrow window widths)
const hamburger = nav.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  handleNavVisuals("toggle");
});

// when nav link or whiteOverlay is clicked, remove display class from nav (Observable on narrow window widths)
const whiteOverlay = document.body.querySelector(".white-overlay");
const navLinksEtc = [...nav.querySelectorAll(".nav-links a"), whiteOverlay];
navLinksEtc.forEach((navLinkEtc) =>
  navLinkEtc.addEventListener("click", () => {
    handleNavVisuals("remove");
  })
);

// functions

function handleNavVisuals(method) {
  nav.classList[method]("display");

  const isNavDisplayed = nav.classList.contains("display");
  chooseHamburgerIcon(isNavDisplayed);
  showHideWhiteOverlay(isNavDisplayed);

  //local functions

  function chooseHamburgerIcon(isNavShowing) {
    //clear hamburger's icon classes
    ["bi-list", "bi-x"].forEach((biClass) =>
      hamburger.classList.remove(biClass)
    );
    //add icon to hamburger
    const biClass = isNavShowing ? "bi-x" : "bi-list";
    hamburger.classList.add(biClass);
  }

  function showHideWhiteOverlay(isNavShowing) {
    whiteOverlay.style.display = isNavShowing ? "block" : "none";
  }
}
