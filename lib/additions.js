"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var print = exports.print = function print(type, out) {
    return console.log(type.toUpperCase + ":" + out);
};

var INPUT_OPTIONS = exports.INPUT_OPTIONS = Symbol("input_options");
var options = exports.options = {
    _intro: "You can type",
    options: ["left", "right", "up", "down", "help", "poke"],
    outputOptions: function outputOptions(writeFn) {
        var _this = this;

        this.options.forEach(function (f) {
            return addToOutput(_this._intro + " " + f);
        });
    }
};
function addToOutput(newLine) {
    var output = document.querySelector("#output");
    output.innerHTML = output.innerHTML + "</br>" + newLine;
}
//# sourceMappingURL=additions.js.map