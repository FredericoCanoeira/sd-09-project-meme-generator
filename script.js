const input = document.querySelector('#text-input');

function showText() {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = input.value;
}
input.addEventListener('input', showText);
