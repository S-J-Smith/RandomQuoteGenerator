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
var quotes = [
  {
     quote: 'The way to get started is to quit talking and begin doing.',
     source: 'Walt Disney',
     citation: 'web',
     year: '1986'
  },
  {
     quote: 'Your time is limited, so dont waste it living someone else\'s life. Dont be trapped by dogma – which is living with the results of other people\'s thinking.',
     source: 'Steve Jobs',
     citation: 'web',
     year: '1978'
  },
  {
    quote: 'If you set your goal\'s ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
    source: 'James Cameron',
    citation: 'unknown',
    year: 'unknown'
  },
  {
    quote: 'Always remember that you are absolutely unique. Just like everyone else.',
    source: 'Margaret Mead',
    citation: 'unknown',
    year: 'unknown'
  },
  {
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    source: 'Benjamin Franklin',
    citation: 'unknown',
    year: 'unknown'
  }
];

//console.log(quotes);
//console.table(quotes);
//console.dir(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {

  var quoteIndex = Math.floor( Math.random() * quotes.length );

  /*
  for (var i= 0; i < array.length; i++) {
    var randomQuote = array[quoteIndex];
  }
  */

  return array[quoteIndex];

}

var result = getRandomQuote(quotes);

//console.log(result);


/***
 * `printQuote` function
***/

function printQuote() {
  var quoteObject = getRandomQuote(quotes);
  var html = `<p class='quote'> ${quoteObject.quote} </p>, <p class="source"> ${quoteObject.source}`
  if ( quoteObject ['citation'] ) {
    html += `<span class="citation"> ${quoteObject.citation} </span>`
}
  if ( quoteObject ['year'] ) {
    html += `<span class="year"> ${quoteObject.year} </span> </p>`
}

  return document.getElementById('quote-box').innerHTML = html; 

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//console.log( printQuote() );