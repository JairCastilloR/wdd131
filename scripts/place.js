
let temperature = 10;
let windSpeed = 5;     

function calculateWindChill(t, v) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(v, 0.16) +
    0.3965 * t * Math.pow(v, 0.16)
  ).toFixed(2);
}

function displayWindChill() {
  let windChillText = "N/A";

  if (temperature <= 10 && windSpeed > 4.8) {
    windChillText = calculateWindChill(temperature, windSpeed) + " °C";
  }

  document.getElementById("windchill").textContent = windChillText;
  document.getElementById("temperature").textContent = temperature + " °C";
  document.getElementById("windspeed").textContent = windSpeed + " km/h";
}

window.onload = displayWindChill;

