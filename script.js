const apiKey = "c9a41c204f71f6c5171dcc039a4ef5de";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon")



async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    var data = await response.json();

    if (response.status==404){
        document.querySelector(".weather").style.display = "none";
    document.querySelector(".err").style.display = "block";
    } 

    document.querySelector(".city").textContent = data.name;

    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").textContent = data.main.humidity + "%";

    document.querySelector(".Wind_Speed").textContent = data.wind.speed + "km/h";

    if(data.weather[0].main == "Haze"){
        weatherIcon.src = "images/fog.png";
    }
        else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloudy.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/sun (Copy).png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".err").style.display = "none";
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    
 })
 document.body.addEventListener('keypress',(e) => {
    if(e.key === 'Enter'){
        checkWeather(searchBox.value);
    }
 })
