// Inserindo texto no container
function insertTextEvent() {
  const inputBox = document.querySelector('#text-input');
  inputBox.addEventListener('change', function () {
    const container = document.querySelector('#meme-image-container');
    if (document.querySelector('#meme-text')) {
      const oldText = document.querySelector('#meme-text');
      container.removeChild(oldText);
    }
    const newText = document.createElement('p');
    newText.innerText = inputBox.value;
    newText.id = 'meme-text';
    newText.className = 'text-style';
    container.appendChild(newText);
  });
}

insertTextEvent();

// Inserindo imagem no container
function insertImageEvent() {
  const inputImage = document.querySelector('#meme-insert');
  inputImage.addEventListener('change', function () {
    const container = document.querySelector('#meme-image-container');
    if (document.querySelector('#meme-image')) {
      const oldImage = document.querySelector('#meme-image');
      container.removeChild(oldImage);
    }
    const newImage = document.createElement('img');
    newImage.id = 'meme-image';
    newImage.className = 'meme-image-style';
    newImage.src = URL.createObjectURL(inputImage.files[0]);
    newImage.alt = 'Meme image';
    container.appendChild(newImage);
  });
}

insertImageEvent();

// Evento do botão do fogo
const fireBtn = document.querySelector('#fire');
fireBtn.addEventListener('click', function () {
  const container = document.querySelector('#meme-image-container');
  if (container.className.includes('fire-border')) {
    container.className = container.className.replace('fire-border', 'black-border');
  } else {
    container.className = container.className.replace('black-border', 'fire-border');
  }
});

// Evento do botão da água
const waterBtn = document.querySelector('#water');
waterBtn.addEventListener('click', function () {
  const container = document.querySelector('#meme-image-container');
  if (container.className.includes('water-border')) {
    container.className = container.className.replace('water-border', 'black-border');
  } else {
    container.className = container.className.replace('black-border', 'water-border');
  }
});

// Evento do botão da terra
const earthBtn = document.querySelector('#earth');
earthBtn.addEventListener('click', function () {
  const container = document.querySelector('#meme-image-container');
  if (container.className.includes('earth-border')) {
    container.className = container.className.replace('earth-border', 'black-border');
  } else {
    container.className = container.className.replace('black-border', 'earth-border');
  }
});
