const botaoAjudar = document.getElementById('ajudar')
const botaoRecusar = document.getElementById('recusar')

botaoAjudar.addEventListener("click",()=>{
    alert('Copie e cole em seu navegador:\nhttps://github.com/WilliamReis-304/mensagem_1')
})
botaoRecusar.addEventListener("click",()=>{
    let div = document.createElement('div')
    div.innerHTML = `<p color='green'>Aproveite a vida enquanto puder!</p>`
    document.body.appendChild(div)
})