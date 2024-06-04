const { Medida } = require("../models/medida");

// Criar uma nova medida
exports.createMedida = async (req, res) => {
  try {
    const medida = await Medida.create(req.body);
    res.status(201).json(medida);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar medida" });
  }
};

// Listar todas as medidas
exports.getMedidas = async (req, res) => {
  try {
    const medidas = await Medida.findAll();
    res.status(200).json(medidas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar medidas" });
  }
};

// Obter uma medida específica
exports.getMedidaById = async (req, res) => {
  try {
    const medida = await Medida.findByPk(req.params.id);
    if (medida) {
      res.status(200).json(medida);
    } else {
      res.status(404).json({ error: "Medida não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao obter medida" });
  }
};

// Atualizar uma medida existente
exports.updateMedida = async (req, res) => {
  try {
    const medida = await Medida.findByPk(req.params.id);
    if (medida) {
      await medida.update(req.body);
      res.status(200).json(medida);
    } else {
      res.status(404).json({ error: "Medida não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar medida" });
  }
};

// Excluir uma medida existente
exports.deleteMedida = async (req, res) => {
  try {
    const medida = await Medida.findByPk(req.params.id);
    if (medida) {
      await medida.destroy();
      res.status(200).json({ message: "Medida excluída com sucesso" });
    } else {
      res.status(404).json({ error: "Medida não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir medida" });
  }
};
