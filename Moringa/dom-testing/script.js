// total = document.getElementById('trash')
// total.innerHTML = 18

let replica = document.getElementById('replica')
let submitbtn = document.getElementById('changeColor')

submitbtn.addEventListener('click', function (){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let age = document.getElementById('age').value

    console.log('username')
    console.log('password')
    console.log('age')

    let para = document.createElement('p')

    let paraData = document.createTextNode(`${username} ---- ${password} --- ${age}`)

    para.appendChild(paraData)
    replica.appendChild(para)
})



