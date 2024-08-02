const botaoAjudar = document.getElementById('ajudar')
const botaoRecusar = document.getElementById('recusar')

botaoAjudar.addEventListener("click",()=>{
    let div = document.createElement('div')
    div.innerHTML = `<p color='green'>https://drive.google.com/drive/folders/1iLGgk6HZcv4HZJl-7wMNTPSNZ4HgYYcO?usp=sharing</p>`
    document.body.appendChild(div)
})
botaoRecusar.addEventListener("click",()=>{
    let div = document.createElement('div')
    div.innerHTML = `<p color='green'>Aproveite a vida enquanto puder!</p>`
    document.body.appendChild(div)
})
