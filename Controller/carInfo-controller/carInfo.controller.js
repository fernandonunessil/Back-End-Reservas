const express = require('express');
const app = express();
const mysql = require('../../conect');

const getCarInfo = () => {
    return app.get('/carInfo', async (req, res) => {
        try {
            const query = await mysql.mysql('SELECT * FROM infoCarros')

            res.status(200).json(query)
        } catch (error) {
            res.status(400).json(error)
        }
    })
}

const postCarInfo = () => {
    return app.post('/carInfo', async(req, res) => {
        try {
            const query = await mysql.mysql(`INSERT INTO infocarros (modelo, km) VALUES ('${req.body.modelo}','${req.body.km}')`)
            res.status(200).json({mensagem: 'Sucesso'})
        } catch (error) {
            res.status(400).json(error)
        }
    })
}

const deleteCarInfo = () => {
    return app.delete('/carInfo/:idInfo', async(req, res) => {
        try {
            const query = await mysql.mysql(`DELETE FROM infocarros WHERE idinfoCarros = '${req.params.idInfo}'`)
            res.status(200).json({mensagem: 'Sucesso'})
        } catch (error) {
            res.status(400).json(error)
        }
    })
}

exports.getCarInfo = getCarInfo;
exports.postCarInfo = postCarInfo;
exports.deleteCarInfo = deleteCarInfo;