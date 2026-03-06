import {Empresa,Cliente,Telefone,Endereco} from "./cadastro.js"

const emp = new Empresa("Tech","12.345","Centro")

emp.addTel(new Telefone("17","9999"))
emp.addTel(new Telefone("17","8888"))

function novo(nome,cpf){
  const c=new Cliente(nome,cpf,new Endereco("Rua A","Rio Preto"))
  c.addTel(new Telefone("17","7777"))
  c.addTel(new Telefone("17","6666"))
  return c
}

emp.addCliente(novo("Ana","111"))
emp.addCliente(novo("Bruno","222"))
emp.addCliente(novo("Carlos","333"))
emp.addCliente(novo("Marina","444"))
emp.addCliente(novo("Pedro","555"))

emp.descricao()