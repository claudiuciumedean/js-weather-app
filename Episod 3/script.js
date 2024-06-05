const cityInput = document.querySelector(".city-input");
const city = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const icon = document.querySelector(".weather-icon");
const date = document.querySelector(".date");
const tempFeel = document.querySelector(".temp-feel");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");

cityInput.addEventListener("change", (event) => {
  const value = event.target.value;
  getWeatherDataForCity(value);
});

window.addEventListener("load", () => {
  getWeatherDataForCity(cityInput.value);
});

async function getWeatherDataForCity(city) {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/weather?city=" + city, {
      method: "GET",
      headers: {
        "X-Api-Key": "Xdn4fI1HebLv1ZBn6BGpvg==WLVPyAhjjJJjTkut",
      },
    });

    const result = await response.json();
    updateUiInfo(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

function updateUiInfo (info) {
  city.innerHTML = cityInput.value;
  temperature.innerHTML = info.temp;

  if (info.temp > 20) {
    icon.classList.remove("bi-brightness-high-fill", ".bi-brightness-alt-low-fill", ".bi-snow");
    icon.classList.add("bi-brightness-high-fill");
  } else if (info.temp < 10) {
    icon.classList.remove("bi-brightness-high-fill", ".bi-brightness-alt-low-fill", ".bi-snow");
    icon.classList.add("bi-snow");
  } else {
    icon.classList.remove("bi-brightness-high-fill", ".bi-brightness-alt-low-fill", ".bi-snow");
    icon.classList.add("bi-brightness-alt-low-fill");
  }

  //weatherIcon
  date.innerHTML = new Date().toDateString();
  tempFeel.innerHTML = info.feels_like;
  wind.innerHTML = info.wind_speed;
  humidity.innerHTML = info.humidity;
}