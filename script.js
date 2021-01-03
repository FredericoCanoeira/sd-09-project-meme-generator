// Texto
const text = document.querySelector('#text-input');
text.addEventListener('input', function () {
  document.querySelector('#meme-text').innerHTML = text.value;
});

// Imagem
document.querySelector('#meme-insert').addEventListener('change', function (event) {
  document.querySelector('#meme-image').src = URL.createObjectURL(event.target.files[0]);
});

// Bordas
function removeAllBorderClass(element) {
  if (element.classList.contains('fire') || element.classList.contains('water') || element.classList.contains('earth')) {
    element.classList.remove('fire');
    element.classList.remove('water');
    element.classList.remove('earth');
  }
}

function changeBorder(type) {
  const element = document.getElementById('meme-image-container');
  element.style.border = '';

  removeAllBorderClass(element);

  if (type === 'fire') {
    element.classList.add('fire');
  }

  if (type === 'water') {
    element.classList.add('water');
  }

  if (type === 'earth') {
    element.classList.add('earth');
  }
}

document.querySelector('#fire').addEventListener('click', function () {
  changeBorder('fire');
});

document.querySelector('#water').addEventListener('click', function () {
  changeBorder('water');
});

document.querySelector('#earth').addEventListener('click', function () {
  changeBorder('earth');
});
