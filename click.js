const div = document.querySelector("#app");

export function click(element) {
  if (div.classList.contains("gap")) {
    if (element.classList.contains("up")) {
      element.classList.toggle("up");
      div.classList.toggle("gap");
      return;
    }
    const toggleClass = document.querySelector(".up");
    toggleClass.classList.toggle("up");
    div.classList.toggle("gap");
  }
  element.classList.toggle("up");
  div.classList.toggle("gap");
}
