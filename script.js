// Selectors | Seletores

const textInput = document.querySelector('#text-input');
const fileInput = document.querySelector('#meme-insert');
const textImage = document.querySelector('#meme-text');

const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');

// Functions | Funções

function insertTextImage() {
  const text = textInput.value;
  textImage.innerText = text;
}

function insertImage(event) {
  const img = document.querySelector('#meme-image');
  img.src = URL.createObjectURL(event.target.files[0]);
}

function fireBorder() {
  const imgContainer = document.querySelector('#meme-image-container');
  imgContainer.style.border = '3px dashed red';
}

function waterBorder() {
  const imgContainer = document.querySelector('#meme-image-container');
  imgContainer.style.border = '5px double blue';
}

function earthBorder() {
  const imgContainer = document.querySelector('#meme-image-container');
  imgContainer.style.border = '6px groove green';
}

function imageSelect() {
  const img = document.querySelector('#meme-image');
  const imgs = document.querySelectorAll('.img-ready');
  for (let index = 0; index < imgs.length; index += 1) {
    imgs[index].addEventListener('click', function (event) {
      document.querySelector('#meme-insert').value = '';
      img.src = event.target.src;
    });
  }
}
imageSelect();

// Event Listeners | Eventos

textInput.addEventListener('input', insertTextImage);
fileInput.addEventListener('change', insertImage);
btnFire.addEventListener('click', fireBorder);
btnWater.addEventListener('click', waterBorder);
btnEarth.addEventListener('click', earthBorder);
