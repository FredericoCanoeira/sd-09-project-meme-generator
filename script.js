function showText() {
  const text = document.querySelector('#text-input');
  const paragraph = document.querySelector('#meme-text');
  paragraph.innerText = text.value;
}

window.onload = function () {
  const text = document.querySelector('#text-input');
  text.addEventListener('keyup', showText);
}
