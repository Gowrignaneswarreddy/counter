let counterDisplay = document.getElementById("counter");
let incrementButton = document.getElementById("increment");
let decrementButton = document.getElementById("decrement");
let resetButton = document.getElementById("reset");
let count = 0;
const updateDisplay = () => {
    counterDisplay.textContent = count;
};
incrementButton.addEventListener("click", () => {
    count++;
    updateDisplay();
});
decrementButton.addEventListener("click", () => {
    count--;
    updateDisplay();
});
resetButton.addEventListener("click", () => {
    count = 0;
    updateDisplay();
});
updateDisplay();
