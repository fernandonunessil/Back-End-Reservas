const express = require("express");
const app = express();
const mysql = require("../../conect");

const getReservas = () => {
  return app.get("/reservas", async (req, res) => {
    try {
      const query = await mysql.mysql("SELECT * FROM reservas");
      res.status(200).json(query);
    } catch (error) {
      res.status(400).json(error);
    }
  });
};

const postReservas = () => {
  return app.post("/reservas", async (req, res) => {
    try {
      const query = await mysql.mysql(
        `INSERT INTO reservas (data, nome, placa, hora, kilometragem) VALUES ('${req.body.datareserva}', '${req.body.usuario}', '${req.body.modelo.value}','${req.body.horareserva}', '${req.body.kilometragem}')`
      );
      res.status(200).json({ mensagem: "Sucesso" });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  });
};

const deleteReservas = () => {
  return app.delete("/reservas/:idReserva", async (req, res) => {
    try {
      const query = await mysql.mysql(
        `DELETE FROM reservas WHERE idreserva = '${req.params.idReserva}'`
      );
      res.status(200).json({ mensagem: "Sucesso" });
    } catch (error) {
      res.status(400).json(error);
    }
  });
};

exports.getReservas = getReservas;
exports.postReservas = postReservas;
exports.deleteReservas = deleteReservas;
