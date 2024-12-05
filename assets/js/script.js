function convert() {
    const unitType = document.getElementById("unitType").value;
    const value = parseFloat(document.getElementById("value").value);
    let result = "";

    if (isNaN(value)) {
        result = "Veuillez entrer une valeur valide.";
    } else {
        switch (unitType) {
            case "miles":
                result = `${value} miles = ${(value * 1.60934).toFixed(2)} kilomètres`;
                break;
            case "gallons":
                result = `${value} gallons = ${(value * 3.78541).toFixed(2)} litres`;
                break;
            case "pounds":
                result = `${value} pounds = ${(value * 0.453592).toFixed(2)} kilogrammes`;
                break;
            case "fahrenheit":
                result = `${value} °F = ${((value - 32) * 5 / 9).toFixed(2)} °C`;
                break;
            case "inches":
                result = `${value} pouces = ${(value * 2.54).toFixed(2)} centimètres`;
                break;
            default:
                result = "Conversion non disponible.";
        }
    }

    document.getElementById("result").innerText = result;
}
