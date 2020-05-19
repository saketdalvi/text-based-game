"use strict";

var _environment = require("./environment.js");

var _additions = require("./additions.js");

var _fileprocessing = require("./fileprocessing.js");

var defaultLine = "Start your journey";var BR = "<br/>";
var environment = new _environment.Environment("Dungeon-");
var treasures = new WeakMap();

var tresCoords = new Set();
var _fileInput;
function main() {
    var enterE1 = document.querySelector("#enter");
    enterE1.addEventListener("click", onClickEnter, false);
    addToOutput();

    _fileInput = document.querySelector("#files");
    _fileInput.onchange = function () {
        (0, _fileprocessing.onChange)(_fileInput.files, tresCoords, treasures);
    };
}

function findTreasure() {

    var findCoords = void 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = tresCoords[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var coords = _step.value;

            if (coords.x == x && coords.y == y) {
                findCoords = coords;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (findCoords) {
        var _treasures$get = treasures.get(findCoords),
            name = _treasures$get.name,
            value = _treasures$get.value;

        if (value) {
            addToOutput("You have found " + name + " (" + value + ")");
        }
    }
}
var x = 0;var y = 0;

function navigate(stepX, stepY) {
    var _ref = [x + stepX, y + stepY];
    x = _ref[0];
    y = _ref[1];


    var coordinates = document.querySelector("#coordinates");
    coordinates.innerHTML = x + " , " + y;

    findTreasure();
}
function addToOutput() {
    var newLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultLine;

    var output = document.querySelector("#output");
    output.innerHTML = output.innerHTML + BR + newLine;
}
function onCommand(command) {
    if (command == "help") {
        _additions.options.outputOptions();
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
        addToOutput(command);
    }
}
function onClickEnter() {
    var commands = document.querySelector("#commands");
    onCommand(commands.value);
}
main();
(0, _additions.print)("log", "hello");
console.log(Object.getOwnPropertySymbols(_additions.options));

// var coordinate1 = { x: 2, y: 2 };
// tresCoords.add(coordinate1);
// treasures.set(coordinate1, { name: "Teasure Chest", value: 100 });

// var coordinate2 = { x: 2, y: 0 };
// tresCoords.add(coordinate2);
// treasures.set(coordinate2, { name: "Medallion", value: 10 });


// _fileInput.files.forEach(file => promise.then(() => pFileReader(file)));
// promise.then(() => console.log("all done"));    // var file = _fileInput.files[0];

// var reader = new FileReader();

// return new Promise((resolve, reject) => {
//     reader.onload = function (evt) {
//         if (evt.target.readyState == FileReader.DONE) {
//             resolve( JSON.parse(evt.target.result));
//         }
//     };

//     if (file) {
//         reader.readAsText(file, "UTF-8");
//     }
// });
//# sourceMappingURL=hello.js.map