//Dom elements
var coinNameEl = document.querySelector(".coinName")
var PriceEl = document.querySelector(".coinPrice")
var marketcapEl = document.querySelector(".coinMcap")
var dailyChgEl = document.querySelector(".coinDayChg")
var DailyPercentEl = document.querySelector(".coinPercentChange")


//DOM elements to display stock & crypto info
var cryptoBtnsEl = document.querySelector("#crypto-btns")
var stockBtnsEl = document.querySelector("#stock-btns")

//list of arrays
var coinArray = [];

var testArray = [];

// this function creates objcts from the api call and pushes them to the coin array
var createobj = function(assetInfo){

// create an object for api call info
let myObject= {}

	// this sets the  new object values 
	myObject.name = assetInfo.name;
	myObject.price = assetInfo.current_price;
	myObject.dailyChgPer = assetInfo.price_change_percentage_24h;
	myObject.dailyChg = assetInfo.price_change_24h;
	myObject.marketCap = assetInfo.market_cap;


	// coinArray.push(myObject)
	// this returns the object to calling function to be pushed up to the coin array.
	return myObject


}

var displayArray = function(){
	//  this confirms that the button works
	console.log("click works")

	// this cycles through the coin array as a test
	for(var i=0; i< coinArray.length; i++){
		console.log(coinArray[i])
	}

	// once the button is pressed the info from the array based on the index is displayed on the screen
	// currently the index is 0 or just bitcoin  we need a conditional statment made to set the index based on the user selection from the user select function
	//  we would have to make a button for each coin doing it this way
	coinNameEl.textContent=("Asset Name: " + coinArray[0].name);
	PriceEl.textContent=("Price: " + coinArray[0].price);
	marketcapEl.textContent=("Market cap: " + coinArray[0].marketCap)
	dailyChgEl.textContent=("Daily Change: " + coinArray[0].dailyChg)
	DailyPercentEl.textContent=("Daily % Change: " + coinArray[0].dailyChgPer)

}
// this function was planned to be used to return selection from the drop down menu 
// that selection would then be sent to the display function to display the choosen coin.
var userSelect  = function(){
	
}


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
		'X-RapidAPI-Key': '3f322a173bmshcf96baf9a457488p1812bajsn8e668a882dbd'
	}
};

fetch('https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc', options)
	.then(response => response.json())

	// This pulls all the data for the 5 coins we are comparing
	.then(function (data) {
		console.log('List of Coins \n----------');
		// searches through the fetched data for needed information
		for (var i = 0; i < data.length; i++) {
			// test for bitcoin and returns the data
			if(data[i].name=='Bitcoin'){
				// console.log(data[i]);
				// sends data to create obj function that pushes the info to the coin array
				
				coinArray.push(createobj(data[i]))			
			}	
			// test for Ethereum and returns the data
			if(data[i].name=='Ethereum'){
				// console.log(data[i]);
				coinArray.push(createobj(data[i]))							
			}	
			// // test for BNB and returns the data
			if(data[i].name=='BNB'){
				// console.log(data[i]);
				coinArray.push(createobj(data[i]))						
			}	
			// test for Solana and returns the data
			if(data[i].name=='Solana'){
				// console.log(data[i]);
				coinArray.push(createobj(data[i]))		
			}
			// // test for XRP and returns the data	
			if(data[i].name=='XRP'){
				// console.log(data[i]);
				coinArray.push(createobj(data[i]))											
			}	
		}
		
		//test the array at the end
		console.log(coinArray)

		
		
	});

//Dom elements
var stockNameEl = document.querySelector(".stockName")
var stockPriceEl = document.querySelector(".stockPrice")
var stockMarketcapEl = document.querySelector(".stockMcap")
var stockDailyChgEl = document.querySelector(".stockDayChg")
var stockDailyPercentEl = document.querySelector(".stockPercentChange")
var stockArray = [];

const optionsStock = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'finshorts.p.rapidapi.com',
		'X-RapidAPI-Key': '3f322a173bmshcf96baf9a457488p1812bajsn8e668a882dbd'
	}
};


// creates an object array for the stock api
var createobjStock = function(assetInfo){

    // create an object for api call info
    
    
    
    
    let myObject= {}
    
        // this sets the  new object values 
        myObject.name = assetInfo.data.companyName;
        myObject.price = assetInfo.data.latestPrice;
        myObject.dailyChgPer = assetInfo.data.changePercent
        myObject.dailyChg = assetInfo.data.change;
        myObject.marketCap = assetInfo.data.marketCap;
    
    
        // stockArray.push(myObject)
        // this returns the object to calling function to be pushed up to the stock array.
        return myObject
    
    
    }


//displays the results on the page
var displayArray = function(){
    //  this confirms that the button works
    console.log("click works")

    // this cycles through the coin array as a test
    for(var i=0; i< stockArray.length; i++){
        console.log(stockArray[i])
    }

    // once the button is pressed the info from the array based on the index is displayed on the screen
    // currently the index is 0 or just bitcoin  we need a conditional statment made to set the index based on the user selection from the user select function
    //  we would have to make a button for each coin doing it this way
    stockNameEl.textContent=("Asset Name: " + stockArray[0].name);
    stockPriceEl.textContent=("Price: " + stockArray[0].price);
    stockMarketcapEl.textContent=("Market cap: " + stockArray[0].marketCap)
    stockDailyChgEl.textContent=("Daily Change: " + stockArray[0].dailyChg)
    stockDailyPercentEl.textContent=("Daily % Change: " + stockArray[0].dailyChgPer)

}
// this function was planned to be used to return selection from the drop down menu 
// that selection would then be sent to the display function to display the choosen coin.


