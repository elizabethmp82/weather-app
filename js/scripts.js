// Variáveis e seleção de elementos
const apiKey = "";// Sua chave da API OpenWeatherMap
const apiCountryURL = "https://flagsapi.com/BR/flat/64.png";
const unsplashAccessKey = ""; // Sua chave da API Unsplash

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

// Funções
const getWeatherData = async (city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();
  return data;
};

// Função para obter imagem do Unsplash com base na cidade
const getUnsplashImage = async (city) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${city}&per_page=1&orientation=landscape&client_id=${unsplashAccessKey}`
    );
    const data = await response.json();

    if (data.results.length > 0) {
      return data.results[0].urls.regular; // Retorna a URL da imagem
    } else {
      return null; // Nenhuma imagem encontrada
    }
  } catch (error) {
    console.error("Erro ao buscar imagem:", error);
    return null;
  }
};

const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  cityElement.innerHTML = data.name;
  tempElement.innerHTML = parseInt(data.main.temp);
  descElement.innerHTML = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  countryElement.setAttribute(
    "src",
    `https://flagsapi.com/${data.sys.country}/flat/64.png`
  );
  humidityElement.innerHTML = `${data.main.humidity}%`;
  windElement.innerHTML = `${data.wind.speed}km/h`;

   // Obter imagem do Unsplash e mudar o fundo
   const imageUrl = await getUnsplashImage(city);
   if (imageUrl) {
     document.body.style.backgroundImage = `url("${imageUrl}")`;
     document.body.style.backgroundRepeat = "no-repeat"; // Evita repetição
     document.body.style.backgroundSize = "cover"; // A imagem ocupa toda a tela
     document.body.style.backgroundPosition = "center"; // Centraliza a imagem
   } else {
     console.log("Nenhuma imagem encontrada para esta cidade.");
   }
  weatherContainer.classList.remove("hide");
};

// Eventos
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value;
  showWeatherData(city);
});

cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value;
    showWeatherData(city);
  }
});
