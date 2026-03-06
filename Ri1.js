
function criarpersonagem(opts) {
  return {
    Nome: opts.Nome || "Desconhecido",
    Codinome: opts.Codinome || "Desconhecido",
    ArmaPrincipal: opts.ArmaPrincipal || "Desconhecido",
    AemaSecundaria: opts.AemaSecundaria || "",
    Velocidade: opts.Velocidade !== undefined ? String(opts.Velocidade) : "0",
    Forca: opts.Forca !== undefined ? String(opts.Forca) : "0",
    Resistencia: opts.Resistencia !== undefined ? String(opts.Resistencia) : "0",
    descricao: function() {
      return "nome do personagem: " + this.Nome + "\n" +
             "codinome do personagem: " + this.Codinome + "\n" +
             "arma principal do personagem: " + this.ArmaPrincipal + "\n" +
             "arma secundaria do personagem: " + this.AemaSecundaria + "\n" +
             "velocidade do personagem: " + this.Velocidade + "\n" +
             "forca do personagem: " + this.Forca + "\n" +
             "resistencia do personagem: " + this.Resistencia;
    }
  };
}


const vingadores = [
  criarpersonagem({
    Nome: "Tony Stark",
    Codinome: "Homem de Ferro",
    ArmaPrincipal: "Armadura",
    AemaSecundaria: "Reator Arc",
    Velocidade: "85",
    Forca: "65",
    Resistencia: "70"
  }),
  criarpersonagem({
    Nome: "Steve Rogers",
    Codinome: "Capitão América",
    ArmaPrincipal: "Escudo",
    AemaSecundaria: "Soro do Super Soldado",
    Velocidade: "75",
    Forca: "80",
    Resistencia: "85"
  }),
  criarpersonagem({
    Nome: "Thor Odinson",
    Codinome: "Thor",
    ArmaPrincipal: "Mjolnir",
    AemaSecundaria: "Força Divina",
    Velocidade: "90",
    Forca: "95",
    Resistencia: "90"
  }),
  criarpersonagem({
    Nome: "Natasha Romanoff",
    Codinome: "Viúva Negra",
    ArmaPrincipal: "Armas",
    AemaSecundaria: "Habilidades",
    Velocidade: "80",
    Forca: "60",
    Resistencia: "70"
  }),
  criarpersonagem({
    Nome: "Bruce Banner",
    Codinome: "Hulk",
    ArmaPrincipal: "Força Bruta",
    AemaSecundaria: "Resistência Incrível",
    Velocidade: "70",
    Forca: "100",
    Resistencia: "95"
  }),
  criarpersonagem({
    Nome: "Peter Parker",
    Codinome: "Homem-Aranha",
    ArmaPrincipal: "Sentido Aranha",
    AemaSecundaria: "Força Sobrehumana",
    Velocidade: "85",
    Forca: "70",
    Resistencia: "75"
  })
];


const thanos = criarpersonagem({
  Nome: "Thanos",
  Codinome: "Thanos",
  ArmaPrincipal: "Garra",
  AemaSecundaria: "",
  Velocidade: "78",
  Forca: "98",
  Resistencia: "92"
});


const todosOsPersonagens = [...vingadores, thanos];

function descricaoSimples(p) {
  return `${p.Nome} (${p.Codinome})`;
}


const atributos = ["Velocidade", "Forca", "Resistencia"];


for (let i = 0; i < todosOsPersonagens.length; i++) {
  for (let j = i + 1; j < todosOsPersonagens.length; j++) {
    const p1 = todosOsPersonagens[i];
    const p2 = todosOsPersonagens[j];

    console.log(`Comparando ${descricaoSimples(p1)} vs ${descricaoSimples(p2)}`);

    for (const attr of atributos) {
      const v1 = Number(p1[attr]);
      const v2 = Number(p2[attr]);

      if (isNaN(v1) || isNaN(v2)) {
        console.warn(`Atributo ${attr} não é numérico para um dos personagens.`);
        continue;
      }

      if (v1 > v2) {
        console.log(`- ${attr}: ${p1.Nome} vence (${v1} > ${v2})`);
      } else if (v2 > v1) {
        console.log(`- ${attr}: ${p2.Nome} vence (${v2} > ${v1})`);
      } else {
        console.log(`- ${attr}: empate (${v1} = ${v2})`);
      }
    }

    console.log("");
  }
}