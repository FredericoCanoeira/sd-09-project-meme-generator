 let message = document.getElementById("text-input");
 let botao = document.getElementById("meme-image");
 let texto = document.querySelector('.textMeme');
 botao.addEventListener('click', criarMeme);
 
 function criarMeme(event){
    texto.innerHTML = message.value;    

 }