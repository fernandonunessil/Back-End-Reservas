const assert = require("assert");
const request = require("supertest");
const app = require("../../Server");

describe("Historico de uso Rotas", () => {
  it("GET /historico", async () => {
    const test = await request(app).get("/historico");
    assert.equal(200, test.status);
  });

  it("POST /historico", async () => {
    const params = {
      user: "Fernando Nunes",
      car: "INH6F71",
      data: "25/01/2022",
      hora: '12:00',
      km: 40.0,
    };

    const test = await request(app).post("/historico").send(params);
    assert.equal(200, test.status);
  });

  it("DELETE /historico/:idItem", async () => {
    const params = {
      idItem: 1,
    };
    const test = await request(app).delete(`/historico/${params.idItem}`);  
    assert.equal(200, test.status);
  });
});
