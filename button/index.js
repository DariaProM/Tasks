const button = document.querySelector(".button");
const container = document.querySelector(".container");

function removeButton() {
  button.style.opacity = "0";

  setTimeout(() => {
    const cont = container.getBoundingClientRect();

    const widthButton = button.offsetWidth;
    const heightButton = button.offsetHeight;
    let maxX = cont.width - widthButton;
    let maxY = cont.height - heightButton;

    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
    button.style.opacity = "1";
  }, 1000);
}

button.addEventListener("click", () => {
  removeButton();
});
