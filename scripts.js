let cityNameInput = document.querySelector('.container .search-box input');
let weatherInfoBox = document.querySelector('.container .weather-info-box');
let weather_img = document.querySelector('.container .weather-img img');
let weatherTemp = document.querySelector('.container .weather-info-box .temp');
let weatherMain = document.querySelector('.container .weather-info-box .weather_main_1');
let weatherDescrip = document.querySelector('.container .weather-info-box .weather_descrip');
let weatherLocation = document.querySelector('.container .weather-info-box .location');
let otherWeatherInfo = document.querySelector('.container .other-weather-info');

let apiKey = 'c86213a54431cacd993a66143d6fa89d';

cityNameInput.addEventListener('keyup', (e) => {
    if (e.key == 'Enter' && cityNameInput.value != '') {
            getWeatherInfo(cityNameInput.value)
    }
});

let getWeatherInfo = (cityName) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url).then(res => res.json()).then(data => {
        weather_img.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherMain.innerHTML = data.weather[0].main;
        weatherDescrip.innerHTML = data.weather[0].description;
        weatherLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`;
        weatherTemp.innerHTML = `${data.main.temp}&#176;`;

        otherWeatherInfo.innerHTML = `<div class="wind-speed">
                                    <span>Feels like</span>
                                    <p>${data.main.feels_like}&#176;</p>
                                    </div>
                                    <div class="min-temp">
                                        <span>Min Temp</span>
                                        <p>${data.main.temp_min}&#176;</p>
                                    </div>
                                    <div class="Humidity">
                                        <span>Humidity</span>
                                        <p>${data.main.humidity}%<p>
                                    </div>
                                    <div class="wind-speed">
                                        <span>Wind speed</span>
                                        <p>${data.wind.speed}Km/H</p>
                                    </div>
                                    <div class="max-temp">
                                        <span>Max temp</span>
                                        <p>${data.main.temp_max}°</p>
                                    </div>
                                    <div class="pressure">
                                        <span>Pressure </span>
                                        <p>${data.main.pressure}mbar</p>
                                    </div>`
    })
}

getWeatherInfo('San Francisco');