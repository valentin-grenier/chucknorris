const app = 
{
  // Initialisation
  init: function()
  {
    // Load data from the API
    app.loadFromAPI();

    // Select the "Another one" button and add an event listener
    const button = document.querySelector('#generate');
    button.addEventListener('click', app.handleClick);

  },

  loadFromAPI: async function()
  {
    try
    {
      // Get the data with fetch
      const response = await fetch('https://api.chucknorris.io/jokes/random');

      // Format the response to json
      const joke = await response.json();

      // Add the joke to the DOM
      app.updateDOM(joke);
    }
    catch(error)
    {
      console.error('Erreur côté serveur : ' + error);
    }
  },

  updateDOM: function(joke)
  {
    // Select the blockquote
    const jokeQuote = document.querySelector('blockquote');

    // Insert the joke inside the blockquote
    jokeQuote.textContent = joke.value;
  },

  handleClick: function(event)
  {
    // Disable the button default behavior
    event.preventDefault();

    // Load data from the API
    app.loadFromAPI();
  }
}

// Once the document is loaded, run the init method
document.addEventListener('DOMContentLoaded', app.init());