/* Desestrururação de Objetos e Arrays */

// Desestruturação de Arrays
const [primeiroIndex, , terceiroIndex] = [10, 20, 30];
/*Repare que foi pulado o segundo indice deixando ele em branco*/


console.log(`Variavel primeiroIndex: ${primeiroIndex}, Variavel terceiroIndex: ${terceiroIndex}`);
console.log(`Soma das variaveis para teste: ${primeiroIndex + terceiroIndex}`);

/*---------------------------------------------------------------------------------------*/
console.log('------------------------------------------------------------------')
/*---------------------------------------------------------------------------------------*/
class Pessoa { //Classe Pessoa para teste
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}
//Instanciando a classe Pessoa para teste
novaPessoa = new Pessoa('Andre', 'Domingues', 30);
/*---------------------------------------------------------------------------------------*/
// Desestruturação de Objetos
const { nome, sobrenome, idade } = novaPessoa;
console.log(`Meu nome é: ${nome}, meu nome em letras maiusculas: ${nome.toUpperCase()}`); 
//Ou podemos atribuir um novo nome para a variavel
const { nome: novoNome, sobrenome: novoSobrenome, idade: novaIdade } = novaPessoa;
console.log(`Variaveis apelidadas para teste: ${novoNome} ${novoSobrenome} ${novaIdade}`); 

//Valor padrão caso não exista o valor no objeto
const { nomeErrado: novoNomePadrao = 'Felipe', profissao: profissaoPadrao = 'Desenvolvedor' } = novaPessoa;
console.log(`Valor padrão caso não exista o valor no objeto: ${novoNomePadrao} ${profissaoPadrao}`);