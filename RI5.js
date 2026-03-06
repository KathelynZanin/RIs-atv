class Telefone {
  constructor(ddd, numero) {
    this.ddd = ddd
    this.numero = numero
  }
}

class Endereco {
  constructor(rua, cidade, estado) {
    this.rua = rua
    this.cidade = cidade
    this.estado = estado
  }
}

class Cliente {
  constructor(nome, cpf, endereco) {
    this.nome = nome
    this.cpf = cpf
    this.endereco = endereco
    this.telefones = []
  }

  addTelefone(tel) {
    this.telefones.push(tel)
  }
}

class Empresa {
  constructor(nome, cnpj, endereco) {
    this.nome = nome
    this.cnpj = cnpj
    this.endereco = endereco
    this.telefones = []
    this.clientes = []
  }

  addTelefone(tel) {
    this.telefones.push(tel)
  }

  addCliente(cliente) {
    this.clientes.push(cliente)
  }

  imprimir() {
    console.log(`Empresa: ${this.nome}`)
    console.log(`CNPJ: ${this.cnpj}`)
    console.log(`Endereço: ${this.endereco.rua} - ${this.endereco.cidade}/${this.endereco.estado}`)

    console.log("\nTelefones:")
    this.telefones.forEach(t => {
      console.log(`(${t.ddd}) ${t.numero}`)
    })

    console.log("\nClientes:")
    this.clientes.forEach(c => {
      console.log(`${c.nome} | CPF: ${c.cpf}`)
    })
  }
}


/* TESTE */

const emp = new Empresa(
  "Tech Solutions",
  "12.345.678/0001-00",
  new Endereco("Av Central", "Rio Preto", "SP")
)

emp.addTelefone(new Telefone("17","9999-1111"))
emp.addTelefone(new Telefone("17","9888-2222"))

const cliente1 = new Cliente(
  "Ana",
  "111.111.111-11",
  new Endereco("Rua A","Rio Preto","SP")
)

cliente1.addTelefone(new Telefone("17","9777-1111"))
cliente1.addTelefone(new Telefone("17","9666-2222"))

emp.addCliente(cliente1)

emp.imprimir()