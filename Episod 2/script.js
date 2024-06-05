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

async function getWeatherDataForCity(city) {
  try {
    const response = await fetch("https://api.api-ninjas.com/v1/weather?city=" + city, {
      method: "GET",
      headers: {
        "X-Api-Key": "Xdn4fI1HebLv1ZBn6BGpvg==WLVPyAhjjJJjTkut",
      },
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}