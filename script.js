const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

function addMemeText() {
  textInput.addEventListener('keyup', function () {
    memeText.innerText = textInput.value;
  });
}
addMemeText();