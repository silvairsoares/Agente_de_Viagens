
const Model = require('../models/cliente-model');
var express = require('express');

class ClienteMemoryDAO 
{
  constructor () 
  {
    this.data = new Map()

    this.createCliente(1, 'Rafael Gonzaga', 'Rua Periata', 'Programador','22/07/1992');
    this.createCliente(2, 'Rafael Borges', 'Rua T15', 'Programador','02/01/1984');
    this.createCliente(3, 'Silvar', 'Av. 125', 'Programador','15/06/1980');
    this.createCliente(4, 'Humberto Santana', 'R. Mariana 120', 'Programador','29/11/1991');
    this.createCliente(5, 'Junior', 'Av. T63', 'Programador','06/04/1982');
  }

  createCliente (id, Nome, Endereco, Profissao, Nascimento) 
  {
    this.data.set(id, new Model(id, Nome, Endereco, Profissao, Nascimento))
  }

  retrieveAll () 
  {
    return Array.from(this.data.values())
  }

  retrieve (id) 
  {
    if (this.data.has(id)) 
    {
      return this.data.get(id)
    } 
    else 
    {
      throw new Error(`Cliente with id ${id} not found`)
    }
  }

  update (id, data) 
  {
    if (this.data.has(id)) 
    {
      const cliente = this.data.get(id)
      cliente.Nome = data.Nome
      cliente.Endereco = data.Endereco
      cliente.Profissao = data.Profissao
      cliente.Nascimento = data.Nascimento
      return this.retrieve(cliente.id)
    } 
    else 
    {
      throw new Error(`Cliente with id ${id} not found`)
    }
  }

  create (cliente) 
  {
    if (this.data.has(cliente.id)) 
    {
      throw new Error(`An Cliente with id ${cliente.id} already exists`)
    } 
    else 
    {
      this.createCliente(cliente.id, cliente.Nome, cliente.Endereco, cliente.Profissao, cliente.Nascimento)
      return this.retrieve(cliente.id)
    }
  }
}
module.exports = ClienteMemoryDAO;