/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Quote data is stored here. 
 * The data is stored in an array of objects
 * The properties in each object are: quote, source, citation, year
***/

const quotes = [

    {
      quote: "Well, I've made up my mind, anyway. I want to see mountains again...",
      source: "Bilbo Baggins",
      citation: "The Lord of the Rings",
      year: "1955",
    },

    {
      quote: "All the money you made will never buy back your soul",
      source: "Bob Dylan",
      citation: "The Freewheelin’ Bob Dylan",
      year: "1963",
    },

    {
      quote: "Mellow is the man who knows what he's been missing",
      source: "Led Zeppelin",
      citation: "Over the Hills and Far Away",
      year: "1973",
    },

    {
      quote: "All this happened, more or less",
      source: "Kurt Vonnegut",
      citation: "Slaughterhouse-Five",
      year: "1969",
    },

    {
      quote: "I believe in absolute honesty and sensible social lies",
      source: "Samantha Black Crow",
      citation: "American Gods",
      year: "2001",
    },

]

/***
 * `getRandomQuote` function
 * This function has two steps.
 * First, it generates a random number between 0 and the final index of the 'quotes' array
 * Second, it uses the generated number to select and return the object from the 'quotes' array whose index corresponds to the random number
***/

const getRandomQuote = function () {

  const randomNum = Math.floor(Math.random() * quotes.length); //generate a random number
  return quotes[randomNum];
  
}

/***
 * `printQuote` function
 * First, this function builds a string which contains the property values from the selected quote object
 * Second, it uses '.innerHTML' to display the constructed string to the user
***/

const printQuote = function () {

  const randomQuote = getRandomQuote(); 

  let HTML = `
  
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}
  
  `;

  //Checks if the 'citation' property exists, and adds it's value to the string if so
  if (randomQuote.citation != undefined) {

      HTML += `<span class="citation"> ${randomQuote.citation} </span>`;

  }

  //Checks if the 'year' property exists, and adds it's value to the string if so
  if (randomQuote.year != undefined) {

    HTML += `<span class="year"> ${randomQuote.year} </span>`;

}

  HTML += `</p>`;

  //display constructed string to user
  document.getElementById('quote-box').innerHTML = HTML;

}

printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);