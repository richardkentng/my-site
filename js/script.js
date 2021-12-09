console.log("sanity check");

const googleLink = document.querySelector(".google-link");
googleLink.style.backgroundColor = "gold";

function blinkColor(whichColor, selector, colorA, colorB, interval) {
  const myEle = document.querySelector(selector);
  if (validateParams() === false) return;

  setInterval(() => {
    const getBgColor = (ele) => ele.style[whichColor];
    const setBgColor = (ele, color) => (ele.style[whichColor] = color);
    //if background color is color a, set to color b
    //else if background color is color b, set to color a
    //else (since background color is neither color a nor b) set to color a
    if (getBgColor(myEle) === colorA) setBgColor(myEle, colorB);
    else if (getBgColor(myEle) === colorB) setBgColor(myEle, colorA);
    else setBgColor(myEle, colorA);
  }, interval);

  function validateParams() {
    //validate 'whichColor'
    switch (whichColor) {
      case "a":
        whichColor = "color";
        break;
      case "b":
        whichColor = "backgroundColor";
        break;
      default:
        console.error('first paramater must either be "a" or "b"');
        return false;
    }

    //validate 'selector'
    if (myEle === null) {
      console.error("invalid query selector");
      return false;
    }

    //validate 'interval'
    if (typeof interval !== "number") {
      console.error("You must enter a number for the interval");
      return false;
    }
    //give warning if interval is less than one hundred or greater than 1000
    if (interval < 100 || interval > 1000) {
      console.warn("Recommended milliseconds is between 100 - 1000");
    }
  }
}

// blinkColor("b", ".google-link", "gold", "green", 500);
