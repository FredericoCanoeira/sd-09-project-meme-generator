window.onload = function () {
  setInputEvent();
}

function setInputEvent() {
  const input = document.querySelector('#text-input');
  input.addEventListener('input', setText);
}

function setText(event) {
  const inputValue = event.target.value;
  const text = document.querySelector('#meme-text');
  text.innerText = inputValue;
}