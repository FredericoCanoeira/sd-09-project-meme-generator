 let message = document.getElementById("text-input");
 let botao = document.getElementById("meme-image");
 let texto = document.querySelector('.textMeme');
 botao.addEventListener('click', criarMeme);
 
 function criarMeme(event){
    texto.innerHTML = message.value.toUpperCase();    

 }

let button1 = document.querySelector('#fire');
let button2 = document.querySelector('#water');
let button3 = document.querySelector('#earth');
let image = document.querySelector("#blah");
button1.addEventListener('click', adicionaBorda1);
button2.addEventListener('click', adicionaBorda2);
button3.addEventListener('click', adicionaBorda3);



function adicionaBorda1(){
   image.style.border = '3px dashed red'
}

function adicionaBorda2(){
   image.style.border = '5px double blue'
}

function adicionaBorda3(){
   image.style.border = '6px groove green'
}