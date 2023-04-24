const form = document.getElementById('formulario')
const nomeUsuario = document.getElementById('nomeUsuario')
let validacao = true;

function validaNome(nomecompleto){
    const nomeComoArray = nomecompleto.split(' ')
    return nomeComoArray.length > 1
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const emailUsuario = document.getElementById('emailUsuario')
    const descricao = document.getElementById('descricao')
    const mensagemSucesso = 'Muito obrigado por nos contatar '+ nomeUsuario.value +' nos vamos te retornar o mais breve possivel em '+emailUsuario.value+ ' ,tenha uma otima semana, atenciosamente 1UP games'

    validacao = validaNome(nomeUsuario.value)
    if (validacao){
        const containerMensagemSucesso = document.querySelector('#mensagemSucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso ;
        containerMensagemSucesso.style.display = 'block';

        nomeUsuario.value = ''
        emailUsuario.value = ''
        descricao.value = ''
    } else {
        document.querySelector('#mensagemErro, #mensagemErro2').style.display = 'block';
        nomeUsuario.style.borderColor = '1px solid red';
    }

})

nomeUsuario.addEventListener('keyup', function(e) {
    console.log(e.target.value)
    validacao = validaNome(e.target.value)

    if (!validacao){
        nomeUsuario.classList.add('erro')
        nomeUsuario.style.border = '1px solid red';
        document.querySelector('#mensagemErro, #mensagemErro2').style.display = 'block';
    } else {
        nomeUsuario.classList.remove('erro')
        nomeUsuario.style= '';
        document.querySelector('#mensagemErro, #mensagemErro2').style.display = 'none';
    }
})


