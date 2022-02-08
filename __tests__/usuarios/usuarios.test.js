const assert = require('assert');
const request = require("supertest");
const app = require("../../Server");

describe('Usuarios teste de rotas', () => {

    it('GET /usuarios', async () => {
        const test = await request(app).get('/usuarios')

        assert.equal(200, test.status)
    })

    it('POST /usuarios', async () => {
        const params = {
            cpf:`009.${Math.floor(Math.random() * 0x100)}.400-61`,
            nome:'Fernando Nunes',
            cnh:`${Math.floor(Math.random() * 0x100000000)}`,
        }

        const test = await request(app).post('/usuarios').send(params);
        assert.equal(200, test.status)

        // assert.equal('Sucesso', test.json)
    })

    it('DELETE /usuarios/:idUser', async () => {
        const params = {
            idUser: '058.866.400-61'
        }

        const test = await request(app).delete(`/usuarios/${params.idUser}`)
        assert.equal(200, test.status);
    })
})