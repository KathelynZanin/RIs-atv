import * as readline from "readline";

abstract class Operacao {
  abstract calcular(a: number, b: number): number;
}

class Soma extends Operacao {
  calcular(a: number, b: number): number {
    return a + b;
  }
}

class Subtracao extends Operacao {
  calcular(a: number, b: number): number {
    return a - b;
  }
}

class Divisao extends Operacao {
  calcular(a: number, b: number): number {
    return a / b;
  }
}

class Potencia extends Operacao {
  calcular(a: number, b: number): number {
    return Math.pow(a, b);
  }
}

class Radiciacao extends Operacao {
  calcular(a: number, b: number): number {
    return Math.pow(a, 1 / b);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("1 - Soma");
console.log("2 - Subtração");
console.log("3 - Divisão");
console.log("4 - Potência");
console.log("5 - Radiciação");

rl.question("Escolha a operação: ", (op) => {
  rl.question("Primeiro número: ", (n1) => {
    rl.question("Segundo número: ", (n2) => {

      const a = parseFloat(n1);
      const b = parseFloat(n2);

      let operacao: Operacao;

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