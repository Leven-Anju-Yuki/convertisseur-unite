function convert() {
  const unitType = document.getElementById("unitType").value;
  const value = parseFloat(document.getElementById("value").value);
  const resultElement = document.getElementById("result");
  const errorElement = document.getElementById("error");

  if (isNaN(value)) {
    errorElement.innerText = translations[document.getElementById("language").value].error;
    resultElement.innerText = "";
    return;
  }

  let result;

  switch (unitType) {
    case "miles":
      result = value * 1.60934;
      break;
    case "kilometers":
      result = value / 1.60934;
      break;
    case "gallons":
      result = value * 3.78541;
      break;
    case "litres":
      result = value / 3.78541;
      break;
    case "pounds":
      result = value * 0.453592;
      break;
    case "kilograms":
      result = value / 0.453592;
      break;
    case "fahrenheit":
      result = ((value - 32) * 5) / 9;
      break;
    case "celsius":
      result = (value * 9) / 5 + 32;
      break;
    case "inches":
      result = value * 2.54;
      break;
    case "centimeters":
      result = value / 2.54;
      break;
    case "meters":
      result = value * 3.28084;
      break;
    case "feet":
      result = value / 3.28084;
      break;
    case "kilojoules":
      result = value / 4.184;
      break;
    case "calories":
      result = value * 4.184;
      break;
    case "hours":
      result = value * 3600;
      break;
    case "seconds":
      result = value / 3600;
      break;
    case "squareMeters":
      result = value * 10.7639;
      break;
    case "squareFeet":
      result = value / 10.7639;
      break;
    case "liters":
      result = value * 1000;
      break;
    case "milliliters":
      result = value / 1000;
      break;
    case "hoursToDays":
      result = value / 24; // 1 jour = 24 heures
      resultElement.innerText = `${value} heures équivalent à ${result.toFixed(2)} jours.`;
      break;

    case "daysToHours":
      result = value * 24; // 1 jour = 24 heures
      resultElement.innerText = `${value} jours équivalent à ${result.toFixed(2)} heures.`;
      break;
    default:
      result = "Conversion non prise en charge.";
  }

  errorElement.innerText = "";
  resultElement.innerText = `Résultat : ${result}`;
}
