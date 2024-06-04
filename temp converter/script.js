function convertTemp() {
  const fromTemp = parseFloat(document.getElementById("fromTemp").value);
  const fromUnit = document.getElementById("fromUnit").value;
  const toTemp = document.getElementById("toTemp");

  let result;
  if (fromUnit === "celsius") {
    result = (fromTemp * 9/5) + 32;
    document.body.style.backgroundColor = getBackgroundColor(result);
  } else {
    result = (fromTemp - 32) * 5/9;
    document.body.style.backgroundColor = getBackgroundColor(result);
  }

  toTemp.innerText = `${result.toFixed(2)} Fahrenheit`; // Update converted temp
}

function getBackgroundColor(temp) {
  if (temp < 10) {
    return "lightblue"; // Cold
  } else if (temp < 25) {
    return "lightgreen"; // Cool
  } else if (temp < 35) {
    return "lightgoldenrodyellow"; // Warm
  } else {
    return "tomato"; // Hot
  }
}
