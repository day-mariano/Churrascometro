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
  // Valores salvos
  const valueHomens = localStorage.getItem("homens")
  const valueMulheres = localStorage.getItem("mulheres")
  const valueCriancas = localStorage.getItem("criancas")
  const valueBebem = localStorage.getItem("bebem")
  const homens = +valueHomens || 0
  const mulheres = +valueMulheres || 0
  const criancas = +valueCriancas || 0
  const bebem = +valueBebem || 0
  const convidados = homens + mulheres + criancas

  resultadoConvidados.innerText = `${convidados} convidados`
  resultadoHomens.innerText = `${homens} homens`
  resultadoMulheres.innerText = `${mulheres} mulheres`
  resultadoCriancas.innerText = `${criancas} crianças`

  const carne = (homens * 0.4) + (mulheres  * 0.32) + (criancas * 0.20)
  console.log("carne:", carne)
  tdCarne.innerText= `${carne} kg`

  const paoDeAlho = homens * 2 + mulheres * 2 + criancas
  console.log("pão de alho:", paoDeAlho)
  tdPaodeAlho.innerText = `${paoDeAlho} unidades`
  
  const carvao = convidados
  console.log("carvão:", carvao)
  tdCarvao.innerText = `${carvao} kg`

  const calcularRefrigerante = () => {
    const refrigerante = convidados / 5
    return Math.ceil(refrigerante)
  }
  console.log("refrigerante:", calcularRefrigerante())
  tdRefrigerante.innerText = `${calcularRefrigerante()} garrafa de 2L`

  const calcularAgua = () => {
    const agua = convidados / 5
    return Math.ceil(agua)
  }
  console.log("agua:", calcularAgua())
  tdAgua.innerText = `${calcularAgua()} garrafa de 1L`

  const cerveja = (bebem * 3)
  console.log("cerveja:", cerveja)
  tdCerveja.innerText = `${cerveja} garrafa de 600ml`

  sectionCalcular.classList.add("ocultar")
  sectionFormulario.classList.remove("ocultar")
  if(localStorage.getItem("nome")){
    sectionFormulario.classList.add("ocultar")
    sectionTabela.classList.remove("ocultar")
  }
}
//Cadastrar
const sectionTabela = document.getElementById("sectionTabela")
const elementoNome = document.getElementById("elementoNome")
const elementoEmail = document.getElementById("elementoEmail")
const elementoCep = document.getElementById("elementoCep")
const elementoComunicacoes = document.getElementById("elementoComunicacoes")
const buttonCadastrar = document.getElementById("buttonCadastrar")
buttonCadastrar.addEventListener("click", cadastrar)

function cadastrar(event) {
  event.preventDefault()

  localStorage.setItem("nome", elementoNome.value)
  localStorage.setItem("email", elementoEmail.value)
  localStorage.setItem("cep", elementoCep.value)
  localStorage.setItem("comunicacoes", elementoComunicacoes.value)

  sectionCalcular.classList.add("ocultar")
  sectionFormulario.classList.add("ocultar")
  sectionTabela.classList.remove("ocultar")
}

const buttonVoltar = document.getElementById("buttonVoltar")
buttonVoltar.addEventListener("click", voltar)
function voltar() {
  sectionFormulario.classList.add("ocultar")
  sectionCalcular.classList.remove("ocultar")
}

const buttonPular = document.getElementById("buttonPular")
buttonPular.addEventListener("click", pular)
function pular() {
  sectionFormulario.classList.add("ocultar")
  sectionTabela.classList.remove("ocultar")
}

const buttonNovoCalculo = document.getElementById("buttonNovoCalculo")
buttonNovoCalculo.addEventListener("click", novoCalculo)
function novoCalculo() {
  localStorage.removeItem("convidados")
  localStorage.removeItem("homens")
  localStorage.removeItem("mulheres")
  localStorage.removeItem("criancas")
  localStorage.removeItem("bebem")

  elementoHomens.innerText = "0"
  elementoMulheres.innerText = "0"
  elementoCriancas.innerText = "0"
  elementoBebem.innerText = "0"

  sectionTabela.classList.add("ocultar")
  sectionCalcular.classList.remove("ocultar")
}

document.getElementById("seletorTema").addEventListener("click", (evento) => {
  const marcado = evento.target.checked;

  const body = document.getElementsByTagName("body")[0]

  if (marcado) {
    body.classList.remove("tema-claro")
  } else {
    body.classList.add("tema-claro")
  }
})
