const listas = require("../model/lista.json")

exports.get = (req, res) => {
    const lista = listas.map(item => {
        return item
    })
    res.status(200).send(lista)
}

exports.getById = (req, res) => {
    const id = req.params.id
    const list = listas.find(list => list.id == id)
    // delete lista.id
    console.log(id,"SEI LA")
    res.status(200).send(list)
}




