const counterValue = document.getElementById("value");
let currentValue = 0;

document.querySelectorAll("[data-action]").forEach(button => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "decrement") {
      currentValue -= 1;
    } else if (button.dataset.action === "increment") {
      currentValue += 1;
    }

    counterValue.textContent = currentValue;
  });
});