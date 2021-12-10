function qs(selector) {
  const element = document.querySelector(selector);
  if (element === null) {
    console.warn(`querySelector failed to find matches for \"${selector}\"`);
  }
  return element;
}
function qsa(selector) {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) {
    console.warn(`querySelectorAll failed to find matches for \"${selector}\"`);
  }
  return elements;
}
