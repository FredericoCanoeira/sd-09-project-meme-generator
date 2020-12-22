//Create img atribute in HTML
function createImg(container, identifier , source) {
  const img = document.createElement('img');
  img.src = source
  img.id = identifier;
  container.appendChild(img);
}

function loadThumbnails() {
  const container = document.querySelector('.thumbnails-section');
  for (let index = 1; index <= 4; index += 1) {
    let id = `meme-${index}`;
    let source = `img/meme${index}.png`
    createImg(container, id, source);
  }
}

// Change atribute src of img tag
function loadImage(event) {
  const img = document.querySelector('#meme-image');
  img.src = URL.createObjectURL(event.target.files[0]);
  if (img.onload) {
    URL.revokeObjectURL(img.src); // Free memory
  }
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
  const imgContainer = document.querySelector('#meme-image-container');
  createImg(imgContainer,'meme-image');
  loadThumbnails();
  textForm.addEventListener('submit', preventSubmit);
  textInput.addEventListener('keyup', loadText);
  memeInsert.addEventListener('input', loadImage);
  fireButton.addEventListener('click', changeBorder);
  waterButton.addEventListener('click', changeBorder);
  earthButton.addEventListener('click', changeBorder);
};
