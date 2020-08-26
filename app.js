const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const colors = require('colors');
const lugar = require('./location/location')


lugar.getClimaLugar(argv.direccion).then((resp) => {
        console.log(`*** Clima de ${argv.direccion}, ${resp.pais} ***`.green);
        console.log(`*** Temperatura actual ${resp.tempActual} ***`.green);
        console.log(`*** Temperatura mínima ${resp.tempMinima} ***`.green);
        console.log(`*** Temperatura máxima ${resp.tempMaxima} ***`.green);
    })
    .catch((err) => {
        console.log(`No se pudo determinar el clima de ${argv.direccion}`), err;
    });