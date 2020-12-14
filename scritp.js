const textInput = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');
const imageContainer = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');

function memetext() {
  textInput.addEventListener('keyup', function () {
    textMeme.innerHTML = textInput.value;
  });
}

const loadFile = function (event) {
  imageContainer.src = URL.createObjectURL(event.target.files[0]);
};

// chamadas
memetext();