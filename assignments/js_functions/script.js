const button = document.querySelector(".change");
console.log(button);

button.addEventListener("click", (event) => {
  button.classList.remove("change");
  button.classList.add("pressed");
});