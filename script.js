window.onload = function () {};

const getMainTag = document.getElementById('inputs-container');
const createTextInput = document.createElement('input');
createTextInput.setAttribute('type', 'text');
createTextInput.id = 'text-input';
createTextInput.className = 'input-text';
getMainTag.appendChild(createTextInput);

const createImgInput = document.createElement('input');
createImgInput.setAttribute('type', 'file');
createImgInput.id = 'meme-insert';
createImgInput.className = 'input-img';
getMainTag.appendChild(createImgInput);

const getMemeImgContainer = document.getElementById('meme-image-container');
getMemeImgContainer.style.width = '452px';
getMemeImgContainer.style.height = '452px';
getMemeImgContainer.style.border = '1px solid black';
getMemeImgContainer.style.backgroundColor = 'white';

const createMemeImg = document.createElement('img');
createMemeImg.id = 'meme-image';
getMemeImgContainer.appendChild(createMemeImg);
createMemeImg.style.width = '450px';
createMemeImg.style.height = '450px';
const getMemeImg = document.querySelector('#meme-image');

const memeText = document.createElement('p');
memeText.id = 'meme-text';
getMemeImgContainer.appendChild(memeText);
