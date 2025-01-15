// Fonction pour changer la langue
function changeLanguage() {
    const lang = document.getElementById('language').value;
    const titles = {
        fr: "Convertisseur d'unités",
        en: "Unit Converter",
        es: "Convertidor de unidades"
    };
    const placeholder = {
        fr: "Entrez la valeur",
        en: "Enter value",
        es: "Introduce el valor"
    };
    const btnText = {
        fr: "Convertir",
        en: "Convert",
        es: "Convertir"
    };
    
    document.getElementById('title').innerText = titles[lang];
    document.getElementById('value').placeholder = placeholder[lang];
    document.querySelector('button').innerText = btnText[lang];
    
    // Vous pouvez ajouter ici des traductions pour d'autres éléments si besoin
}

// Fonction de conversion
function convert() {
    const value = document.getElementById('value').value;
    const unitType = document.getElementById('unitType').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    // Effacer le message d'erreur précédent
    errorDiv.innerHTML = "";

    if (!value || isNaN(value)) {
        errorDiv.innerHTML = "Veuillez entrer une valeur valide.";
        return;
    }

    let result = 0;

    // Conversions
    switch (unitType) {
        case "miles":
            result = value * 1.60934;
            resultDiv.innerHTML = `${value} Miles = ${result.toFixed(2)} Kilomètres`;
            break;
        case "kilometers":
            result = value / 1.60934;
            resultDiv.innerHTML = `${value} Kilomètres = ${result.toFixed(2)} Miles`;
            break;
        case "gallons":
            result = value * 3.78541;
            resultDiv.innerHTML = `${value} Gallons = ${result.toFixed(2)} Litres`;
            break;
        case "litres":
            result = value / 3.78541;
            resultDiv.innerHTML = `${value} Litres = ${result.toFixed(2)} Gallons`;
            break;
        case "pounds":
            result = value * 0.453592;
            resultDiv.innerHTML = `${value} Pounds = ${result.toFixed(2)} Kilogrammes`;
            break;
        case "kilograms":
            result = value / 0.453592;
            resultDiv.innerHTML = `${value} Kilogrammes = ${result.toFixed(2)} Pounds`;
            break;
        case "fahrenheit":
            result = (value - 32) * 5/9;
            resultDiv.innerHTML = `${value} °F = ${result.toFixed(2)} °C`;
            break;
        case "celsius":
            result = (value * 9/5) + 32;
            resultDiv.innerHTML = `${value} °C = ${result.toFixed(2)} °F`;
            break;
        case "inches":
            result = value * 2.54;
            resultDiv.innerHTML = `${value} Pouces = ${result.toFixed(2)} Centimètres`;
            break;
        case "centimeters":
            result = value / 2.54;
            resultDiv.innerHTML = `${value} Centimètres = ${result.toFixed(2)} Pouces`;
            break;
        default:
            errorDiv.innerHTML = "Conversion non supportée.";
    }
}
