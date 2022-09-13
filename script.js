let apiKey = "f89141f66a1e29c7c5d1b47ffdcbacf2"
let searchInput = document.querySelector("#searchInput")
let searchForm = document.querySelector("#search-form")
let button = document.querySelector("#searchButton")

console.log(searchForm)

function apiCallOne(userInput){
   
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&appid=${apiKey}`
    fetch(url)
    
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
        console.log("weatherData",weatherData)
        currentWeather(weatherData)
    })
})
}

function handleFormSubmit(event){
    event.preventDefault()
    
    let userInput = searchInput.value.trim()
    console.log(userInput)
    apiCallOne(userInput);
    
}

// find isue on line 18 a bad return possibly 
searchForm.addEventListener( "submit" ,handleFormSubmit)

function currentWeather (weatherData){
    let cityName = document.querySelector("#cityName")
    let temp = document.querySelector("#temp")
    let tempPos = document.querySelector("#feelsLike")
    let max = document.querySelector("#max")
    let min = document.querySelector("#min")
    cityName.textContent = weatherData.city.name
    temp.textContent = weatherData.list[0].main.temp
    tempPos.textContent = weatherData.list[0].main.feels_like
    max.textContent = weatherData.list[0].main.temp_max
    min.textContent = weatherData.list[0].main.temp_min


    


    


}



//fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
//.then(function (response){
//return response.json()

//})
///.then(function (cityData){

   // console.log(cityData[0].lat);
    //console.log(cityData[0].lon);
    //return {lat:cityData[0].lat, lon:cityData[0].lon};
//})
//.then (function(latLonData){
  //  return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latLonData.lat}&lon=${latLonData.lon}&appid=${apiKey}`)
   // .then(function(response){
        //return response.json()
    //})
    //.then(function(weatherData){
    //    console.log(weatherData)
    //})
//})






//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city