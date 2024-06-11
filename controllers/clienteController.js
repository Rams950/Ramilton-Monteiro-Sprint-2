const Cliente = require("../models/Cliente");

// Criar um novo cliente
exports.postNewClient = async (req, res) => {
  const { nome, email, telefone, endereco } = req.body;
  try {
    //porque os o que mais pode diferir os clientes sao seus emails
    const existingClient = await Cliente.findOne({ where: { email } });

    if (existingClient) {
      return res.status(400).json({ msg: "Este cliente já existe" });
    }
    const newClient = await Cliente.create({ nome, email, telefone, endereco });
    res.status(200).json({ client: newClient });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Erro nas profundezas" });
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
