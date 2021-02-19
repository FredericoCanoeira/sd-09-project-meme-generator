document.querySelector('#gen-meme').addEventListener('click', generateMeme);
const emptyDiv = document.querySelector('#meme-image-container');
const emptyText = document.querySelector('#meme-text');
const textToAdd = document.querySelector('#text-input');

function generateMeme() {
  const uploadedImage = document.querySelector('#meme-image').files[0];
  const image = document.createElement('img');
  emptyText.innerText = textToAdd.value;
  image.src = URL.createObjectURL(uploadedImage);
  emptyDiv.appendChild(image);

}