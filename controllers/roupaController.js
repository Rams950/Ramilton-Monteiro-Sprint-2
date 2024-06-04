const { Roupa } = require("../models/roupas");

// Criar uma nova roupa
exports.createRoupa = async (req, res) => {
  try {
    const roupa = await Roupa.create(req.body);
    res.status(201).json(roupa);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar roupa" });
  }
};

// Listar todas as roupas
exports.getRoupas = async (req, res) => {
  try {
    const roupas = await Roupa.findAll();
    res.status(200).json(roupas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar roupas" });
  }
};

// Obter uma roupa específica
exports.getRoupaById = async (req, res) => {
  try {
    const roupa = await Roupa.findByPk(req.params.id);
    if (roupa) {
      res.status(200).json(roupa);
    } else {
      res.status(404).json({ error: "Roupa não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter roupa" });
  }
};

// Atualizar uma roupa existente
exports.updateRoupa = async (req, res) => {
  try {
    const roupa = await Roupa.findByPk(req.params.id);
    if (roupa) {
      await roupa.update(req.body);
      res.status(200).json(roupa);
    } else {
      res.status(404).json({ error: "Roupa não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar roupa" });
  }
};

// Excluir uma roupa existente
exports.deleteRoupa = async (req, res) => {
  try {
    const roupa = await Roupa.findByPk(req.params.id);
    if (roupa) {
      await roupa.destroy();
      res.status(200).json({ message: "Roupa excluída com sucesso" });
    } else {
      res.status(404).json({ error: "Roupa não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir roupa" });
  }
};
