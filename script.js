window.onload = function () {};

const getMemeImgContainer = document.getElementById('meme-image-container');
getMemeImgContainer.style.width = '450px';
getMemeImgContainer.style.height = '450px';
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
memeText.style.position = 'absolute';
memeText.style.border = '0';
memeText.style.padding = '0';
memeText.style.margin = '10px';
memeText.style.textAlign = 'center';
memeText.style.top = '90%';

getMemeImgContainer.style.position = 'relative';
