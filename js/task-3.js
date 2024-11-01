const inputName = document.getElementById(`name-input`);
const outputName = document.getElementById(`name-output`);

inputName.addEventListener(`input`, () => {
  const name = inputName.value.trim();

  if (name !== ``) {
    outputName.textContent = `Hello, ${name}!`;
  } else {
    outputName.textContent = `Anonymous!`;
  }
});
