const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImg = document.querySelector('#meme-image');
const inputFile = document.querySelector('#meme-insert');
const memeContainer = document.querySelector('#meme-image-container');
const getImg = document.querySelector('.meme-image');
const memeImgExample = document.querySelector('#meme-example');
memeContainer.style.border = '1px solid black';

function changeTextMeme() {
  inputText.addEventListener('input', () => (memeText.innerHTML = inputText.value));
}

function changeImgMeme(){
    inputFile.addEventListener('change', (event) => (memeImg.src = URL.createObjectURL(event.target.files[0])))
}

function backgroundImgMeme(urlImage) {
    memeContainer.style.backgroundImg = `url(${urlImage})`;
}

function fireButton(){
    const fire = document.querySelector('#fire');
    fire.addEventListener('click', () => (memeContainer.style.border = '3px dashed red'))
}

function waterButton(){
    const water = document.querySelector('#water');
    water.addEventListener('click', () => (memeContainer.style.border = '5px double blue'))
}

function earthButton(){
    const earth = document.querySelector('#earth');
    earth.addEventListener('click', () => (memeContainer.style.border = '3px groove green'))
}



changeTextMeme();
changeImgMeme();
backgroundImgMeme(getImg);
fireButton();
waterButton();
earthButton();