/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [

    {
      quote: "Well, I've made up my mind, anyway. I want to see mountains again...",
      source: "Bilbo Baggins",
      citation: "The Lord of the Rings",
      year: "October 20th 1955",
    },

    {
      quote: "All the money you made will never buy back your soul",
      source: "Bob Dylan",
      citation: "The Freewheelin’ Bob Dylan",
      year: "1963",
    },

    {
      quote: "Mellow is the man who knows what he's been missing.",
      source: "Led Zeppelin",
      citation: "Over the Hills and Far Away",
      year: "1973",
    },

    {
      quote: "All this happened, more or less.",
      source: "Kurt Vonnegut",
      citation: "Slaughterhouse-Five",
      year: "1969",
    },

    {
      quote: "I believe in absolute honesty and sensible social lies.",
      source: "Samantha Black Crow",
      citation: "American Gods",
      year: "2001",
    },

]

/***
 * `getRandomQuote` function
***/

const getRandomQuote = function () {

  const randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
  
}

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);