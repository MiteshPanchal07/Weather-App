const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '245ce5d6ddmsh2634790e81cfe75p14899bjsnb3b545c5845e',
        'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-api99.p.rapidapi.com/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            temp.innerHTML = (response.main.temp - 273.15).toFixed(2);  // Convert from Kelvin to Celsius
            temp2.innerHTML = (response.main.temp - 273.15).toFixed(2);
            feels_like.innerHTML = (response.main.feels_like - 273.15).toFixed(2);
            min_temp.innerHTML = (response.main.temp_min - 273.15).toFixed(2);
            max_temp.innerHTML = (response.main.temp_max - 273.15).toFixed(2);

            // Access and display the humidity
            humidity.innerHTML = response.main.humidity;
            humidity2.innerHTML = response.main.humidity;

            // Access and display wind information
            wind_speed.innerHTML = response.wind.speed;
            wind_speed2.innerHTML = response.wind.speed;
            wind_degrees.innerHTML = response.wind.deg;

            // Access and display sunrise and sunset times
            sunrise.innerHTML = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
            sunset.innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
        })
        .catch(err => {
            console.error('Error:', err);
            cityName.innerHTML = "City not found";
            alert("City not found or API error. Please try again.");
        });
}

const submit = document.getElementById("submit");
const city = document.getElementById("city");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const temp2 = document.getElementById("temp2");
const feels_like = document.getElementById("feels_like");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const humidity = document.getElementById("humidity");
const humidity2 = document.getElementById("humidity2");
const wind_speed = document.getElementById("wind_speed");
const wind_speed2 = document.getElementById("wind_speed2");
const wind_degrees = document.getElementById("wind_degrees");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (city.value.trim() !== "") {
        getWeather(city.value);
    } else {
        alert("Please enter a city name");
    }
});

// Also trigger search when Enter key is pressed
city.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        if (city.value.trim() !== "") {
            getWeather(city.value);
        } else {
            alert("Please enter a city name");
        }
    }
});

// Load default city on page load
document.addEventListener("DOMContentLoaded", () => {
    getWeather("Ahmedabad");
});
