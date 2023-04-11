
export default class Animal {

/*
*  Acabei por alterar a espécie por nome, pois não estava fazendo sentido inserir
*  a espécie do animal ao instancia-lo, pois o proprio objeto já determina a espécie.
*
*  Além disso, ao printar a ação do animal faz ainda mais sentido printar o nome dele.
*/

    constructor(nome, cama, comida){
        this.nome = nome
        this.cama = cama
        this.comida = comida
    }


    falar(){
        console.log(this.nome + ' fala ')
    }

    comer(){
        console.log(this.nome + ' comeu ' + this.comida)
    }

    dormir(){
        console.log(this.nome + ' dorme no(a)' + this.cama)
    }

}

// console.log(new URL(import.meta.url).pathname)