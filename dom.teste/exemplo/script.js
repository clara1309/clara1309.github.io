//const titulo = document.querySelector('h1')
//console.log('innerHTML:',titulo.innerHTML)
//console.log('innerText:', titulo.innerText)
//console.log('textContet:', titulo.textContent)

const body = document.querySelector('body');
const ancora = document.createElement('a');
ancora.text = 'Meu link';
ancora.setAttribute('href', 'https://www.ifro.edu.br')
ancora.setAttribute('target','_blank');
body.appendChild(ancora);
ancora.style.backgroundColor = 'pink'
ancora.style.fontSize = '20px'

