// @flow
export const print = (type : string, out : string) => console.log(type.toUpperCase + ":" + out);

export const INPUT_OPTIONS = Symbol("input_options");
export var options = {
    _intro: "You can type",
    options : ["left","right","up","down","help","poke"],
    outputOptions(writeFn : any){
        this.options.forEach(
            f => addToOutput(this._intro + " " + f)
        );
    }
}
function addToOutput(newLine){
    let output = document.querySelector("#output");
    output.innerHTML = output.innerHTML + "</br>" + newLine;
}