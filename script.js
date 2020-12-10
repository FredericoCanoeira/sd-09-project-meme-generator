function generateTextInputBox() {
  const container = document.getElementById('inputs');
  const textBox = document.createElement('input');
  textBox.type = 'text';
  textBox.id = 'text-input';
  textBox.className = 'text-input';
  textBox.placeholder = 'Type your meme text here';

  container.appendChild(textBox);
  textBox.addEventListener('input', function () {
    const memeText = document.getElementById('meme-text');
    memeText.innerText = textBox.value;
  });
}

function generateImageUploadButton() {
  const container = document.getElementById('inputs');
  const uploadImageButton = document.createElement('input');
  uploadImageButton.type = 'file';
  uploadImageButton.id = 'meme-insert';
  uploadImageButton.class = 'button-style';
  uploadImageButton.innerText = 'Upload image';

  container.appendChild(uploadImageButton);
  uploadImageButton.addEventListener('input', function (selectedImage) {
    const memeImage = document.getElementById('meme-image');
    memeImage.src = URL.createObjectURL(selectedImage.target.files[0]);
  });
}

function generateMemeText() {
  const container = document.getElementById('meme-image-container');
  const memeText = document.createElement('p');
  memeText.id = 'meme-text';
  memeText.className = 'meme-text';

  container.appendChild(memeText);
}

function generateMemeImage() {
  const container = document.getElementById('meme-image-container');
  const memeImage = document.createElement('img');
  memeImage.id = 'meme-image';
  memeImage.className = 'meme-image';

  container.appendChild(memeImage);
}

window.onload = function () {
  generateTextInputBox();
  generateImageUploadButton();
  generateMemeText();
  generateMemeImage();
};
