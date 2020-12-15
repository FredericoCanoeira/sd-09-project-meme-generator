function getMemeText(event) {
  const memeText = document.querySelector('#meme-text');
  memeText.innerHTML = event.target.value;
};

function getMemeImage(event) {
  const imageContainer = document.querySelector('#meme-image');
  imageContainer.src = event.target.value;
  // imageContainer.style.backgroundImage = "url('https://img.r7.com/images/meme-sorriso-forcado-hide-the-pain-harold-maurice-andras-arato-08112019141225682')";
}

function listeners() {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('input', getMemeText);
  const memeImage = document.querySelector('#meme-insert');
  memeImage.addEventListener('input', getMemeImage);
}
  
window.onload = function () {
  listeners();
}
