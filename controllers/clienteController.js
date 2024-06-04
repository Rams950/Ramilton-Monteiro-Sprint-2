const { Cliente } = require("../models/Cliente");

// Criar um novo cliente
exports.createCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar cliente" });
  }
};

// Listar todos os clientes
exports.getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar clientes" });
  }
};

// Obter um cliente específico
exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ error: "Cliente não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter cliente" });
  }
};

// Atualizar um cliente existente
exports.updateCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      await cliente.update(req.body);
      res.status(200).json(cliente);
    } else {
      res.status(404).json({ error: "Cliente não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar cliente" });
  }
};

// Excluir um cliente existente
exports.deleteCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (cliente) {
      await cliente.destroy();
      res.status(200).json({ message: "Cliente excluído com sucesso" });
    } else {
      res.status(404).json({ error: "Cliente não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir cliente" });
  }
};
