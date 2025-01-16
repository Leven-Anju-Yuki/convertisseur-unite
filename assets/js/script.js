function convert() {
    // Récupère le type d'unité sélectionné dans la liste déroulante
    const unitType = document.getElementById("unitType").value;
    
    // Récupère la valeur entrée par l'utilisateur et la convertit en nombre
    const value = parseFloat(document.getElementById("value").value);
    
    // Référence aux éléments HTML où afficher le résultat et les erreurs
    const resultElement = document.getElementById("result");
    const errorElement = document.getElementById("error");
  
    // Vérifie si la valeur entrée est un nombre valide
    if (isNaN(value)) {
      // Affiche un message d'erreur dans la langue sélectionnée
      errorElement.innerText = translations[document.getElementById("language").value].error;
      resultElement.innerText = ""; // Réinitialise le champ résultat
      return; // Quitte la fonction
    }
  
    let result; // Variable pour stocker le résultat de la conversion
  
    // Utilise une structure switch pour effectuer la conversion en fonction du type d'unité
    switch (unitType) {
      case "miles":
        result = value * 1.60934; // Convertit des miles en kilomètres
        break;
      case "kilometers":
        result = value / 1.60934; // Convertit des kilomètres en miles
        break;
      case "gallons":
        result = value * 3.78541; // Convertit des gallons en litres
        break;
      case "litres":
        result = value / 3.78541; // Convertit des litres en gallons
        break;
      case "pounds":
        result = value * 0.453592; // Convertit des livres (pounds) en kilogrammes
        break;
      case "kilograms":
        result = value / 0.453592; // Convertit des kilogrammes en livres
        break;
      case "fahrenheit":
        result = ((value - 32) * 5) / 9; // Convertit des Fahrenheit en Celsius
        break;
      case "celsius":
        result = (value * 9) / 5 + 32; // Convertit des Celsius en Fahrenheit
        break;
      case "inches":
        result = value * 2.54; // Convertit des pouces (inches) en centimètres
        break;
      case "centimeters":
        result = value / 2.54; // Convertit des centimètres en pouces
        break;
      case "meters":
        result = value * 3.28084; // Convertit des mètres en pieds
        break;
      case "feet":
        result = value / 3.28084; // Convertit des pieds en mètres
        break;
      case "kilojoules":
        result = value / 4.184; // Convertit des kilojoules en calories
        break;
      case "calories":
        result = value * 4.184; // Convertit des calories en kilojoules
        break;
      case "hours":
        result = value * 3600; // Convertit des heures en secondes
        break;
      case "seconds":
        result = value / 3600; // Convertit des secondes en heures
        break;
      case "squareMeters":
        result = value * 10.7639; // Convertit des mètres carrés en pieds carrés
        break;
      case "squareFeet":
        result = value / 10.7639; // Convertit des pieds carrés en mètres carrés
        break;
      case "liters":
        result = value * 1000; // Convertit des litres en millilitres
        break;
      case "milliliters":
        result = value / 1000; // Convertit des millilitres en litres
        break;
      case "hoursToDays":
        // Convertit des heures en jours (1 jour = 24 heures)
        result = value / 24;
        resultElement.innerText = `${value} heures équivalent à ${result.toFixed(2)} jours.`;
        break;
      case "daysToHours":
        // Convertit des jours en heures (1 jour = 24 heures)
        result = value * 24;
        resultElement.innerText = `${value} jours équivalent à ${result.toFixed(2)} heures.`;
        break;
      default:
        // Message affiché si le type d'unité n'est pas pris en charge
        result = "Conversion non prise en charge.";
    }
  
    // Réinitialise les erreurs et affiche le résultat de la conversion
    errorElement.innerText = "";
    resultElement.innerText = `Résultat : ${result}`;
  }
  function resetPage() {
    // Réinitialise la sélection de type d'unité à la première option
    document.getElementById("unitType").selectedIndex = 0;
    
    // Réinitialise la valeur entrée à une chaîne vide
    document.getElementById("value").value = "";
    
    // Efface le résultat et les erreurs affichés
    document.getElementById("result").innerText = "";
    document.getElementById("error").innerText = "";
  }
    