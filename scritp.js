const textInput = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');
const image = document.getElementById('meme-image');
const imageContainer = document.getElementById('meme-image-container');

function memetext() {
  textInput.addEventListener('keyup', function () {
    textMeme.innerHTML = textInput.value;
  });
}

function loadFile(event) {
  image.src = URL.createObjectURL(event.target.files[0]);
};

function borderFire() {
  imageContainer.style.border = '3px dashed red';
}

function borderWater() {
  imageContainer.style.border = '5px double blue';
}

function borderEarth() {
  imageContainer.style.border = '6px groove green';
}

function addImageContainer() {
  image.src = event.target.src
}

// chamadas
memetext();
