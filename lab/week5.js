// Goal: Implement a weather application using data from an external API
// - Signup for an api key @ https://weatherapi.com
// - The API takes three inputs (querystring parameters)
//   - key = your API key
//   - q = a location query (e.g. Chicago)
//   - days = number of days of forecast data to return, between 1-10
// - Example: https://api.weatherapi.com/v1/forecast.json?key=YOUR-API-KEY&q=Chicago&days=3
// - The basic recipe (algorithm) is included; write the rest of the recipe in the comments!
// - Lab: Follow the provided recipe and the "mock-up" provided in the hard-coded HTML; respond 
//        to the user filling out the location on the form by fetching the weather API and 
//        displaying the city/state, e.g. if the user enters "chicago" on the form, show "Current
//        Weather for Chicago, Illinois".
// - Homework: Complete the application by accepting a number of days; show the current weather 
//             conditions and forecast based on the number of days entered by the user.

window.addEventListener('DOMContentLoaded', async function() {
  // Get a reference to the "get weather" button
  let getWeatherButton = document.querySelector(`button`)
  // When the "get weather" button is clicked:
  getWeatherButton.addEventListener(`click`,async function(event) {
    // - Ignore the default behavior of the button
    event.preventDefault()
    // - Get a reference to the element containing the user-entered location
    let locationInput = document.querySelector(`#location`)
    let daysInput = document.querySelector(`#days`)
    // - Get the user-entered location from the element's value
    console.log(locationInput)
    let locationValue = locationInput.value
    let daysValue = daysInput.value
    console.log(locationValue)
    // - Check to see if the user entered anything; if so:
    if (locationValue.length >0 && daysValue > 0 ) {
      // - Construct a URL to call the WeatherAPI.com API
      let url = `https://api.weatherapi.com/v1/forecast.json?key=c495d6263eb34e1b858153926212704&q=${locationValue}&days=${daysValue}`
      // - Fetch the url, wait for a response, store the response in memory
      let response = await fetch(url)

      // - Ask for the json-formatted data from the response, wait for the data, store it in memory
      
      let json = await response.json()

      // - Write the json-formatted data to the JavaScript console
      console.log(json)
      console.log(url)

      // - Store the interpreted location, current weather conditions, the forecast as three separate variables
      let locationData = json.location
      let weatherCurrent = json.current
      let weatherForecast = json.forecast 
      console.log(`${locationData.name} ${weatherCurrent}`)
      
      // - Continue the recipe yourself!
      
      // Build a for loop to pull the data for each set of days

      // Within


      }
    })    
})