function podeDirigir(idade,cnh) {
    if(idade >= 18 && cnh == true) {
        console.log('Pode dirigir')
    } else {
            console.log('Nao pode dirigir')
        }
    
    }

podeDirigir(18, false)
podeDirigir(22, true)