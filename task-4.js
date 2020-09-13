const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
);

const valueRef = document.querySelector("#value");
let counterValue = +valueRef.textContent;

decrementBtnRef.addEventListener("click", decrement);
incrementBtnRef.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  return (valueRef.textContent = counterValue);
}

function increment() {
  counterValue += 1;
  return (valueRef.textContent = counterValue);
}
