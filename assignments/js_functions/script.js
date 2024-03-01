const button = document.querySelector(".change");

button.addEventListener("click", (event) => {
  button.classList.remove("change");
  button.classList.add("pressed");
});