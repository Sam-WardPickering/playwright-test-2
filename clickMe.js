let count = 0;
const button = document.getElementById("clickButton");
const counter = document.getElementById("counter");

button.addEventListener("click", incrementCount);

function incrementCount() {
    counter.textContent = ++count;
}