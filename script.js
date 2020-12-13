function changeMemeText(event) {
  const memeText = document.querySelector('#meme-text');
  memeText.innerText = event.target.value;
  console.log('ChangeText');
}

function AddListerners() {
  const textInput = document.querySelector('#text-input');
  textInput.addEventListener('input', changeMemeText);
  console.log('Listerners');
  console.log(textInput);
}

window.onload = function (){
  AddListerners();
};
