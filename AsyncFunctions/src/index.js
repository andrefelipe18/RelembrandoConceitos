import "core-js"
import "regenerator-runtime/runtime"

let laserGun = {
    shotsperSecand: 30,
    currentPosition: [30, 45, 70],	
    firing: false
}

async function adjustPosition(x, y, z) { //O async faz com que a função retorne uma Promise
    if(z > 100) {
        return Promise.reject('Altura inválida') //O return faz com que a Promise seja rejeitada com o valor retornado (.catch)
    }
    laserGun.currentPosition = [x, y, z]
    return [x, y, z] //O return faz com que a Promise seja resolvida com o valor retornado (.then)
}

async function fire(x, y, z) {
    if(x == y){
        return Promise.reject('Coordenadas inválidas para atirar')
    }
    laserGun.firing = true
    return [x, y, z]
}

function loadAmmo(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Munição carregada')
        }, 2000)
    }	
    )
}


async function moveAndFire(x, y, z) {
    try{ //Caso retorne uma Promise rejeitada, o catch captura o erro
     const adjustPositionPromise = adjustPosition(x, y, z);
     const loadAmmoPromise = loadAmmo();

     //O await faz com que a função espere a Promise ser resolvida ou rejeitada
     //O código só continua após as duas Promises serem resolvidas
    let resultadoPromises = await Promise.all([adjustPositionPromise, loadAmmoPromise]);  

    let novasCoordenadas = resultadoPromises[0] //O resultadoPromises[0] recebe o valor retornado pela Promise resolvida (.then)
    console.log(`Arma ajustada para as coordenadas (${novasCoordenadas[0]}, ${novasCoordenadas[1]}, ${novasCoordenadas[2]})`)

    //O coordenadasFogo recebe o valor retornado pela Promise resolvida (.then)
    let coordenadasFogo = await fire(...novasCoordenadas)
    console.log(`Começando a atirar nas coordenadas (${coordenadasFogo[0]}, ${coordenadasFogo[1]}, ${coordenadasFogo[2]})`)

    console.log(resultadoPromises[1]);
 } catch (erro) {
    console.log(erro)
 }
} 
  
moveAndFire(20, 35, 100)
