// routes/medidaRoutes.js

const express = require("express");
const medidaController = require("../controllers/medidaController");

const router = express.Router();

router.post("/newMedidas", medidaController.createMedida);

router.get("/medidas", medidaController.getMedidas);

router.get("/medidas/:id", medidaController.getMedidaById);

router.put("/medidas/:id", medidaController.updateMedida);

router.delete("/medidas/:id", medidaController.deleteMedida);

module.exports = router;
