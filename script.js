let apiKey = "f89141f66a1e29c7c5d1b47ffdcbacf2"

let cityName = "Austin"

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
.then(function (response){
return response.json()

})
.then(function (cityData){

    console.log(cityData[0].lat);
    console.log(cityData[0].lon);
    return {lat:cityData[0].lat, lon:cityData[0].lon};
})
.then (function(latLonData){
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLonData.lat}&lon=${latLonData.lon}&appid=${apiKey}`)
    .then(function(response){
        return response.json()
    })
    .then(function(weatherData){
        console.log(weatherData)
    })
})