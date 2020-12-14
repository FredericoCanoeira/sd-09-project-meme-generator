const textInput = document.getElementById('text-input')
const textMeme = document.getElementById('meme-text');

function memetext() {
  textInput.addEventListener('keyup', function () {
    textMeme.innerHTML = textInput.value;
  });
}

// chamadas
memetext();
