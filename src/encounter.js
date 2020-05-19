import "babel-core/register";
import "babel-polyfill";

export class Encounter{
    constructor(introtext = ""){
        this.introtext = introtext;
    }
    whenEncounter(){
        return this.introtext;
    }
    * poke(){
        yield "Whats up?";
    }
}
export class Bear extends Encounter{
    constructor(){
        super("grr grow, You encountered a bear!");
    }
    * poke(){
        yield "grrr.. brear is aggressive";
        yield "Bear is attacking!";
    }
}

export class Angel extends Encounter{
    constructor(){
        super("Voila! You encountered an Angel!");
    }
}

export class Ghost extends Encounter{
    constructor(){
        super();
        this.introtext = "Booh!, You encountered a ghost!";
    }
}

export function generate(){
    var number = Math.floor(Math.random() * (4-1)) + 1;

    if(number == 1){
        return new Bear();
    }else if(number == 2){
        return new Angel();
    }else if(number == 3){
        return new Ghost()
    }
    else if(number == 4){
        return new Encounter();
    }
}

// export class Bear{
//     whenEncountered(){
//         return "grr grow, You encountered a bear!";
//     }
// }

