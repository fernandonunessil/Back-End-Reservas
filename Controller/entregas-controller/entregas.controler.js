const express = require('express');
const app = express();
const mysql = require('../../conect');

const postChegada = () => {
    return app.post('/entregas', async (req, res) => {
        try {
            const query = await mysql.mysql(`INSERT INTO entregas (veiculo, motorista, data, hora, quilometragem) VALUES ('${req.body.modelo.value}', '${req.body.motorista}', '${req.body.entregaData}', '${req.body.horaEntrega}', '${req.body.quilometragem}')`)
            res.status(200).json({mensagem: 'sucesso'});
        } catch (error) {
            res.status(400).json(error);
        }
    })
}

exports.postChegada = postChegada;