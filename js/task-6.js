function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  destroyBoxes();

  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const boxCreate = document.createElement("div");
    boxCreate.style.width = `${30 + i * 10}px`;
    boxCreate.style.height = `${30 + i * 10}px`;
    boxCreate.style.backgroundColor = getRandomHexColor();
    boxes.push(boxCreate);
  }
  boxContainer.append(...boxes);
}
createBtn.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Кількість елементів має бути від 1 до 100");
  }
});

function destroyBoxes() {
  boxes.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
