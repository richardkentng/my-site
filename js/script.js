console.log("sanity check");

const timePeriodMs = {
  year: 31536000000,
  month: 2592000000,
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  second: 1000,
};

const dateElements = qsa(".date-range");
dateElements.forEach((dateElement) => {
  let [startDate, endDate] = dateElement.dataset.dateRange.split(" ");
  startDate = new Date(startDate);
  endDate = new Date(endDate);

  const dateMonthToMM = (num) => {
    num++;
    return num.toString().length === 1 ? "0" + num : num;
  };

  const startMonth = dateMonthToMM(startDate.getMonth());
  const endMonth = dateMonthToMM(endDate.getMonth());
  const startMmYyyy = `${startMonth}/${startDate.getFullYear()}`;
  const endMmYyyy = `${endMonth}/${endDate.getFullYear()}`;
  const dateRange = `${startMmYyyy} - ${endMmYyyy}`;
  // console.log({ dateRange });

  dateElement.innerHTML = `${dateRange} <br> <p class="font-gray">${getYearsAndMonths(
    startDate,
    endDate
  )}</p>`;

  //get elapsed time:  years, months
  function getYearsAndMonths(startDate, endDate) {
    //ensure arguments are date objects
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    const elapsedMs = endDate.getTime() - startDate.getTime();
    const roundedYears = Math.floor(elapsedMs / timePeriodMs.year);
    const leftOverMs = elapsedMs % timePeriodMs.year;
    const roundedMonths = Math.floor(leftOverMs / timePeriodMs.month);

    const addUnitKeyword = (num, unit) => {
      //if number is 1 then return concatenation of num + unit , else return concatenation of number + unit  + s
      if (num === 1) {
        return `${num} ${unit}`;
      } else {
        return `${num} ${unit}s`;
      }
    };
    const yearString = addUnitKeyword(roundedYears, "year");
    const monthString = addUnitKeyword(roundedMonths, "month");
    //if roundedYears and rounded MOnths are both euqal to 0, return display string of
    //'less than one month'
    if (roundedYears === 0 && roundedMonths === 0) return "less than one month";
    //if roundedYears is at least 1, add the yearString to display string
    displayString = roundedYears >= 1 ? yearString : "";
    //if roundedMonths is at least 1, add a symbol and monthString to display string
    displayString =
      roundedMonths >= 1 ? `${displayString}+${monthString}` : displayString;
    //if the symbol is the first character of the display string, replace it with empty string, otherwise repliace it with ", "
    if (displayString[0] === "+")
      displayString = displayString.replace("+", "");
    else displayString = displayString.replace("+", ", ");
    return displayString;
  }
});

function timePeriodToMs(quanity, unit) {
  if (typeof quanity !== "number") {
    console.error("The first parameter must be a number");
    return;
  }

  switch (unit) {
    case "year":
      return quanity * 31536000000;
    case "month":
      return quanity * 2592000000;
    case "day":
      return quanity * 86400000;
    case "hour":
      return quanity * 3600000;
    case "minute":
      return quanity * 60000;
    case "second":
      return quanity * 1000;
    default:
      console.error(`Invalid time-period unit type: "${unit}"`);
      return;
  }
}

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
