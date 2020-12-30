const input = document.querySelector('.input');

function setTextMeme() {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = input.value;
}

function setEvent() {
  input.addEventListener('keyup', setTextMeme);
}

setEvent();
