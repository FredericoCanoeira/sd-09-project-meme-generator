// Prevent submit of a input in form
function preventSubmit(event) {
  event.preventDefault();
}

function createImg(event) {
  const imgContainer = document.querySelector('#meme-image-container');
  const imgElement = document.createElement('img');
  imgElement.id = 'meme-image';
  imgElement.src = URL.createObjectURL(event.target.files[0]);
  imgContainer.appendChild(imgElement);
  if (imgElement.onload) {
    URL.revokeObjectURL(imgElement.src); // Free memory
  }
}


// Load functions and event listeners at the window load  
window.onload = function () {
  const textInput = document.querySelector('#text-input');
  const memeInsert = document.querySelector('#meme-insert');
  textInput.addEventListener('submit', preventSubmit);
  memeInsert.addEventListener('input', createImg);
};