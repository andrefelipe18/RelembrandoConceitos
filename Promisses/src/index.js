let komodoShip = {
    name: 'Komodo',
    velocity: 100,
    acceleration: 10,
}

const velocityAfter2Seconds = (velocity, acceleration) => {
new Promise((resolve, reject) => {
    if(acceleration > 0) {
       velocity += acceleration * 2;
       resolve(velocity);
    } else {
       reject('Aceleração não pode ser negativa');
    }
}).then((velocity) => { // then() é chamado quando a promise é resolvida "Resolve"
    console.log(`Velocidade após 2 segundos: ${velocity} km/s`);
}).catch((error) => { // catch() é chamado quando a promise é rejeitada "Reject"
    console.log(`Erro: ${error}`);
});
}

let acceleration = prompt('Digite a aceleração da nave: ');

velocityAfter2Seconds(komodoShip.velocity, acceleration)

console.log('execução de promise')