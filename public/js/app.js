const app = {
  // Initialisation
  init: function () {
    // Load data from the API
    app.loadFromAPI();

    // Select the "Another one" button and add an event listener
    const button = document.querySelector('#generate');
    button.addEventListener('click', app.handleClick);
  },

  loadFromAPI: async function () {
    try {
      // Get the data with fetch
      const response = await fetch('https://api.chucknorris.io/jokes/random');

      // Format the response to json
      const joke = await response.json();

      // Add the joke to the DOM
      app.updateDOM(joke);

      // Generate a random image

      // Select the image
      let image = document.querySelector('img');

      // Get a random number
      const random = Math.floor(Math.random() * 10) + 1;

      // Select the relative path of the image
      image.getAttribute('src');

      // Change the image number
      image.setAttribute('src', './img/chuck-norris-' + random + '.jpeg');
    }
    
    catch (error) {
      console.error('Erreur côté serveur : ' + error);
    }
  },

  updateDOM: async function (joke) {
    // Select the blockquote
    const jokeQuote = document.querySelector('blockquote');

    // Insert the joke inside the blockquote
    jokeQuote.textContent = joke.value;
  },

  handleClick: function (event) {
    // Disable the button default behavior
    event.preventDefault();

    // Load data from the API
    app.loadFromAPI();

  },

};

// Once the document is loaded, run the init method
document.addEventListener('DOMContentLoaded', app.init);
