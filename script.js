function createStructure () {
  const apend = document.getElementById('meme-image-container');
  const createTitle = document.createElement('h1');
  createTitle.innerText = 'Meme Generator'
  apend.appendChild(createTitle);
  const createInput = document.createElement('input');
  createInput.id = 'text-input';
  apend.appendChild(createInput);
  const memeText = document.createElement('p');
  memeText.innerText = 'teste';
  apend.appendChild(memeText);
}



window.onload = function() {
  createStructure()
}