function setImageToContainer() {
    const imageContainer = document.getElementById('meme-image');
    imageContainer.src = URL.createObjectURL(fileInput.files[0]);
}

const fileInput = document.getElementById('meme-insert');
fileInput.addEventListener('change', setImageToContainer);