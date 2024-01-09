# Weather App

A simple weather web application that alows users to get current weather information for a specific city.

## Features

- Displays current temperatures, weather description, and location based on user input.
- Shows additional weather information such as feels like temperature, minimum and maximum temperatures, humidity, wind speed, and pressure.

## Usage

1. Enter a city name in the search box.
2. Press Enter to fetch and display the current weather information for the specified city.
3. Additional weather details are shown in the lower section of the page.

## Dependencies 

- Font Awesome - Used for icons.
- OpenWeatherMap API - Requires an API key.

## API Key

To use the OpenWeatherMap API and fetch weather data, you need to obtain an API key. Visit OpenWeatherMap to create an account and get your API key.

Once you have the key, replace the apiKey variable in the scripts.js file with your API key:
```
let apiKey = 'your-api-key-goes-here';
```