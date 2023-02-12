const url ='https://jsonplaceholder.typicode.com/users'

let botao = document.querySelector('#btn');
let login = document.querySelector('#login');


//apenas teste igual da fake  api
//função para pegar tudo que a api etsa exibindo

async function getAllPosts(){

    const resposta =await fetch(url);

    console.log(resposta);


    //estraindo o dado 
    const data = await resposta.json()
    console.log(data);

    
    

}

getAllPosts();