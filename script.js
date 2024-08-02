const botaoAjudar = document.getElementById('ajudar')
const botaoRecusar = document.getElementById('recusar')

botaoAjudar.addEventListener("click",()=>{
    alert('Copie e cole em seu navegador:\nhttps://drive.google.com/drive/folders/1iLGgk6HZcv4HZJl-7wMNTPSNZ4HgYYcO?usp=drive_link')
})
botaoRecusar.addEventListener("click",()=>{
    let div = document.createElement('div')
    div.innerHTML = `<p color='green'>Aproveite a vida enquanto puder!</p>`
    document.body.appendChild(div)
})
