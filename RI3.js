class Telefone {
  constructor(ddd, numero) {
    this.ddd = ddd
    this.numero = numero
  }
}

class Endereco {
  constructor(rua, cidade) {
    this.rua = rua
    this.cidade = cidade
  }
}

class Cliente {
  #cpf
  constructor(nome, cpf, endereco) {
    this.nome = nome
    this.#cpf = cpf
    this.endereco = endereco
    this.telefones = []
  }

  getCpf() { return this.#cpf }
  nomeMaiusculo() { return this.nome.toUpperCase() }
  nomeMinusculo() { return this.nome.toLowerCase() }

  addTel(t) { this.telefones.push(t) }

  descricao() {
    return `${this.nome} | CPF: ${this.#cpf}`
  }
}

class Empresa {
  #cnpj
  constructor(nome, cnpj, endereco) {
    this.nome = nome
    this.#cnpj = cnpj
    this.endereco = endereco
    this.telefones = []
    this.clientes = []
  }

  getCnpj() { return this.#cnpj }
  nomeMaiusculo() { return this.nome.toUpperCase() }
  nomeMinusculo() { return this.nome.toLowerCase() }

  addTel(t) { this.telefones.push(t) }
  addCliente(c) { this.clientes.push(c) }

  descricao() {
    console.log(`Empresa: ${this.nome} | CNPJ: ${this.#cnpj}`)
    console.log("Clientes:")
    this.clientes.forEach(c => console.log(c.descricao()))
  }
}


/* TESTE */

const empresa = new Empresa(
  "Tech",
  "12.345.678/0001-00",
  new Endereco("Av Central", "Rio Preto")
)

empresa.addTel(new Telefone("17","9999-1111"))
empresa.addTel(new Telefone("17","9888-2222"))

function novoCliente(nome, cpf){
  const c = new Cliente(nome, cpf, new Endereco("Rua A","Rio Preto"))
  c.addTel(new Telefone("17","9777-1111"))
  c.addTel(new Telefone("17","9666-2222"))
  return c
}

empresa.addCliente(novoCliente("Ana","111"))
empresa.addCliente(novoCliente("Bruno","222"))
empresa.addCliente(novoCliente("Carlos","333"))
empresa.addCliente(novoCliente("Marina","444"))
empresa.addCliente(novoCliente("Pedro","555"))

empresa.descricao()