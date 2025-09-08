const tempInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const result = document.getElementById("result");
const thermoFill = document.getElementById("thermoFill");


tempInput.addEventListener("input", convertTemperature);
unitSelect.addEventListener("change", convertTemperature);

function convertTemperature() {
  let temp = tempInput.value;
  let unit = unitSelect.value;

  if (temp === "" || temp === "+" || temp === "-" || temp === ".") {
    result.innerHTML = "⚠️ Please enter a number.";
    thermoFill.style.height = "0%";
    thermoFill.style.background = "blue";
    return;
  }
   
  if (isNaN(temp)) {
    result.innerHTML = "❌ Please enter a valid number.";
    thermoFill.style.height = "0%";
    thermoFill.style.background = "blue";
    return;
  }

  temp = parseFloat(temp);
  let converted = "";
  let celsiusValue = 0;

  if (unit === "C") {
    converted = `${(temp * 9/5 + 32).toFixed(2)} °F | ${(temp + 273.15).toFixed(2)} K`;
    celsiusValue = temp;
  } 
  else if (unit === "F") {
    let c = (temp - 32) * 5/9;
    converted = `${c.toFixed(2)} °C | ${(c + 273.15).toFixed(2)} K`;
    celsiusValue = c;
  } 
  else if (unit === "K") {
    let c = temp - 273.15;
    converted = `${c.toFixed(2)} °C | ${(c * 9/5 + 32).toFixed(2)} °F`;
    celsiusValue = c;
  }

  
  result.classList.add("glow");
  setTimeout(() => result.classList.remove("glow"), 500)

  let heightPercent = Math.min(Math.max((celsiusValue + 20) * (100 / 70), 0), 100);
  thermoFill.style.height = heightPercent + "%";


  if (celsiusValue <= 0) {
    thermoFill.style.background = "blue";
  } else if (celsiusValue > 0 && celsiusValue <= 25) {
    thermoFill.style.background = "green";
  } else {
    thermoFill.style.background = "red";
  }
}