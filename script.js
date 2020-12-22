const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeInsert = document.querySelector('#meme-insert');
const btnFire = document.querySelector('#fire');
const btnWater = document.querySelector('#water');
const btnEarth = document.querySelector('#earth');
const memeImageContainer = document.querySelector('#meme-image-container');
const memeImage = document.querySelector('#meme-image');
const preMadeMeme = document.querySelector('.pre-made-meme');

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
  memeImage.src = URL.createObjectURL(event.target.files[0]);
  memeImage.onload = function () {
    URL.revokeObjectURL(memeImage.src);
  };
});

btnFire.addEventListener('click', () => {
  return (memeImageContainer.style.border !== '3px dashed red') ? memeImageContainer.style.border = '3px dashed red' : memeImageContainer.style.border = '1px solid black';
});

btnWater.addEventListener('click', () => {
  return (memeImageContainer.style.border !== '5px double blue') ? memeImageContainer.style.border = '5px double blue' : memeImageContainer.style.border = '1px solid black';
});

btnEarth.addEventListener('click', () => {
  return (memeImageContainer.style.border !== '6px groove green') ? memeImageContainer.style.border = '6px groove green' : memeImageContainer.style.border = '1px solid black';
});

preMadeMeme.addEventListener('click', (event) => {
  for (let index = 1; index <= 4; index += 1) {
    if (event.target.id === `meme-${index}`) {
      memeImage.src = `imgs/meme-${[index]}.png`;
    }
  }
});
