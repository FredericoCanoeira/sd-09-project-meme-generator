const input = document.querySelector('#text-input');
const inputImage = document.querySelector('#meme-insert');

function showText() {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = input.value;
}
input.addEventListener('input', showText);

function uploadImage() {
  const memeImage = document.querySelector('#meme-image');
  memeImage.src = inputImage.value;
  console.log(memeImage.src);
}
inputImage.addEventListener('input', uploadImage);
