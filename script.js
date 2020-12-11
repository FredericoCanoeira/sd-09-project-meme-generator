function generateTextInputBox() {
  const container = document.getElementById('inputs');
  const textBox = document.createElement('input');
  textBox.type = 'text';
  textBox.id = 'text-input';
  textBox.className = 'text-input';
  textBox.placeholder = 'Type your meme text here';
  textBox.maxLength = '60';

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

function generateFireButton(container, memeContainer) {
  const fireButton = document.createElement('button');
  fireButton.id = 'fire';
  fireButton.className = 'button-fire';
  fireButton.innerText = 'Fire Border';

  container.appendChild(fireButton);
  fireButton.addEventListener('click', function () {
    memeContainer.style.border = '3px dashed red';
  });
}

function generateWaterButton(container, memeContainer) {
  const borderTwoButton = document.createElement('button');
  borderTwoButton.id = 'water';
  borderTwoButton.className = 'button-water';
  borderTwoButton.innerText = 'Water Border';

  container.appendChild(borderTwoButton);
  borderTwoButton.addEventListener('click', function () {
    memeContainer.style.border = '5px double blue';
  });
}

function generateEarthButton(container, memeContainer) {
  const borderThreeButton = document.createElement('button');
  borderThreeButton.id = 'earth';
  borderThreeButton.className = 'button-earth';
  borderThreeButton.innerText = 'Earth Border';

  container.appendChild(borderThreeButton);
  borderThreeButton.addEventListener('click', function () {
    memeContainer.style.border = '6px groove green';
  });
}

function generateBordersButtons() {
  const container = document.querySelector('.button-container');
  const memeContainer = document.getElementById('meme-image-container');
  generateFireButton(container, memeContainer);
  generateWaterButton(container, memeContainer);
  generateEarthButton(container, memeContainer);
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
  generateBordersButtons();
};
