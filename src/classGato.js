import Animal from './classAnimal.js';


/*
 * Criei a classe gato para exercitar a orientação a objetos
 */
export default class Gato extends Animal{

    falar(){
        console.log(this.nome + ' falou miau miau ')
    }

    comer(){
        console.log(this.nome + ' comeu ' + this.comida)
    }

    dormir(){
        console.log(this.nome + ' dorme no(a) ' + this.cama)
    }
}
