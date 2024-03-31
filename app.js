const apikey = "a01ac27bfd67fddca3d8d03a991f0cd6"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector(".searching input");
const searchBtn = document.querySelector(".searching button");

const weatherIcon = document.querySelector(".weathericon");

async function getweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data)


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png"
    }
}

searchBtn.addEventListener("click", ()=>{
    getweather(searchBox.value);
})



