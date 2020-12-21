const input = document.querySelector('#text-input');
input.setAttribute('maxLength', 60);
const memeContainer = document.querySelector('#meme-image-container');
const memeText = document.querySelector('#meme-text');
const memeImages = document.querySelector('#meme-image');
const inputFile = document.querySelector('#meme-insert');
let images = document.querySelector('.meme-image');

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
    memeImages.src = URL.createObjectURL(event.target.files[0]);
  });
}
memeImage();

function backgroundImage() {
  let getImage = document.querySelector('.meme-image').src;
    let img = `url(${getImage})`;
    memeContainer.style.backgroundImage = img;
}
backgroundImage();