Promise.all([
	fetch('https://finshorts.p.rapidapi.com/index.php?q=aapl', optionsStock),
	fetch('https://finshorts.p.rapidapi.com/index.php?q=Tsla', optionsStock),
    fetch('https://finshorts.p.rapidapi.com/index.php?q=fb', optionsStock),
    fetch('https://finshorts.p.rapidapi.com/index.php?q=amzn', optionsStock),
    fetch('https://finshorts.p.rapidapi.com/index.php?q=goog', optionsStock),


]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {
	// Log the data to the console
	


	
    // creates an object array with the api stock calls
    
    for (var i = 0; i < data.length; i++){
     stockArray.push(createobjStock(data[i]))
    }
    // the array is only working in side the fetch request
    
    console.log(stockArray)


}).catch(function (error) {
	// if there's an error, log it
	console.log(error);
});


// function to display crypto info
var displayCrypto = function(coinArray, [i]) {
	//console.log("TESTING");
coinNameEl.textContent=("Asset Name: " + coinArray[i].name);
PriceEl.textContent=("Price: " + coinArray[i].price);
marketcapEl.textContent=("Market cap: " + coinArray[i].marketCap)
dailyChgEl.textContent=("Daily Change: " + coinArray[i].dailyChg)
DailyPercentEl.textContent=("Daily % Change: " + coinArray[i].dailyChgPer)   
};

var handleBtnClick = function(event) {
var data = event.target.getAttribute("data");
if (data == 'bitcoin') {
  console.log("TESTING CLICK 1")
  displayCrypto(coinArray, [0]);
}
if (data == 'ethereum') {
  displayCrypto(coinArray, [1]);
  console.log("TESTING CLICK 2");
}
if (data == 'binance') {
  displayCrypto(coinArray, [2]);
  console.log("TESTING CLICK 3");
}
if (data == 'xrp') {
  displayCrypto(coinArray, [3]);
  console.log("TESTING CLICK 4");
}
if (data == 'solana') {
  displayCrypto(coinArray, [4]);
  console.log("TESTING CLICK 5");
}
}

cryptoBtnsEl.addEventListener("click", handleBtnClick);

//function to display stock info when called
	// TESTING 
	var displayStock = function(stockArray, [i]) {
		stockNameEl.textContent=("Asset Name: " + stockArray[i].name);
		stockPriceEl.textContent=("Price: " + stockArray[i].price);
		stockMarketcapEl.textContent=("Market cap: " + stockArray[i].marketCap)
		stockDailyChgEl.textContent=("Daily Change: " + stockArray[i].dailyChg)
		stockDailyPercentEl.textContent=("Daily % Change: " + stockArray[i].dailyChgPer)
	};
	// this button displays the stock info
	var handleStockBtn = function(event) {
		var data = event.target.getAttribute("data");
	if (data == 'apple') {
		console.log("TESTING APPLE CLICK")
		displayStock(stockArray, [0]);
	}
	if (data == 'tesla') {
		console.log("TESTING TESLA CLICK")
		displayStock(stockArray, [1]);
	}
	if (data == 'dow') {
		console.log("TESTING THE DOW CLICK")
		displayStock(stockArray, [2]);
	}
	if (data == 'amazon') {
		console.log("TESTING AMAZON CLICK")
		displayStock(stockArray, [3]);
	}   
	if (data == 's&p') {
		console.log("TESTING S&P CLICK")
		displayStock(stockArray, [4]);
	}
	}




// news api
function getNews(){
const options = {
     method: 'GET',
     headers: {
       'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
       'X-RapidAPI-Key': 'b25265300amsh7ebdac809f3a03cp198da9jsne8a87b529796'
     }
   };
   
   fetch('https://crypto-news-live3.p.rapidapi.com/news?rapidapi-key=b25265300amsh7ebdac809f3a03cp198da9jsne8a87b529796')
   .then(function (response) {
                   return response.json();
               })
               .then(function (data) {
                   appendData(data);
               })
               .catch(function (err) {
                   console.log('error: ' + err);
               });
           function appendData(data) {
               var mainContainer = document.getElementById("myData");
               for (var i = 0; i < 2; i++) {
                   var div = document.createElement("div");
                   div.innerHTML = 'Source: ' + data[i].source + ' ';
                   mainContainer.appendChild(div);
               }
               var mainContainer = document.getElementById("myData2");
               for (var i = 0; i < 2; i++) {
                   var div = document.createElement("div");
                   div.innerHTML = '' + data[i].title + ' ';
                   mainContainer.appendChild(div);
               }
               var mainContainer = document.getElementById("myData3");
               for (var i = 0; i < 2; i++) {
                   var div = document.createElement("div");
                   div.innerHTML = ' ' + data[i].url + ' ';
                   mainContainer.appendChild(div);
               }
           }
         }

	stockBtnsEl.addEventListener("click", handleStockBtn);





	

