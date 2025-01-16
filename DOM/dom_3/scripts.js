let email1 = document.getElementById('email1')
let password1 = document.getElementById('password1')
    

let datas = {
    email: 'saulo154@outlook.com',
    senha: 'jajajaja'
}

let buttona = document.querySelector('.button') 

buttona.addEventListener('click', () => {
    emailInput = email1.value
    passwordInput = password1.value
    res.style.backgroundColor = 'blue'
    
    console.log(password1)
    console.log(email1)
    
    let res = document.getElementById('res')
    
    if(emailInput === datas.email && passwordInput === datas.senha) {
        res.innerHTML = 'Sucesso!'
    } else {
        res.innerHTML = 'Login incorreto'
    
}})

window.addEventListener('keydown', (e) => {

    if (email1.key == 'enter') {
        
    }
})


