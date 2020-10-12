import "./styles/nav.css";

const checkbox = document.querySelector("input[type=checkbox]");
const ul = document.querySelector(".menu ul");

checkbox.addEventListener("change", () => {
  checkbox.classList.toggle("checked");
});
ul.addEventListener("click", (e) => {
  checkbox.classList.toggle("checked");
});
