const div = document.querySelector("#app");
const newDiv = document.createElement("div");

for (let i = 0; i < 100; i++) {
  const div = `
    <div class="click">
      <h2 class="div">div"${i}"</h2>
    </div>
  `;
  newDiv.insertAdjacentHTML("beforeend", div);
}

newDiv.classList.add("flex");
div.append(newDiv);
div.addEventListener("click", divUp);

function divUp(element) {
  const clickDiv = element.target;
  // console.dir(element.target.attributes.class.value);
  if (element.target.id === "app") {
    return;
  }
  if (element.target.nodeName !== "DIV") {
    element.target.parentNode.classList.toggle("is");
    click(element.target.parentNode);
    return;
  }
  click(clickDiv);
}

function click(element) {
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
