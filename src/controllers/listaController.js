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

exports.getByConcluido = (req, res) => { 
    let concluido = listas.filter((busca) => {
    return busca.concluido === 'true';
      })

      console.log(concluido,"SEI LA")
      res.status(200).send(concluido)
}

exports.getByColab = (req, res) => { 
    const colab = req.params.colaboradora
    let concluido = listas.filter((busca) => { return busca.colaboradora == colab })

    console.log(concluido,"SEI LA")
    res.status(200).send(concluido)
    }

    exports.getData = (req,res) => {         
        let concluido = listas.sort((a,b) => { return a.dataConclusao > b.dataConclusao})
        console.log(concluido,"SEI LA")
       res.status(200).send(concluido)
     }
