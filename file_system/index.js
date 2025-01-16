// let {readFile} = require('fs')

// readFile('arquivo.txt', 'utf-8', (error, text) => {
//     if(error) {
//         throw error
//     } else {
//         console.log(text)
//     }
// })

let {writeFile} = require('fs')
 
writeFile('arquivo.txt', 'eu fodase digitar isso daqui', (eror) => {
    if(eror){
        throw eror
    } else { console.log('Voce escreveu!')}
})

