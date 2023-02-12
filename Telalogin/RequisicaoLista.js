let botao = document.querySelector('#btn');
let login = document.querySelector('#login');

botao.addEventListener("click",function(){

   fetch('https://jsonplaceholder.typicode.com/users',)
   .then(function(response){
    console.log(response)
   })     


})