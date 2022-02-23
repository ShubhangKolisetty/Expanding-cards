const btn = document.querySelectorAll(".panel");

console.log(btn);

function removeActiveClasses() {
  btn.forEach((el) => {
    el.classList.remove("active");
  });
}

btn.forEach((el) => {
  el.addEventListener("click", () => {
    removeActiveClasses();
    el.classList.add("active");
  });
});
