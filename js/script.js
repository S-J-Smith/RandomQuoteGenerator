/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
/*** 
 * `quotes` array - Object array containing 7 quotes.  Please note, not sure where or when the original quotes were used as could not find
 * this information and therefore added in for a few quotes though this is most likely incorrect but this is just for the purpose of
 * demonstrating the code works.
 ***/
let quotes = [
	{
		quote: 'The way to get started is to quit talking and begin doing.',
		source: 'Walt Disney',
		citation: 'web',
		year: '1986',
		tag: 'children, cartoon, anitation, motivation'
  },
	{
		quote: 'Your time is limited, so dont waste it living someone else\'s life. Dont be trapped by dogma – which is living with the results of other people\'s thinking.',
		source: 'Steve Jobs',
		citation: 'web',
		year: '1978',
		tag: 'motivation, inspiration, business, positivity'
  },
	{
		quote: 'If you set your goal\'s ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
		source: 'James Cameron',
		citation: 'unknown',
		year: 'unknown',
		tag: 'inspiration, positivity, film, motivation'
  },
	{
		quote: 'Always remember that you are absolutely unique. Just like everyone else.',
		source: 'Margaret Mead',
		citation: 'unknown',
		year: 'unknown',
		tag: 'unknown'
  },
	{
		quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
		source: 'Benjamin Franklin',
		citation: 'unknown',
		year: 'unknown',
		tag: 'unknown'
  },
  	{
		quote: 'I never LOSE, I either WIN or LEARN.',
		source: 'Nelson Mandela',
		citation: 'unknown',
		year: 'unknown',
		tag: 'positivity, motivation, inspiration'
  },
  	{
		quote: 'Don’t focus on the pain, focus on the progress.',
		source: 'Dwayne Johnson',
		citation: 'unknown',
		year: 'unknown',
		tag: 'wrestler, actor, motivation, imspiration'
  }
];
//console.log(quotes); - this is to to log the quotes array to the console.
//console.table(quotes); - this is to log the quotes array to the console in table format 
//console.dir(quotes); - this is to see the quote array in a directory style format.
/***
 * `getRandomQuote` function - generates random number and returns an index number between 0 and 7 being the amount of quotes there are
 * in the Object array.
 ***/
function getRandomQuote( array ) {
	let quoteIndex = Math.floor( Math.random() * quotes.length ); // generates a random index number from the Object array and assigns to the quoteIndex variable.
	return array[ quoteIndex ]; //returns the index number from the array.
}
let result = getRandomQuote( quotes ); //returns a random quote from the array by calling the getRandomQuote function.
//console.log(result); - logs out the above to the console.
/***
 * `printQuote` function - Displays a new quote each time the user clicks the "Show another quote" button.
 ***/
function printQuote() {
	let quoteObject = getRandomQuote( quotes ); //assigns getRandomQuote function to the variable quoteObject.
	let html = `<p class='quote'> ${quoteObject.quote} </p>, <p class="source"> ${quoteObject.source}` //Assigns string to variable html.
//Checks for the keys citation, year and tag inside the Object away and adds to the html document when a quote is generated.
	if ( quoteObject[ 'citation' ] ) {
		html += `<span class="citation"> ${quoteObject.citation} </span>`
	}
	if ( quoteObject[ 'year' ] ) {
		html += `<span class="year"> ${quoteObject.year} </span> </p>`
	}
	if ( quoteObject[ 'tag' ] ) {
		html += `<span class="tag"> ${quoteObject.tag} </span> </p>`
	}
	return document.getElementById( 'quote-box' ).innerHTML = html;
}
let pageBody = document.querySelector("body"); //Assigns the body of the html document to the variable pageBody.
/*** 
 * `changeBg` function - This function generates a random background color each time the Show another quote button is clicked.
***/
function changeBg() {
  let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  pageBody.style.background = color;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
document.getElementById( 'load-quote' ).addEventListener( "click", printQuote, false );
//console.log( printQuote() ); - logs the printQuote function to the console.

var intervalID = window.setInterval(myCallback({printQuote()}), 5000);

function myCallback() {
	return document.getElementById('load-quote');
}