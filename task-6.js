const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("focus", onFocus);
inputRef.addEventListener("blur", isValid);

function onFocus() {
  inputRef.classList.remove("invalid", "valid");
}
function isValid(event) {
  let inputLength = event.target.value.length;
  let dataLength = +inputRef.getAttribute("data-length");
  if (inputLength === dataLength) {
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.add("invalid");
  }
}
