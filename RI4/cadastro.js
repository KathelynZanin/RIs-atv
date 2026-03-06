export class Telefone{
  constructor(ddd,numero){ this.ddd=ddd; this.numero=numero }
}

export class Endereco{
  constructor(rua,cidade){ this.rua=rua; this.cidade=cidade }
}

export class Cliente{
  #cpf
  constructor(nome,cpf,endereco){
    this.nome=nome; this.#cpf=cpf; this.endereco=endereco; this.telefones=[]
  }
  getCpf(){ return this.#cpf }
  nomeMai(){ return this.nome.toUpperCase() }
  nomeMin(){ return this.nome.toLowerCase() }
  addTel(t){ this.telefones.push(t) }
  descricao(){ return `${this.nome} | CPF: ${this.#cpf}` }
}

export class Empresa{
  #cnpj
  constructor(nome,cnpj,endereco){
    this.nome=nome; this.#cnpj=cnpj; this.endereco=endereco
    this.telefones=[]; this.clientes=[]
  }
  getCnpj(){ return this.#cnpj }
  nomeMai(){ return this.nome.toUpperCase() }
  nomeMin(){ return this.nome.toLowerCase() }
  addTel(t){ this.telefones.push(t) }
  addCliente(c){ this.clientes.push(c) }

  descricao(){
    console.log(`Empresa: ${this.nome} | CNPJ: ${this.#cnpj}`)
    this.clientes.forEach(c=>console.log(c.descricao()))
  }
}