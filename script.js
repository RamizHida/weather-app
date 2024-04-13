const cityName = document.querySelector('#city');
const button = document.querySelector('button');
const API_KEY = '4a73969e5717496c81b74822241104';

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

    condition.innerHTML = weatherData.current.condition.text;
    location.innerHTML = `${weatherData.location.name}, ${weatherData.location.country}`;
    temp.innerHTML = `${weatherData.current.temp_c} °C`;
    windValue.innerHTML = `${weatherData.current.wind_kph} kpm`;
    humidityValue.innerHTML = `${weatherData.current.humidity}%`;

    // shorten date string to only time
    dataFetchedValue.innerHTML = weatherData.current.last_updated.slice(11);
    conditionIcon.src = weatherData.current.condition.icon;
    condition.appendChild(conditionIcon);
    container.style.display = 'block';

    return weatherData;
  } catch (err) {
    console.log('error');
  }
}

const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
// constainer.

const topSec = document.createElement('div');
topSec.classList.add('top-sec');

const bottomSec = document.createElement('div');
bottomSec.classList.add('bottom-sec');

container.append(topSec);
container.append(bottomSec);

const condition = document.createElement('div');
condition.classList.add('bottom-sec__container', 'increase-font');
condition.innerHTML = 'condition';

const conditionIcon = document.createElement('img');

const temp = document.createElement('h1');
temp.style.marginLeft = '3rem';
temp.innerHTML = 'temp';

const location = document.createElement('h3');
location.innerHTML = 'loca';

topSec.appendChild(condition);
topSec.appendChild(temp);
topSec.appendChild(location);

// bottomSec
const wind = document.createElement('h3');
const windValue = document.createElement('h3');
wind.innerHTML = 'Wind';
windValue.innerHTML = 22;
windValue.style.color = '#f0f8ff';
wind.appendChild(windValue);
wind.classList.add('bottom-sec__container');

const humidity = document.createElement('h3');
humidity.innerHTML = 'humidity';
const humidityValue = document.createElement('h3');
humidityValue.innerHTML = 55;
humidityValue.style.color = '#f0f8ff';
humidity.appendChild(humidityValue);
humidity.classList.add('bottom-sec__container');

const dateFetched = document.createElement('h3');
dateFetched.innerHTML = 'last updated';
const dataFetchedValue = document.createElement('h3');
dataFetchedValue.innerHTML = 'yesterday';
dataFetchedValue.style.color = '#f0f8ff';

dateFetched.appendChild(dataFetchedValue);
dateFetched.classList.add('bottom-sec__container');

bottomSec.appendChild(wind);
bottomSec.appendChild(humidity);
bottomSec.appendChild(dateFetched);
