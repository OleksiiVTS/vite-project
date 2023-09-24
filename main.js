import "./style.css";
import { click } from "./click";

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
div.addEventListener("click", setupCounter);

function setupCounter(element) {
  const clickDiv = element.target;
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
