const api = `https://api.openweathermap.org/data/2.5/weather?`
const apiId = import.meta.env.VITE_APIKEY

console.log("api key",import.meta.env.VITE_APIKEY)

export const imageApi = `http://openweathermap.org/img/wn/`

export async function fetchData(text,lat,lng){
    const apiURL = text ? `${api}q=${text}&appid=${apiId}&units=metric` : `${api}lat=${lat}&lon=${lng}&appid=${apiId}&units=metric`
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data
      } catch (error) {
        console.error("Error fetching weather data:", error);
        return error
      }
}

export  function getCountryName(id) {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    return regionNames.of(id);
  }