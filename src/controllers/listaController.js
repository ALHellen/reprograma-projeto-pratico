const listas = require("../model/lista.json")

exports.get = (req, res) => {
    const lista = listas.map(item => {
        return item
    })
    res.status(200).send(lista)
}

exports.getById = (req, res) => {
    const id = req.params.id
    const lista = listas.find(lista => lista.id = id)
    delete lista.id
    res.status(200).send(lista)
}