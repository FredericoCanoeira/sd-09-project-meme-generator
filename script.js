
function getMemeText(event) {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = event.target.value;
};

function listeners() {
  let textInput = document.querySelector('#text-input');
  textInput.addEventListener('input', getMemeText);  
}

  
window.onload = function () {
  listeners();
}
