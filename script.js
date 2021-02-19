const emptyDiv = document.querySelector('#meme-image-container');
const emptyText = document.querySelector('#meme-text');
const textToAdd = document.querySelector('#text-input');

function generateMeme() {
  const uploadedImage = document.querySelector('#meme-image').files[0];
  const image = document.createElement('img');
  const insertedText = document.createElement('p');
  insertedText.innerText = textToAdd.value;
  insertedText.className = "inserted-text";
  emptyText.appendChild(insertedText);
  image.src = URL.createObjectURL(uploadedImage);
  emptyDiv.appendChild(image);  
}

document.querySelector('#gen-meme').addEventListener('click', generateMeme);
