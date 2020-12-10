function generateInputSection() {
  // Label do input
  const myLabel = document.createElement('label')
  myLabel.innerText = 'Insira o seu texto aqui > ';
  document.querySelector('.inputContainer').appendChild(myLabel);
  
  // aqui temos o input de texto
  const textInput = document.createElement('input')
  textInput.id = 'text-input';
  textInput.maxLength='60';
  textInput.type = 'text';
  textInput.placeholder = 'Alguma ideia boa?'
  document.querySelector('.inputContainer').appendChild(textInput);

  // input para fazer o upload da imagem
  const imageInput = document.createElement('input')
  imageInput.type = 'file';
  document.querySelector('.inputContainer').appendChild(imageInput);
}

generateInputSection()

function generateMemeSection() {
  // um simples p para receber o texto do 'text-input'
  const memeTextParagrath = document.createElement('p');
  memeTextParagrath.id = 'meme-text';
  document.querySelector('.memeContainer').appendChild(memeTextParagrath);

  const memeImage = document.createElement('img');
  memeImage.id = 'meme-image';
  document.querySelector('.memeContainer').appendChild(memeImage);
}

generateMemeSection();

document.querySelector('#text-input').addEventListener('input',function(self){
  document.querySelector('#meme-text').innerText = self.target.value;
})