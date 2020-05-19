import * as encounter from "./encounter.js"

export class Environment{
    constructor(name){
        this.name = name;
        this.encounter = encounter.generate();
        this.pokeEncounter = this.encounter.poke();
    }
    

    stumbleUpon(){
        this.encounter = encounter.generate();
        var interaction = this.name + "You stumbled upon.." + this.encounter.whenEncounter();
        return interaction;
    }

    poke(){
        var pokeReturn = this.pokeEncounter.next();

        if(!pokeReturn.done){
            return pokeReturn.value;
        }
    }
}
