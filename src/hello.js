import { Environment } from "./environment.js";
import { options, print } from "./additions.js";
import {onChange} from "./fileprocessing.js";

const defaultLine = "Start your journey"; const BR = "<br/>";
var environment = new Environment("Dungeon-");
var treasures = new WeakMap();

var tresCoords = new Set();
var _fileInput;
function main() {
    let enterE1 = document.querySelector("#enter");
    enterE1.addEventListener("click", onClickEnter, false);
    addToOutput();

    _fileInput = document.querySelector("#files");
    _fileInput.onchange = function () {
       onChange(_fileInput.files, tresCoords, treasures);
    };
}

function findTreasure() {

    let findCoords;
    for (let coords of tresCoords) {
        if (coords.x == x && coords.y == y) {
            findCoords = coords;
        }
    }

    if (findCoords) {
        var { name, value } = treasures.get(findCoords)

        if (value) {
            addToOutput(`You have found ${name} (${value})`);
        }
    }

}
var x = 0; var y = 0;

function navigate(stepX, stepY) {
    [x, y] = [x + stepX, y + stepY]

    let coordinates = document.querySelector("#coordinates");
    coordinates.innerHTML = `${x} , ${y}`;

    findTreasure();
}
function addToOutput(newLine = defaultLine) {
    let output = document.querySelector("#output");
    output.innerHTML = output.innerHTML + BR + newLine;
}
function onCommand(command) {
    if (command == "help") {
        options.outputOptions();
    } else if (command == "up") {
        navigate(0, 1);
        addToOutput(environment.stumbleUpon());
    } else if (command == "down") {
        navigate(0, -1);
        addToOutput(environment.stumbleUpon());
    } else if (command == "left") {
        navigate(-1, 0);
        addToOutput(environment.stumbleUpon());
    } else if (command == "right") {
        navigate(1, 0);
        addToOutput(environment.stumbleUpon());
    } else if (command = "poke") {
        addToOutput(environment.poke());
    } else {
        addToOutput(command)
    }
}
function onClickEnter() {
    let commands = document.querySelector("#commands");
    onCommand(commands.value);

}
main();
print("log", "hello");
console.log(Object.getOwnPropertySymbols(options));
