// const formCadastrar = document.getElementById("formCadastrar");
// const nome = document.getElementById("nome");
// const email = document.getElementById("email");
// const cep = document.getElementById("cep");

function enviarFormulario(event) {
  console.log('event:', event)
  event.preventDefault();
  const formCadastrar = event.target;

  const formData = new FormData(formCadastrar);
  console.log('get:', formData.get('nome'))

}