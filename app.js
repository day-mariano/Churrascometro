// Adicionar e remover quantiade de pessoas 
const elementoHomens = document.getElementById("elementoHomens")
const elementoMulheres = document.getElementById("elementoMulheres")
const elementoCriancas = document.getElementById("elementoCriancas")
const elementoBebem = document.getElementById("elementoBebem")

function adicionar(elemento, pessoa) {
  let quantidadeAtual = elemento.textContent
  quantidadeAtual ++
  elemento.innerText= `${quantidadeAtual}`
  localStorage.setItem(pessoa, `${quantidadeAtual}`)
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


  const refrigerante = () => {
    const totalPessoas = (elementoHomens.textContent * 1) + (elementoMulheres.textContent * 1) + (elementoCriancas.textContent * 1)
    if (totalPessoas <= 5 ) {
      return 1
    } else if (totalPessoas > 5) {
      return 2
    }
  }
  console.log("refrigerante:", refrigerante())
  const agua = () => {
    const totalPessoas = (elementoHomens.textContent * 1) + (elementoMulheres.textContent * 1) + (elementoCriancas.textContent * 1)
    if (totalPessoas <= 5 ) {
      return 1
    } else if (totalPessoas > 5) {
      return 2
    }
  }
  console.log("água:", agua())

  const cerveja = (elementoBebem.textContent * 3)
  console.log("cerveja:", cerveja)

}
// Guardar no locarl storage
function armazenar(){
  ``
}
// localStorage.setItem("Homens:", `${elementoHomens.textContent}`)
// localStorage.setItem("Mulheres:", `${elementoMulheres.textContent}`)
// localStorage.setItem("Crianças:", `${elementoHomens.textContent}`)
// localStorage.setItem("Adultos Bebem:", `${elementoHomens.textContent}`)



