const assert = require('assert');
const { send } = require('express/lib/response');
const request = require('supertest');
const app = require('../../Server');

describe("Reservas teste de Rotas", () => {

    it('GET /reservas', async () => {
        const test = await request(app).get('/reservas')

        assert.equal(200, test.status)
    })

    it('POST /reservas', async () => {
        const params = {
            dataHora: '25/01/2022|15:08',
            user:'Fernando Nunes',
            placa:'INH6F71'
        }

        const test = await request(app).post('/reservas').send(params)

        assert.equal(200, test.status)
    })

    it('DELETE /reservas', async () => {
        const params = {
            idReserva: 1
        }

        const test = await request(app).delete(`/reservas/${params.idReserva}`)

        assert.equal(200, test.status)
    })

})