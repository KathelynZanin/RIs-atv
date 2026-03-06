class Telefone {
  constructor(ddd, numero) {
    this.ddd = ddd
    this.numero = numero
  }

  getDDD() { return this.ddd }
  setDDD(ddd) { this.ddd = ddd }

  getNumero() { return this.numero }
  setNumero(numero) { this.numero = numero }

  getDDDMaiusculo() { return this.ddd.toString().toUpperCase() }
  getDDDMinusculo() { return this.ddd.toString().toLowerCase() }
}

class Endereco {
  constructor(rua, numero, cidade, estado) {
    this.rua = rua
    this.numero = numero
    this.cidade = cidade
    this.estado = estado
  }

  getRua() { return this.rua }
  setRua(rua) { this.rua = rua }

  getRuaMaiusculo() { return this.rua.toUpperCase() }
  getRuaMinusculo() { return this.rua.toLowerCase() }
}

class Cliente {
  constructor(nome, telefone, endereco) {
    this.nome = nome
    this.telefone = telefone
    this.endereco = endereco
  }

  getNome() { return this.nome }
  setNome(nome) { this.nome = nome }

  getNomeMaiusculo() { return this.nome.toUpperCase() }
  getNomeMinusculo() { return this.nome.toLowerCase() }

  getDados() {
    return `
Cliente: ${this.nome}
Telefone: (${this.telefone.getDDD()}) ${this.telefone.getNumero()}
Endereço: ${this.endereco.getRua()}, ${this.endereco.numero} - ${this.endereco.cidade}/${this.endereco.estado}
`
  }
}

/* -----------------------------
CRIANDO CLIENTES
------------------------------*/

const cliente1 = new Cliente(
  "Carlos",
  new Telefone("17", "99999-1111"),
  new Endereco("Rua A", 100, "Rio Preto", "SP")
)

const cliente2 = new Cliente(
  "Ana",
  new Telefone("11", "98888-2222"),
  new Endereco("Rua B", 200, "São Paulo", "SP")
)

const cliente3 = new Cliente(
  "Bruno",
  new Telefone("21", "97777-3333"),
  new Endereco("Rua C", 300, "Rio de Janeiro", "RJ")
)

/* -----------------------------
ARRAY DE CLIENTES
------------------------------*/

const clientes = [cliente1, cliente2, cliente3]

/* -----------------------------
ORDENAR CLIENTES POR NOME
------------------------------*/

function ordenarClientes(lista) {
  return [...lista].sort((a, b) =>
    a.getNome().localeCompare(b.getNome())
  )
}

const clientesOrdenados = ordenarClientes(clientes)

/* -----------------------------
TESTE
------------------------------*/

clientesOrdenados.forEach(cliente => {
  console.log(cliente.getDados())
})