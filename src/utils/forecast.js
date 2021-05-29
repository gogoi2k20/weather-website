const request = require('request')

const forecast = (latitude, longitude, callback) => {
   // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude
    const url='http://api.weatherstack.com/current?access_key=61ce5029d27b94e49b589d09e774ee3b&query='+latitude+','+longitude;
    //61ce5029d27b94e49b589d09e774ee3b
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast