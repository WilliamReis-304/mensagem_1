const botaoRecusar = document.getElementById('recusar')

botaoRecusar.addEventListener("click",()=>{
    let div = document.createElement('div')
    div.innerHTML = `<p color='green'>Aproveite a vida enquanto puder!</p>`
    document.body.appendChild(div)
})
