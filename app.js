// Function to fetch weather data (using mock data)
function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  // Mock data to simulate a successful API response
  const mockData = {
    location: {
      name: city,
      country: "Mockland",
    },
    current: {
      temp_c: 22,
      condition: {
        text: "Clear sky",
      },
      humidity: 60,
      wind_kph: 15,
    },
  };

  // Simulating a successful API response
  setTimeout(() => {
    // Displaying the mock weather information
    document.getElementById(
      "city-name"
    ).textContent = `${mockData.location.name}, ${mockData.location.country}`;
    document.getElementById(
      "temperature"
    ).textContent = `Temperature: ${mockData.current.temp_c}°C`;
    document.getElementById(
      "description"
    ).textContent = `Condition: ${mockData.current.condition.text}`;
    document.getElementById(
      "humidity"
    ).textContent = `Humidity: ${mockData.current.humidity}%`;
    document.getElementById(
      "wind-speed"
    ).textContent = `Wind Speed: ${mockData.current.wind_kph} km/h`;
  }, 500); // Simulating a small delay for fetching data
}
