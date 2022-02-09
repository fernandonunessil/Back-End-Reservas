const express = require("express");
const app = express();
const mysql = require("../../conect");

const getHistorico = () => {
  return app.get("/historico", async (req, res) => {
    try {
      const query = await mysql.mysql("SELECT * FROM historico_de_uso");
      res.status(200).json(query);
    } catch (error) {
      res.status(400).json(query);
    }
  });
};

const postHistorico = () => {
  return app.post("/historico", async (req, res) => {
    try {
      const query = await mysql.mysql(
        `INSERT INTO hisotrico (nome, modelo, placa, data, kilometragem, hora) VALUES ('${req.body.user}', '${req.body.car}', '${req.body.data}', '${req.body.km}')`
      );
      res.status(200).json(query);
    } catch (error) {
      res.status(400).json(error);
    }
  });
};

const deleteHistorico = () => {
  return app.delete("/historico/:idItem", async (req, res) => {
    try {
      const query = await mysql.mysql(
        `DELETE FROM historico_de_uso WHERE id = '${req.params.idItem}'`
      );
      res.status(200).json({ mensagem: "Sucesso" });
    } catch (error) {
      res.status(400).json(error);
    }
  });
};

exports.getHistorico = getHistorico;
exports.postHistorico = postHistorico;
exports.deleteHistorico = deleteHistorico;
