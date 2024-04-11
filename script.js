import { API_KEY } from './key.js';

const cityName = document.querySelector('#city');
const button = document.querySelector('button');

button.addEventListener('click', function () {
  getWeatherInfo(cityName.value);
});

async function getWeatherInfo(City) {
  if (cityName.value.length === 0) {
    alert('City Name Required');
    return;
  }

  try {
    const response =
      await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${City}&aqi=yes
  `);

    // if invalvid search query
    if (!response.ok) {
      alert('No such location');
      return;
    }

    const weatherData = await response.json();

    console.log(weatherData);
    return weatherData;
  } catch (err) {
    console.log('errrrr');
  }
}
