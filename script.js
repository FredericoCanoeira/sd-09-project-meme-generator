const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const btnFire = document.querySelector('#fire')
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const memeImageContainer = document.querySelector('#meme-image-container');
const buttons = document.querySelectorAll('button');

textInput.addEventListener('input', () => {
  memeText.innerText = textInput.value.toUpperCase();
});
textInput.addEventListener('keypress', (tecla) => {
  if (tecla.keyCode === 13) {
    textInput.value = '';
    textInput.focus();
  }
});

memeInsert.addEventListener('change', (event) => {
  const memeImage = document.querySelector('#meme-image');
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
});

btnFire.addEventListener('click', () => {
  (memeImageContainer.style.border !== '3px dashed red') ? memeImageContainer.style.border = '3px dashed red' : memeImageContainer.style.border = '1px solid black';
})

btnWater.addEventListener('click', () => {
  (memeImageContainer.style.border !== '5px double blue') ? memeImageContainer.style.border = '5px double blue' : memeImageContainer.style.border = '1px solid black';
})

btnEarth.addEventListener('click', () => {
  (memeImageContainer.style.border !== '6px groove green') ? memeImageContainer.style.border = '6px groove green' : memeImageContainer.style.border = '1px solid black';
})
