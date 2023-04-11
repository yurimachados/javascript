import Animal from "./classAnimal.js"

export default class Cachorro extends Animal{

    falar(){
        console.log(this.nome + ' falou AU AU AU ')
    }

    comer(){
        console.log(this.nome + ' comeu ' + this.comida)
    }

    dormir(){
        console.log(this.nome + ' dormiu no(a) ' + this.cama)
    }
}