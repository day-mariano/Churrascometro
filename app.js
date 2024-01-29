const elementoHomens = document.getElementById("elementoHomens")
const elementoMulheres = document.getElementById("elementoMulheres")
const elementoCriancas = document.getElementById("elementoCriancas")
const elementoBebem = document.getElementById("elementoBebem")

// Valores salvos
const valueHomens = localStorage.getItem("homens")
const valueMulheres = localStorage.getItem("mulheres")
const valueCriancas = localStorage.getItem("criancas")
const valueBebem = localStorage.getItem("bebem")
// Mantem nos input
elementoHomens.innerText = valueHomens || "0"
elementoMulheres.innerText = valueMulheres || "0"
elementoCriancas.innerText = valueCriancas || "0"
elementoBebem.innerText = valueBebem || "0"

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
const sectionFormulario = document.getElementById("sectionFormulario")
buttonCalcular.addEventListener("click", calcular)
const resultadoConvidados = document.getElementById("resultadoConvidados")
const resultadoHomens = document.getElementById("resultadoHomens")
const resultadoMulheres = document.getElementById("resultadoMulheres")
const resultadoCriancas = document.getElementById("resultadoCriancas")
const tdCarne = document.getElementById("tdCarne")
const tdPaodeAlho = document.getElementById("tdPaodeAlho")
const tdRefrigerante = document.getElementById("tdRefrigerante")
const tdAgua = document.getElementById("tdAgua")
const tdCerveja = document.getElementById("tdCerveja")
const tdCarvao = document.getElementById("tdCarvao")


function calcular() {
  sectionCalcular.classList.add("ocultar")
  sectionFormulario.classList.remove("ocultar")
  // if(localStorage.getItem("nome")){
  //   sectionFormulario.classList.remove("ocultar")
  // }
  const carne = (valueHomens * 0.4) + (valueMulheres * 0.32) + (valueCriancas * 0.20)
  console.log("carne:", carne)
  tdCarne.innerText= `${carne} kg`

  const paoDeAlho = (valueHomens * 2) + (valueMulheres * 2) + (valueCriancas * 1)
  console.log("pão de alho:", paoDeAlho)
  tdPaodeAlho.innerText = `${paoDeAlho} unidades`
  
  const carvao = (valueHomens * 1) + (valueMulheres * 1) + (valueCriancas * 1)
  console.log("carvão:", carvao)
  tdCarvao.innerText = `${carvao} kg`


  const calcularRefrigerante = () => {
    const totalPessoas = (valueHomens * 1) + (valueMulheres * 1) + (valueCriancas * 1)
    const refrigerante = totalPessoas / 5
    return Math.ceil(refrigerante)
  }
  console.log("refrigerante:", calcularRefrigerante())
  tdRefrigerante.innerText = `${calcularRefrigerante()} garrafa de 2L`

  const calcularAgua = () => {
    const totalPessoas = (valueHomens * 1) + (valueMulheres * 1) + (valueCriancas * 1)
    const agua = totalPessoas / 5
    return Math.ceil(agua)
  }
  console.log("agua:", calcularAgua())
  tdAgua.innerText = `${calcularAgua()} garrafa de 1L`

  const cerveja = (valueBebem * 3)
  console.log("cerveja:", cerveja)
  tdCerveja.innerText = `${cerveja} garrafa de 600ml`

}
//Cadastrar
const sectionTabela = document.getElementById("sectionTabela")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const cep = document.getElementById("cep")
const checkComunicacoes = document.getElementById("checkComunicacoes")
const buttonCadastrar = document.getElementById("buttonCadastrar")
buttonCadastrar.addEventListener("click", cadastrar)

function cadastrar(event) {
  event.preventDefault()

  sectionCalcular.classList.add("ocultar")
  sectionFormulario.classList.add("ocultar")
  sectionTabela.classList.remove("ocultar")

  localStorage.setItem("nome:", nome.value)
  localStorage.setItem("email:", email.value)
  localStorage.setItem("cep:", cep.value)
  localStorage.setItem("comunicacoes:", checkComunicacoes.value)
}

