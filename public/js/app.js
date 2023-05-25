const app = 
{
  // initialisation
  init: function()
  {
    app.loadFromAPI();

  },

  loadFromAPI: async function()
  {
    // on fetch les données
    try
    {
      // on récupère la donnée
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const joke = await response.json();

      console.log(joke);

      // on l'ajoute au DOM
      app.updateDOM(joke);
    }
    catch(error)
    {
      console.error('Erreur côté serveur : ' + error);
    }
  },

  updateDOM: function(joke)
  {
    // sélection du template
    const jokeQuote = document.querySelector('blockquote');

    // insertion de la blague dans le DOM
    jokeQuote.textContent = joke.value;
  }
}

document.addEventListener('DOMContentLoaded', app.init());