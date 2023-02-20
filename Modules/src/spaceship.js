export default class Spaceship {
    constructor(nome, capitao, armamentos = [], defesas = []) {
        this.nome = nome;
        this.capitao = capitao;
        this.armamentos = armamentos;
        this.defesas = defesas;
    }
}

