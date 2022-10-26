console.log('pedir uber')
let aceitar = false
const promessa = new Promise(
    (resolve, reject)=>{
        if(aceitar == true ){
            return resolve('aceitou')
        }else{
            return reject('rejeitou')
        }
    }
    )
console.log('Aguardando')
promessa.then(result => console.log(result))
    .catch(erro => console.log(erro))
    .finally(() => console.log("Finalizado"))