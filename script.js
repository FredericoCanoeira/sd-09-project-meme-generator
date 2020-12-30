function insertText() {
  const textInput = document.querySelector('#text-input');
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = textInput.value;
}

window.onload = function () {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('keyup', insertText);
};

// limite máximo de caracteres 60: An element with position: absolute; is positioned relative t
