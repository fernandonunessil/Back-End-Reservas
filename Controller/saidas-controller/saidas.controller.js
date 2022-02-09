const express = require('express');
const app = express();
const mysql = require("../../conect");

const postSaida = () => {
    return app.post('/saida', async (req, res) => {
        try {
            const query = await mysql.mysql(`INSERT INTO saida (modelo, motorista, quilometragem, data, hora) VALUE ('${req.body.modelo.value}', '${req.body.motorista}', '${req.body.quilometragem}', '${req.body.data}' ,'${req.body.hora}')`);
            res.status(200).json({mensagem: 'Sucesso'});
        } catch (error) {
            res.status(400).json(error);    
        }
    })
}

exports.postSaida = postSaida;