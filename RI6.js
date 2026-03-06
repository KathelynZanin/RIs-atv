"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Operacao = /** @class */ (function () {
    function Operacao() {
    }
    return Operacao;
}());
var Soma = /** @class */ (function (_super) {
    __extends(Soma, _super);
    function Soma() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soma.prototype.calcular = function (a, b) {
        return a + b;
    };
    return Soma;
}(Operacao));
var Subtracao = /** @class */ (function (_super) {
    __extends(Subtracao, _super);
    function Subtracao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subtracao.prototype.calcular = function (a, b) {
        return a - b;
    };
    return Subtracao;
}(Operacao));
var Divisao = /** @class */ (function (_super) {
    __extends(Divisao, _super);
    function Divisao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Divisao.prototype.calcular = function (a, b) {
        return a / b;
    };
    return Divisao;
}(Operacao));
var Potencia = /** @class */ (function (_super) {
    __extends(Potencia, _super);
    function Potencia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Potencia.prototype.calcular = function (a, b) {
        return Math.pow(a, b);
    };
    return Potencia;
}(Operacao));
var Radiciacao = /** @class */ (function (_super) {
    __extends(Radiciacao, _super);
    function Radiciacao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Radiciacao.prototype.calcular = function (a, b) {
        return Math.pow(a, 1 / b);
    };
    return Radiciacao;
}(Operacao));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Divisão");
console.log("4 - Potência");
console.log("5 - Radiciação");
rl.question("Escolha a operação: ", function (op) {
    rl.question("Primeiro número: ", function (n1) {
        rl.question("Segundo número: ", function (n2) {
            var a = parseFloat(n1);
            var b = parseFloat(n2);
            var operacao;
            switch (op) {
                case "1":
                    operacao = new Soma();
                    break;
                case "2":
                    operacao = new Subtracao();
                    break;
                case "3":
                    operacao = new Divisao();
                    break;
                case "4":
                    operacao = new Potencia();
                    break;
                case "5":
                    operacao = new Radiciacao();
                    break;
                default:
                    console.log("Operação inválida");
                    rl.close();
                    return;
            }
            console.log("Resultado:", operacao.calcular(a, b));
            rl.close();
        });
    });
});
