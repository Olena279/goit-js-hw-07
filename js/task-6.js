function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById(`.boxes`);
  boxesContainer.innerHTML = ``;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement(`div`);
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(div);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById(`boxes`);
  boxesContainer.innerHTML = ``;
}

const controls = document.getElementById(`controls`);
controls.addEventListener(`click`, event => {
  const input = document.querySelector(`input`);
  const amount = Number(input.value);

  if (event.target.dataset.create) {
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ``;
    }
  } else if (event.target.dataset.destroy) {
    destroyBoxes();
  }
});
