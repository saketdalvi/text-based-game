"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ghost = exports.Angel = exports.Bear = exports.Encounter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.generate = generate;

require("babel-core/register");

require("babel-polyfill");

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Encounter = exports.Encounter = function () {
    function Encounter() {
        var introtext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        _classCallCheck(this, Encounter);

        this.introtext = introtext;
    }

    _createClass(Encounter, [{
        key: "whenEncounter",
        value: function whenEncounter() {
            return this.introtext;
        }
    }, {
        key: "poke",
        value: /*#__PURE__*/regeneratorRuntime.mark(function poke() {
            return regeneratorRuntime.wrap(function poke$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return "Whats up?";

                        case 2:
                        case "end":
                            return _context.stop();
                    }
                }
            }, poke, this);
        })
    }]);

    return Encounter;
}();

var Bear = exports.Bear = function (_Encounter) {
    _inherits(Bear, _Encounter);

    function Bear() {
        _classCallCheck(this, Bear);

        return _possibleConstructorReturn(this, (Bear.__proto__ || Object.getPrototypeOf(Bear)).call(this, "grr grow, You encountered a bear!"));
    }

    _createClass(Bear, [{
        key: "poke",
        value: /*#__PURE__*/regeneratorRuntime.mark(function poke() {
            return regeneratorRuntime.wrap(function poke$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return "grrr.. brear is aggressive";

                        case 2:
                            _context2.next = 4;
                            return "Bear is attacking!";

                        case 4:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, poke, this);
        })
    }]);

    return Bear;
}(Encounter);

var Angel = exports.Angel = function (_Encounter2) {
    _inherits(Angel, _Encounter2);

    function Angel() {
        _classCallCheck(this, Angel);

        return _possibleConstructorReturn(this, (Angel.__proto__ || Object.getPrototypeOf(Angel)).call(this, "Voila! You encountered an Angel!"));
    }

    return Angel;
}(Encounter);

var Ghost = exports.Ghost = function (_Encounter3) {
    _inherits(Ghost, _Encounter3);

    function Ghost() {
        _classCallCheck(this, Ghost);

        var _this3 = _possibleConstructorReturn(this, (Ghost.__proto__ || Object.getPrototypeOf(Ghost)).call(this));

        _this3.introtext = "Booh!, You encountered a ghost!";
        return _this3;
    }

    return Ghost;
}(Encounter);

function generate() {
    var number = Math.floor(Math.random() * (4 - 1)) + 1;

    if (number == 1) {
        return new Bear();
    } else if (number == 2) {
        return new Angel();
    } else if (number == 3) {
        return new Ghost();
    } else if (number == 4) {
        return new Encounter();
    }
}

// export class Bear{
//     whenEncountered(){
//         return "grr grow, You encountered a bear!";
//     }
// }
//# sourceMappingURL=encounter.js.map