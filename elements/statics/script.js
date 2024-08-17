const botaoEnviar = document.getElementById('enviar')
var correto = "rainha-f7"

botaoEnviar.addEventListener("click",()=>{
    var resposta = document.getElementById('resposta')
    if(resposta.value == correto){
        alert('De fato, tiveram sucesso!\n Com acesso irrestrito a sua comunicação, nos falta, porém, executar o comando.\n')
        alert('Após a inserção do comando, teremos privado este canal a nossos interesses\n\ncommand:{system.lockdownActivate = true}\n\nNos vemos em breve.')
    }else{
        let div = document.createElement('div')
        let body = document.body
        div.innerHTML='<p>Esta não é a senha.</p>'
        body.appendChild(div)
    }})
