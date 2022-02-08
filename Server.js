const express = require("express");
app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const carrosService = require("./Controller/carros-controller/carros.controller");

const usuarioService = require("./Controller/usuarios-controller/usuarios.controller");

const reservasService = require("./Controller/reservas-controller/reservas.controller");

const historicoService = require("./Controller/historico-controller/historico.controller");

const carInfoService = require('./Controller/carInfo-controller/carInfo.controller');

const entregasService = require('./Controller/entregas-controller/entregas.controler');

const saidasService = require('./Controller/saidas-controller/saidas.controller') ;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
  //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header("Access-Control-Allow-Origin", "*");
  //Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE");
  next();
});

// Carros Serviços

// GET /carros
app.use(carrosService.getCars());

//POST /carros
app.use(carrosService.postCars());

//DELETE /carros
app.use(carrosService.deleteCars());

// getFree /carros 
app.use(carrosService.getFree());

// getReserved /carros
app.use(carrosService.getReserved());

// getIn_use /carros
app.use(carrosService.getIn_use());

// Usuarios Serviços

//GET /usuarios
app.use(usuarioService.getUsuario());

//POST /usuarios
app.use(usuarioService.postUsuario());

//DELETE /usuarios
app.use(usuarioService.deleteUsuario());

// Reservas Serviços

//GET /reservas
app.use(reservasService.getReservas());

//POST /reservas
app.use(reservasService.postReservas());

//DELETE /reservas
app.use(reservasService.deleteReservas());

//AttStatus /reserva 
app.use(carrosService.attStatusCar());

//Historico de uso Serviços

//GET /historico
app.use(historicoService.getHistorico());

//POST /historico
app.use(historicoService.postHistorico());

//DELETE /historico 
app.use(historicoService.deleteHistorico())

// CarInfo Serviços

//GET /carInfo
app.use(carInfoService.getCarInfo());

//POST /carInfo
app.use(carInfoService.postCarInfo());

//DELETE /carInfo
app.use(carInfoService.deleteCarInfo());

// Entregas Service 

//POST /entregas
app.use(entregasService.postChegada());


// Saida Service 

//Post /saida 

app.use(saidasService.postSaida());



const port = 8847;

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

module.exports = app;
