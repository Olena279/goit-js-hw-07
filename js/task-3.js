const inputName = document.getElementById(`name-input`);
const outputName = document.getElementById(`name-output`);

inputName.addEventListener(`input`, () => {
  const name = inputName.value.trim();
  if (name !== ``) {
  } else {
    outputName.textContent = `Hello, Anonymous!`;
  }
});
