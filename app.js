
const elementoHomens = document.getElementById("elementoHomens")
const elementoMulheres = document.getElementById("elementoMulheres")
const elementoCriancas = document.getElementById("elementoCriancas")
const elementoBebem = document.getElementById("elementoBebem")

function adicionar(elemento) {
  let quantidadeAtual = elemento.textContent
  
  quantidadeAtual ++
  elemento.innerText= `${quantidadeAtual}`
}

function subtrair(elemento){
  let quantidadeAtual = elemento.textContent
  if (quantidadeAtual > 0) {
    quantidadeAtual --
    elemento.innerText= `${quantidadeAtual}`
  }
}
