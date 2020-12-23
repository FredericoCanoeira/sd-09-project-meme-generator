function showText() {
  const text = document.querySelector('#text-input');
  const paragraph = document.querySelector('#meme-text');
  paragraph.innerText = text.value;
}

function insertImage() {
  const image = document.querySelector('#meme-image');
  image.src = 'Imagens/cavera.jpg';
}

window.onload = function () {
  const text = document.querySelector('#text-input');
  text.addEventListener('keyup', showText);
  const btnInsertImage = document.querySelector('#meme-insert');
  btnInsertImage.addEventListener('click', insertImage);
  const container = document.querySelector('#meme-image-container');
  const btnFire = document.querySelector('#fire');
  btnFire.addEventListener('click', function () {
    container.className = 'fire';
  });
  const btnWater = document.querySelector('#water');
  btnWater.addEventListener('click', function () {
    container.className = 'water';
  });
  const btnEarth = document.querySelector('#earth');
  btnEarth.addEventListener('click', function () {
    container.className = 'earth';
  });
  const meme1 = document.querySelector('#meme-1');
  meme1.addEventListener('click', function () {
    const image = document.querySelector('#meme-image');
    image.src = 'imgs/meme1.png'
  });
  const meme2 = document.querySelector('#meme-2');
  meme2.addEventListener('click', function () {
    const image = document.querySelector('#meme-image');
    image.src = 'imgs/meme2.png'
  });
  const meme3 = document.querySelector('#meme-3');
  meme3.addEventListener('click', function () {
    const image = document.querySelector('#meme-image');
    image.src = 'imgs/meme3.png'
  });
  const meme4 = document.querySelector('#meme-4');
  meme4.addEventListener('click', function () {
    const image = document.querySelector('#meme-image');
    image.src = 'imgs/meme4.png'
  });
};
