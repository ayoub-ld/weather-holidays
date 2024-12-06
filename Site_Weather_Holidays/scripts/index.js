//DOM
const body = document.querySelector("body");
const container = document.querySelector(".container");
const cardsContainer = document.querySelector(".cards-container");
const imageNames = [
  "brussels.webp",
  "paris.webp",
  "london.webp",
  "amsterdam.webp",
  "berlin.webp",
  "madrid.webp",
  "rome.webp",
  "vienna.webp",
  "prague.webp",
  "athens.webp",
  "casablanca.webp",
  "tokyo.webp",
  "newyork.webp",
  "sanfrancisco.webp",
  "rio.webp",
  "sydney.webp",
  "toronto.webp",
  "mexico.webp",
  "montreal.webp",
  "dubai.webp",
  "singapore.webp",
  "hongkong.webp",
  "shanghai.webp",
  "mumbai.webp",
  "beijing.webp",
  "seoul.webp",
  "taipei.webp",
  "bangkok.webp",
  "jakarta.webp",
  "busan.webp",
  "osaka.webp",
  "sapporo.webp",
  "cairo.webp",
];
//API
const URL_BRUSSELS =
  "api.openweathermap.org/data/2.5/forecast?lat=50.8480057238277&lon=4.350596629265394&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_PARIS =
  "api.openweathermap.org/data/2.5/forecast?lat=48.85681263225461&lon=2.2971889318265224&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_LONDON =
  "api.openweathermap.org/data/2.5/forecast?lat=51.5073219&lon=-0.1276474&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_AMSTERDAM =
  "api.openweathermap.org/data/2.5/forecast?lat=52.3745403&lon=4.897975505617977&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_BERLIN =
  "api.openweathermap.org/data/2.5/forecast?lat=52.5069312&lon=13.1445503&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_MADRID =
  "api.openweathermap.org/data/2.5/forecast?lat=40.4167047&lon=-3.7035825&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_ROME =
  "api.openweathermap.org/data/2.5/forecast?lat=41.8933203&lon=12.4829321&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_VIENNA =
  "api.openweathermap.org/data/2.5/forecast?lat=48.2083537&lon=16.3725042&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_PRAGUE =
  "api.openweathermap.org/data/2.5/forecast?lat=50.0874654&lon=14.4212535&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_ATHENS =
  "api.openweathermap.org/data/2.5/forecast?lat=37.9839412&lon=23.7283052&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_CASABLANCA =
  "api.openweathermap.org/data/2.5/forecast?lat=33.5950627&lon=-7.6187768&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_TOKYO =
  "api.openweathermap.org/data/2.5/forecast?lat=35.6828387&lon=139.7594549&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_NEWYORK =
  "api.openweathermap.org/data/2.5/forecast?lat=40.7127281&lon=-74.0060152&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_SANFRANCISCO =
  "api.openweathermap.org/data/2.5/forecast?lat=37.7790262&lon=-122.4199061&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_RIO =
  "api.openweathermap.org/data/2.5/forecast?lat=-22.9110137&lon=-43.2093727&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_SYDNEY =
  "api.openweathermap.org/data/2.5/forecast?lat=-33.8548157&lon=151.2164539&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_TORONTO =
  "api.openweathermap.org/data/2.5/forecast?lat=43.6534817&lon=-79.3839347&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_MEXICO =
  "api.openweathermap.org/data/2.5/forecast?lat=19.4326009&lon=-99.1333416&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_MONTREAL =
  "api.openweathermap.org/data/2.5/forecast?lat=45.4972159&lon=-73.6103642&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_DUBAI =
  "api.openweathermap.org/data/2.5/forecast?lat=25.0750095&lon=55.188760881&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_SINGAPORE =
  "api.openweathermap.org/data/2.5/forecast?lat=1.340863&lon=103.830391822&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_HONGKONG =
  "api.openweathermap.org/data/2.5/forecast?lat=22.2793278&lon=114.1628131&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_SHANGHAI =
  "api.openweathermap.org/data/2.5/forecast?lat=31.2253441&lon=121.4888922&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_MUMBAI =
  "api.openweathermap.org/data/2.5/forecast?lat=19.0759899&lon=72.8773928&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_BEIJING =
  "api.openweathermap.org/data/2.5/forecast?lat=39.906217&lon=116.3912757&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_SEOUL =
  "api.openweathermap.org/data/2.5/forecast?lat=37.5666791&lon=126.9782914&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_TAIPEI =
  "api.openweathermap.org/data/2.5/forecast?lat=25.0375198&lon=121.5636796&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_BANGKOK =
  "api.openweathermap.org/data/2.5/forecast?lat=13.7538929&lon=100.8160803&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_JAKARTA =
  "api.openweathermap.org/data/2.5/forecast?lat=-6.1753942&lon=106.827183&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_BUSAN =
  "api.openweathermap.org/data/2.5/forecast?lat=35.1795543&lon=129.0756416&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_OSAKA =
  "api.openweathermap.org/data/2.5/forecast?lat=34.693724&lon=135.5022535&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_SAPPORO =
  "api.openweathermap.org/data/2.5/forecast?lat=43.064615&lon=141.346807&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";
