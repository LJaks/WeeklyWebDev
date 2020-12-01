const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
let inContent = false;

function toggleOpen() {
  if (!inContent) {
    this.classList.toggle("open");
  } //adds class "open" if it's not there, remove it if it is
}
