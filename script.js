function insertTextEvent() {
  const inputBox = document.querySelector('#text-input');
  inputBox.addEventListener('change', function () {
    const container = document.querySelector('#meme-image-container');
    if (document.querySelector('#meme-text')) {
      const oldText = document.querySelector('#meme-text')
      container.removeChild(oldText);
    }
    const newText = document.createElement('p');
    newText.innerText = inputBox.value;
    newText.id = 'meme-text';
    newText.className = 'text-style';
    container.appendChild(newText);
  });
}

insertTextEvent();

function insertImageEvent () {
  const inputImage = document.querySelector('#meme-insert');
  inputImage.addEventListener('change', function () {
    const container = document.querySelector('#meme-image-container');
    if (document.querySelector('#meme-image')) {
      const oldImage = document.querySelector('#meme-image');
      container.removeChild(oldImage);
    }
    const newImage = document.createElement('img');
    newImage.id = 'meme-image';
    newImage.className = 'meme-image-style';
    newImage.src = URL.createObjectURL(inputImage.files[0]);
    newImage.alt = 'Meme image';
    container.appendChild(newImage);
  });
}

insertImageEvent();