const URL_CAIRO =
  "api.openweathermap.org/data/2.5/forecast?lat=30.033333&lon=31.233334&appid=c87bddd4e9f27573b6741623db6b57fb&units=metric";

//Functions
/**
 * @name capitalizeFirstLetter
 * @description Capitalize the first letter of a string
 * @param {String} string
 * @returns {String} The string with the first letter capitalized
 */
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * @name displayCards
 * @description Display all the cards with their images and titles
 */
const displayCards = () => {
  imageNames.forEach((imageName) => {
    createCard(imageName);
  });
};
/**
 * @name formatCityName
 * @param {string} city - The city name to format
 * @returns {string} The city name formatted
 * @description Format the city name to display it correctly (with spaces and capital letters)
 */
const formatCityName = (city) => {
  if (city === "Newyork" || city === "NEW YORK" || city === "NEWYORK") {
    city = "New York";
  } else if (
    city === "Sanfrancisco" ||
    city === "SAN FRANCISCO" ||
    city === "SANFRANCISCO"
  ) {
    city = "San Francisco";
  } else if (city === "Rio" || city === "RIO" || city === "RIO DE JANEIRO") {
    city = "Rio de Janeiro";
  } else if (
    city === "Hongkong" ||
    city === "HONG KONG" ||
    city === "HONGKONG"
  ) {
    city = "Hong Kong";
  }
  return city;
};

/**
 * @name createCard
 * @description Create a card with an image and a title, and append it to the cards container
 * @param {String} imageName
 */
const createCard = (imageName) => {
  const card = document.createElement("div");
  card.classList.add("card");
  const img = document.createElement("img");
  img.src = `./images/${imageName}`;
  img.alt = imageName.split(".")[0]; // Use the image name without extension as alt text

  const h2 = document.createElement("h2");
  h2.textContent = capitalizeFirstLetter(imageName.split(".")[0]); // Use the image name without extension as card title
  h2.textContent = formatCityName(h2.textContent);
  card.append(img);
  card.append(h2);

  // Add click event listener
  card.addEventListener("click", () => {
    console.log("CITY NAME BEFORE UPPERCASE: " + h2.textContent);
    let cityName = h2.textContent.toUpperCase();

    if (cityName === "New York") {
      cityName = "NEWYORK";
    } else if (cityName === "San Francisco") {
      cityName = "SANFRANCISCO";
    } else if (cityName === "Rio de Janeiro") {
      cityName = "RIO";
    } else if (cityName === "Hong Kong") {
      cityName = "HONGKONG";
    } else if (cityName === "NEW YORK") {
      cityName = "NEWYORK";
    } else if (cityName === "SAN FRANCISCO") {
      cityName = "SANFRANCISCO";
    } else if (cityName === "RIO DE JANEIRO") {
      cityName = "RIO";
    } else if (cityName === "HONG KONG") {
      cityName = "HONGKONG";
    }

    console.log("NAME OF CITY" + cityName);
    const url = eval(`URL_${cityName.replace(/\s/g, "")}`);
    fetchWeatherData(url, cityName);
  });

  cardsContainer.append(card);
};

const fetchWeatherData = async (url, cityName) => {
  try {
    const response = await axios.get(`https://${url}`);
    displayWeatherModal(response.data, cityName);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

const displayWeatherModal = (data, cityName) => {
  const modal = document.getElementById("weatherModal");
  const modalTitle = document.getElementById("modalTitle");
  const forecastBody = document.getElementById("forecastBody");

  cityName = formatCityName(cityName);
  modalTitle.textContent = `5 Day Forecast for ${cityName}`;
  forecastBody.innerHTML = "";

  // Get one forecast per day (data.list contains forecasts every 3 hours)
  const dailyForecasts = data.list.filter((forecast, index) => index % 8 === 0);

  dailyForecasts.forEach((forecast) => {
    const row = document.createElement("tr");
    const date = new Date(forecast.dt * 1000);

    row.innerHTML = `
    <td>${date.toLocaleDateString()}</td>
    <td>${Math.round(forecast.main.temp)}°C</td>
    <td><img src="http://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].main}"></td>
    <td>${forecast.weather[0].description}</td>
    `;

    forecastBody.appendChild(row);
  });

  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Disable background scrolling
};

// Add modal close functionality
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("weatherModal").style.display = "none";
  document.body.style.overflow = ""; // Enable background scrolling
});

// Window click event listener
window.addEventListener("click", (event) => {
  const modal = document.getElementById("weatherModal");
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = ""; // Enable background scrolling
  }
});

//Events
displayCards();
