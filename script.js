const form = document.querySelector('.formulario');


const adicionarContato = (e) => {
e.preventDefault();

console.log('hhhhh');


let erro = []

const x = document.querySelector('#nome').value;
const num = document.querySelector('#numero').value;
const container = document.querySelector('.container');

const nome = x.split(' ')

if(!erro.leght){
    container.innerHTML += `<tr>
    <td>${nome[0]}</td>
    <td>${num}</td>
    </tr>`
}


}



form.addEventListener('submit', (e) => adicionarContato(e))