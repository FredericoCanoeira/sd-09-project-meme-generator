// Create element img in HTML
function createImg(imgLoaded, container) {
  const img = document.createElement('img');
  img.id = 'meme-image';
  img.src = URL.createObjectURL(imgLoaded);
  container.appendChild(img);
  if (img.onload) {
    URL.revokeObjectURL(img.src); // Free memory
  }
}

// Delete element img in HTML
function deleteImg(container) {
  if (document.querySelector('#meme-image')) {
    container.removeChild(document.querySelector('#meme-image'));
  }
}

// Call the functions that create and delete img in HTML
function loadImage(event) {
  const imgContainer = document.querySelector('#meme-image-container');
  deleteImg(imgContainer);
  createImg(event.target.files[0], imgContainer)
}

// Create element paragraph(p) in HTML
function createParagraph(text, container) {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = text;
  paragraph.id = 'meme-paragraph';
  container.appendChild(paragraph);
}

// Delete element paragraph(p) in HTML
function deleteParagraph(container) {
  if (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

// Call functions that create/delete paragraph in HTML
function loadText(event) {
  const textInput = event.target;
  const textContainer = document.querySelector('#meme-text');
  deleteParagraph(textContainer);
  createParagraph(textInput.value, textContainer);
}

// Change border style of img container
function changeBorder(event) {
  const imgContainer = document.querySelector('.img-container')
  if (event.target.id === 'fire') {
    imgContainer.style.border = '3px dashed red';
  } else if (event.target.id === 'water') {
    imgContainer.style.border = '5px double blue';
  } else if (event.target.id === 'earth') {
    imgContainer.style.border = '6px groove green';
  }
}

// Prevent submit of a input in form
function preventSubmit(event) {
  event.preventDefault();
}

// Load functions and event listeners at the window load
window.onload = function () {
  const textForm = document.querySelector('#text-form');
  const memeInsert = document.querySelector('#meme-insert');
  const textInput = document.querySelector('#text-input');
  const fireButton = document.querySelector('#fire');
  const waterButton = document.querySelector('#water');
  const earthButton = document.querySelector('#earth');
  textForm.addEventListener('submit', preventSubmit);
  textInput.addEventListener('keyup', loadText);
  memeInsert.addEventListener('input', loadImage);
  fireButton.addEventListener('click', changeBorder);
  waterButton.addEventListener('click', changeBorder);
  earthButton.addEventListener('click', changeBorder);
};
