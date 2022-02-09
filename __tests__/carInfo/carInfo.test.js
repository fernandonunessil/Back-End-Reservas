const assert = require('assert');
const request = require('supertest');
const app = require('../../Server');

describe('infoCarros teste de Rotas', () => {

    it('GET /carInfo', async () => {
        const test = await request(app).get('/carInfo')
        
        assert.equal(200, test.status)
    })

    it('POST /carInfo', async () => {
        const params = {
            modelo:'voyage g6',
            km:138.450
        }

        const test = await request(app).post('/carInfo').send(params)

        assert.equal(200, test.status)
    })

    it('DELETE /carInfo', async () => {
        const params = {
            id: 2
        }

        const test = await request(app).delete(`/carInfo/${params.id}`)

        assert.equal(200, test.status)
    })
})