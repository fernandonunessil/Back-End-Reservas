const express = require('express');
const app = express();
const mysql = require('../../conect');

const getUsuario = () => {
    return app.get('/usuarios', async (req, res) => {
        try {
            const query = await mysql.mysql("SELECT * FROM usuarios")
            res.status(200).json(query)
        } catch (error) {
            res.status(400).json(error)
        }
    })
}

const postUsuario = () => {
    return app.post('/usuarios', async (req, res) => {
        try {
            const query = await mysql.mysql(`INSERT INTO usuarios (cpf, nome, cnh) VALUES ('${req.body.cpf}', '${req.body.nome}', '${req.body.cnh}')`)
            res.status(200).json({mensagem: 'Sucesso'})
        } catch (error) {
            res.status(400).json(error)
        }
    })
}

const deleteUsuario = () => {
    return app.delete('/usuarios/:idUser', async (req, res) => {
        try {
            const query = await mysql.mysql(`DELETE FROM usuarios WHERE cpf = '${req.params.idUser}'`)
            res.status(200).json({mensagem: 'Sucesso'})
        } catch (error) {
            res.status(400).json(error)
        }
    })
}

exports.getUsuario = getUsuario;
exports.postUsuario = postUsuario;
exports.deleteUsuario = deleteUsuario;