const input = document.querySelector('.input');
const memeText = document.querySelector('#meme-text');
const insertImage = document.querySelector('#meme-insert');
const meme = document.querySelector('#meme-image');
const buttons = document.querySelector('.buttons');
const memeContainer = document.querySelector('#meme-image-container');

function setTextMeme() {
  memeText.innerText = input.value;
}

function changeMeme(event) {
  meme.src = URL.createObjectURL(event.target.files[0]);
}

function borderClick(event) {
  if (event.target.className !== 'buttons') {
    memeContainer.className = '';
    memeContainer.classList.add('mainImage')
    if(event.target.id === 'fire'){
      memeContainer.classList.add('fire');
    }
    if(event.target.id === 'water'){
      memeContainer.classList.add('water');
    }
    if(event.target.id === 'earth'){
      memeContainer.classList.add('earth');
    }
  }
}

function setEvent() {
  input.addEventListener('keyup', setTextMeme);
  insertImage.addEventListener('change', changeMeme);
  buttons.addEventListener('click', borderClick);
}

setEvent();
