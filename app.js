const elementoHomens = document.getElementById("elementoHomens")
const elementoMulheres = document.getElementById("elementoMulheres")
const elementoCriancas = document.getElementById("elementoCriancas")
const elementoBebem = document.getElementById("elementoBebem")

// 
elementoHomens.innerText = localStorage.getItem("homens") || "0"
elementoMulheres.innerText = localStorage.getItem("mulheres") || "0"
elementoCriancas.innerText = localStorage.getItem("criancas") || "0"
elementoBebem.innerText = localStorage.getItem("bebem") || "0"

// Adicionar,remover e guardar no locarlStorage
function adicionar(elemento, pessoa) {
  let quantidadeAtual = elemento.textContent
  quantidadeAtual ++
  localStorage.setItem(pessoa, quantidadeAtual)
  elemento.innerText = quantidadeAtual
}

function subtrair(elemento, pessoa){
  let quantidadeAtual = elemento.textContent
  if (quantidadeAtual > 0) {
    quantidadeAtual --
    elemento.innerText= `${quantidadeAtual}`
    localStorage.setItem(pessoa, `${quantidadeAtual}`)
  }
}

// Calcular resultado
const buttonCalcular = document.getElementById("buttonCalcular")
const sectionCalcular = document.getElementById("sectionCalcular")
buttonCalcular.addEventListener("click", calcular)

function calcular() {
  sectionCalcular.setAttribute("style","display:none;")
  const carne = (elementoHomens.textContent * 0.4) + (elementoMulheres.textContent * 0.32) + (elementoCriancas.textContent * 0.20)
  console.log("carne:", carne)

  const paoDeAlho = (elementoHomens.textContent * 2) + (elementoMulheres.textContent * 2) + (elementoCriancas.textContent * 1)
  console.log("pão de alho:", paoDeAlho)
  
  const carvao = (elementoHomens.textContent * 1) + (elementoMulheres.textContent * 1) + (elementoCriancas.textContent * 1)
  console.log("carvão:", carvao)


  const calcularRefrigerante = () => {
    const totalPessoas = (elementoHomens.textContent * 1) + (elementoMulheres.textContent * 1) + (elementoCriancas.textContent * 1)
    const refrigerante = totalPessoas / 5
    return Math.ceil(refrigerante)
  }
  console.log("refrigerante:", calcularRefrigerante())

  const calcularAgua = () => {
    const totalPessoas = (elementoHomens.textContent * 1) + (elementoMulheres.textContent * 1) + (elementoCriancas.textContent * 1)
    const agua = totalPessoas / 5
    return Math.ceil(agua)
  }
  console.log("agua:", calcularAgua())

  const cerveja = (elementoBebem.textContent * 3)
  console.log("cerveja:", cerveja)

}

