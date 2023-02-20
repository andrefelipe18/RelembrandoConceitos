class Planet{
    constructor(nome, area){
        this.nome = nome;
        this.area = area;
    }

    rotate(){
        alert("Rotacionando....");
    }
}

module.exports = Planet; //commonJS
/*export default Planet; //ES6 */