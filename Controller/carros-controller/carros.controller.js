const express = require("express");
const app = express();
const mysql = require("../../conect");

const getCars = () => {

  return app.get("/carros", async (req, res) => {
    try {
      const query = await mysql.mysql("SELECT * FROM carros");
      res.status(200).json(query);
    } catch (error) {
      res.status(400).json(error);
    }
  });

};

const postCars = () => {

  return app.post("/carros", async (req, res) => {
    try {
      const query = await mysql.mysql(`INSERT INTO carros (placa, modelo, url, km, ano) values ('${req.body.placa}', '${req.body.modelo}', '${req.body.url}', '${req.body.quilometragem}', '${req.body.anoveiculo}')`)

      res.status(200).json({mensagem: 'Sucesso'});
    } catch (error) {
      res.status(400).json(error);
    }
  })

}

const attStatusCar = () => {
  return app.post('/carros/:idCar', async (req, res) => {
    try {
      const query = await mysql.mysql(`UPDATE carros SET stats = '${req.body.status}' WHERE placa = '${req.params.idCar}'`)

      res.status(200).json({mensagem: 'Sucesso'})
    } catch (error) {
      res.status(400).json(error)
    } 
  })
}

const getFree = () => {
  return app.get('/carros/livres', async (req, res) => {
    try {
      const query = await mysql.mysql(`SELECT * FROM carros WHERE stats = 'livre'`)
      res.status(200).json(query)
    } catch (error) {
      res.status(400).json(error)
    }
  })
}

const getReserved = () => {
  return app.get('/carros/reservado', async (req, res) => {
    try {
      const query = await mysql.mysql('SELECT * FROM carros WHERE stats = "reservado"')
      res.status(200).json(query);
    } catch (error) {
      res.status(400).json(error);
    }
  })
}

const getIn_use = () => {
  return app.get('/carros/em_uso', async (req, res) => {
    try {
      const query = await mysql.mysql('SELECT * FROM carros WHERE stats = "em uso"')
      res.status(200).json(query);
    } catch (error) {
      res.status(400).json(error);
    }
  })
}

const deleteCars = () => {
  return app.delete('/carros/:idCar', async (req, res) => {
    try {
      const query = await mysql.mysql(`DELETE FROM carros WHERE placa = '${req.params.idCar}'`)
      
      res.status(200).json({mensagem: 'Sucesso'})
    } catch (error) {
      res.status(400).json(error)
      console.log(error)
    }
  })
}

exports.getCars = getCars;
exports.postCars = postCars;
exports.deleteCars = deleteCars;
exports.attStatusCar = attStatusCar;
exports.getFree = getFree;
exports.getReserved = getReserved;
exports.getIn_use = getIn_use;
