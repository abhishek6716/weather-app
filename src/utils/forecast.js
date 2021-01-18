const request = require('request');

/*
const url = 'http://api.weatherapi.com/v1/forecast.json?key=441e0c5b91a9491a9ce45943211401&q=48.8567,2.3508';
request({url: url, json: true}, (error, response) => {
    // const data = JSON.parse(response.body);
    // console.log(data.current);
    // console.log(response.body.current);
    if(error){
        console.log('Unable to connect to wheather service!');
    }
    else if(response.body.error){
        console.log('Unable to find location!');
    }
    else{
        console.log(response.body.current.condition.text + '. It is currently ' + response.body.current.temp_c + ' degree celcius out. There is a ' + response.body.current.precip_mm + '% chance of rain.');
    }
})
*/

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/forecast.json?key=441e0c5b91a9491a9ce45943211401&q=' + latitude +','+ longitude;
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to wheather service!', undefined);
        }
        else if(body.error){
            callback('Unable to find location!', undefined);
        }
        else{
            callback(undefined, body.current.condition.text + '. It is currently ' + body.current.temp_c + ' degree celcius out. There is a ' + body.current.precip_mm + '% chance of rain.');
        }
    })
}

module.exports = forecast;