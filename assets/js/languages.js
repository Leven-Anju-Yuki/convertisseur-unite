// Objet contenant les traductions pour différentes langues
const translations = {
    fr: { // Français
      title: "Convertisseur d'unités", // Titre affiché
      placeholder: "Entrez la valeur", // Texte du placeholder de l'input
      convertButton: "Convertir", // Texte du bouton de conversion
      error: "Veuillez entrer une valeur valide.", // Message d'erreur
      currencyLink: 
        // Lien HTML pour convertir les devises (ouvre un autre site)
        'Si vous voulez convertir votre monnaie <a target="_blank" href="https://leven-anju-yuki.github.io/Convertisseur-euro/">cliquer ici</a>',
    },
    en: { // Anglais
      title: "Unit Converter",
      placeholder: "Enter value",
      convertButton: "Convert",
      error: "Please enter a valid value.",
      currencyLink: 
        'If you want to convert your currency <a target="_blank" href="https://leven-anju-yuki.github.io/Convertisseur-euro/">click here</a>',
    },
    es: { // Espagnol
      title: "Convertidor de unidades",
      placeholder: "Introduce el valor",
      convertButton: "Convertir",
      error: "Por favor, introduzca un valor válido.",
      currencyLink: 
        'Si desea convertir su moneda <a target="_blank" href="https://leven-anju-yuki.github.io/Convertisseur-euro/">haga clic aquí</a>',
    },
    de: { // Allemand
      title: "Einheitenumrechner",
      placeholder: "Geben Sie den Wert ein",
      convertButton: "Umwandeln",
      error: "Bitte geben Sie einen gültigen Wert ein.",
      currencyLink: 
        'Wenn Sie Ihre Währung umrechnen möchten, <a target="_blank" href="https://leven-anju-yuki.github.io/Convertisseur-euro/">klicken Sie hier</a>',
    },
    it: { // Italien
      title: "Convertitore di unità",
      placeholder: "Inserisci il valore",
      convertButton: "Convertire",
      error: "Inserisci un valore valido.",
      currencyLink: 
        'Se vuoi convertire la tua valuta <a target="_blank" href="https://leven-anju-yuki.github.io/Convertisseur-euro/">clicca qui</a>',
    },
    pt: { // Portugais
      title: "Conversor de Unidades",
      placeholder: "Digite o valor",
      convertButton: "Converter",
      error: "Por favor, insira um valor válido.",
      currencyLink: 
        'Se você deseja converter sua moeda <a target="_blank" href="https://leven-anju-yuki.github.io/Convertisseur-euro/">clique aqui</a>',
    },
    zh: { // Chinois
      title: "单位转换器",
      placeholder: "输入值",
      convertButton: "转换",
      error: "请输入有效值。",
      currencyLink: 
        '如果您想转换您的货币 <a target="_blank" href="https://leven-anju-yuki.github.io/Convertisseur-euro/">请点击这里</a>',
    },
    ja: { // Japonais
      title: "単位変換器",
      placeholder: "値を入力してください",
      convertButton: "変換する",
      error: "有効な値を入力してください。",
      currencyLink: 
        '通貨を変換したい場合は<a target="_blank" href="https://leven-anju-yuki.github.io/Convertisseur-euro/">こちらをクリック</a>',
    },
  };
  
  // Fonction pour définir la langue en fonction du choix de l'utilisateur
  function setLanguage(lang) {
    // Récupère les traductions correspondant à la langue sélectionnée
    const elements = translations[lang];
  
    if (elements) {
      // Mise à jour du titre avec la traduction
      document.getElementById("title").innerText = elements.title;
  
      // Mise à jour du placeholder de l'input pour entrer une valeur
      document.getElementById("value").placeholder = elements.placeholder;
  
      // Mise à jour du texte du bouton de conversion
      document.querySelector("button").innerText = elements.convertButton;
  
      // Réinitialisation du message d'erreur (si affiché auparavant)
      document.getElementById("error").innerText = "";
  
      // Mise à jour du lien HTML pour la conversion de devises
      document.getElementById("currencyLink").innerHTML = elements.currencyLink;
    }
  }
  
  // Ajoute un écouteur d'événement pour exécuter du code une fois la page chargée
  document.addEventListener("DOMContentLoaded", () => {
    // Définit la langue par défaut à "fr" (français)
    setLanguage("fr");
  });
  