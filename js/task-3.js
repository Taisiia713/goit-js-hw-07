const nameInput = document.getElementById("name-input");
const span = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const trimmedValue = nameInput.value.trim();
  if (trimmedValue === "") {
    span.textContent = "Anonymius";
  } else {
    span.textContent = trimmedValue;
  }
});
