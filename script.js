// Create element img in HTML
function createImg(event) {
  const imgContainer = document.querySelector('#meme-image-container');
  const img = document.createElement('img');
  img.id = 'meme-image';
  img.src = URL.createObjectURL(event.target.files[0]);
  imgContainer.appendChild(img);
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

// Prevent submit of a input in form
function preventSubmit(event) {
  event.preventDefault();
}

// Load functions and event listeners at the window load
window.onload = function () {
  const textForm = document.querySelector('#text-form');
  const memeInsert = document.querySelector('#meme-insert');
  const textInput = document.querySelector('#text-input');
  textForm.addEventListener('submit', preventSubmit);
  textInput.addEventListener('keyup', loadText);
  memeInsert.addEventListener('input', createImg);
};
