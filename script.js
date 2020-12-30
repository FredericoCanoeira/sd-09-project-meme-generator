window.onload = function () {
  let textInput = document.querySelector('#text-input');
  textInput.addEventListener('keyup', insertText);
}

function insertText() {
  let textInput = document.querySelector('#text-input');
  let memeText = document.querySelector('#meme-text');
  memeText.innerText = textInput.value;
}
// limite máximo de caracteres 60: An element with position: absolute; is positioned relative t