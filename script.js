// Texto
const text = document.querySelector('#text-input');
text.addEventListener('input', function () {
  document.querySelector('#meme-text').innerHTML = text.value;
});

// Imagem
document.querySelector('#meme-insert').addEventListener('change', function (event) {
  document.querySelector('#meme-image').src = URL.createObjectURL(event.target.files[0]);
});
