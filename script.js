const inputText = document.getElementById('text-input');
const inputImg = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImg = document.getElementById('meme-image');

function memeTextUpdate() {
  const text = inputText.value;
  memeText.innerText = text;
}

inputText.addEventListener('keyup', memeTextUpdate);

function memeImageUpdate() {
  memeImg.src = URL.createObjectURL(inputImg.files[0]);
}

inputImg.addEventListener('change', memeImageUpdate);
