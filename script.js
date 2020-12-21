const input = document.querySelector('#text-input');
const memeContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');

function memePhrase() {
  input.addEventListener('input', function () {
    memeText.innerHTML = input.value;
  });
}
memePhrase();