const input = document.querySelector('#text-input');
input.setAttribute('maxLength', 60);
const memeContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeImages = document.querySelector('#meme-image');
const inputFile = document.querySelector('#meme-insert');

function memePhrase() {
  input.addEventListener('input', function () {
    memeText.innerHTML = input.value;
  });
}
memePhrase();

// SOURCE:
// https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
function memeImage() {
  inputFile.addEventListener('change', function (event)  {
    const image = document.createElement('img');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.className = 'meme-image';
    memeImages.appendChild(image);
    image.addEventListener('load', function () {
      URL.revokeObjectURL(image.src);
    });
  });
}
memeImage();
