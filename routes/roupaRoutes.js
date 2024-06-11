// routes/roupaRoutes.js

const express = require("express");
const router = express.Router();
const roupaController = require("../controllers/roupaController");

router.post("/newRoupas", roupaController.createRoupa);

router.get("/roupas", roupaController.getRoupas);

router.get("/roupas/:id", roupaController.getRoupaById);

router.put("/roupas/:id", roupaController.updateRoupa);

router.delete("/roupas/:id", roupaController.deleteRoupa);

module.exports = router;
