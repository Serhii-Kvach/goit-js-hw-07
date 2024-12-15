const nameInput = document.querySelector("input");
const nameOutput = document.querySelector("span");

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();

  if (name !== "") {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
