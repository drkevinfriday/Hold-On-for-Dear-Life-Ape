//Domelments
var coinNameEl = document.querySelector(".coinName")
var PriceEl = document.querySelector(".coinPrice")
var marketcapEl = document.querySelector(".coinMcap")
var dailyChgEl = document.querySelector(".coinDayChg")
var DailyPercentEl = document.querySelector(".coinPrecentChange")
var showNameEl = document.querySelector(".showName")
//domelements used to display info 
var bitcoinBtnEl = document.querySelector("#Bitcoin")
var cryptoBtnsEl = document.querySelector("#crypto-btns")


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
	
		
		
		// click event
		showNameEl.addEventListener("click", displayArray)

		
// function displaying crypto info 
		// TESTING HERE: CODE WORKS ON BUTTON CLICK 
var displayCrypto = function(coinArray, [i]) {
	//console.log("TESTING");
	coinNameEl.textContent=("Asset Name: " + coinArray[i].name);
	PriceEl.textContent=("Price: " + coinArray[i].price);
	marketcapEl.textContent=("Market cap: " + coinArray[i].marketCap)
	dailyChgEl.textContent=("Daily Change: " + coinArray[i].dailyChg)
	DailyPercentEl.textContent=("Daily % Change: " + coinArray[i].dailyChgPer)   
};

// handles the click event for crypto 

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
	// click event 
	cryptoBtnsEl.addEventListener("click", handleBtnClick);

	});







	

