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
};
