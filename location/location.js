const axios = require('axios');

const getClimaLugar = async(dir) => {

    const encodedURL = encodeURI(dir);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodedURL}&appid=67a368aeb269eeab5baaab5627bd6dff&units=metric`);


    return {
        tempActual: resp.data.main.temp,
        tempMinima: resp.data.main.temp_min,
        tempMaxima: resp.data.main.temp_max,
        pais: resp.data.sys.country
    };
    // const resp = await instance.get();

    // if (resp.data.Results.length === 0) {
    //     throw new Error(`No hay resultados para ${dir}`);
    // }

    // const data = resp.data.Results[0];
    // const direccion = data.name;
    // const lat = data.lat;
    // const lng = data.lng;

    // return {
    //     direccion,
    //     lat,
    //     lng
    // }
}

module.exports = {
    getClimaLugar
}