const request = require('request-promise');
const API_KEY = '04c9039ed9e5a126cb61e6b4687d9c71';

class Weather {
    static retrieveByCity(city,callback) {
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
            json: true
        }).then((res) => {
            callback(res);
        }).catch((err) => {
            console.log(err);
            callback({ error: 'Could not reach OpenWeatherMap API'});
        });
    }
}

module.exports = Weather;