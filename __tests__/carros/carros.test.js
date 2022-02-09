const assert = require('assert');
const request = require('supertest');
const app = require('../../Server');


describe('Carros teste de rotas', () => {

    it('GET /carros', async () => {
        const test = await request(app).get('/carros')

        assert.equal(200, test.status)
    })

    it('POST /carros', async () => {
        const params = {
            placa:`INHF${Math.floor(Math.random() * 0x10)}`,
            modelo:`Frontier Geração ${Math.floor(Math.random() * 0x10000)}`,
            url:'https://images.noticiasautomotivas.com.br/img/f/volkswagen_gol_power_2007.jpg',
            kilometragem:20.000,
        }

        const test = await request(app).post('/carros').send(params)


        assert.equal(200, test.status)
    })

    it('DELETE /carros', async () => {
        const params = {
            idCar:'INH6F71',
        }

        const test = await request(app).delete(`/carros/${params.idCar}`)

        assert.equal(200, test.status)

    })
})