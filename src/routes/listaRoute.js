const express = require("express")
const router = express.Router()
const controller = require("../controllers/listaController")

//ROTAS TAMBÉM SÃO LIDAS EM SEQUENCIA --- WARNING

router.get("/", controller.get)
router.get("/:data", controller.getData)
router.get("/:colaboradora", controller.getByColab)
router.get("/:concluido", controller.getByConcluido)
router.get("/:id", controller.getById)

module.exports = router
