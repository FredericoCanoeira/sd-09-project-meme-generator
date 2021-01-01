const input = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

function memeTextUpdate() {
  const text = input.value;
  memeText.innerText = text;
}

input.addEventListener('keyup', memeTextUpdate);
