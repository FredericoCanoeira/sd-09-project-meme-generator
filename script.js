function generateMemeText() {
  const input = document.getElementById('text-input');
  const span = document.getElementById('meme-text');
  input.addEventListener('keyup', function () {
    span.innerText = input.value;
    span.style.zIndex = 10;
  })
}

function addImg() {
  const imgInput = document.getElementById('meme-insert');
  const memeImg = document.getElementById('meme-image')

  imgInput.addEventListener('click', function () {
    memeImg = URL.createObjectURL(input.files[0])
  })
}
window.onload = function () {
  generateMemeText();
}