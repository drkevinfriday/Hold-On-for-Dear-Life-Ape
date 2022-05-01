//Domelments
var coinNameEl = document.querySelector(".coinName")
var PriceEl = document.querySelector(".coinPrice")
var marketcapEl = document.querySelector(".coinMcap")
var dailyChgEl = document.querySelector(".coinDayChg")
var DailyPercentEl = document.querySelector(".coinPrecentChange")
var showNameEl = document.querySelector(".showName")



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
	
	console.log("click works")


	for(var i=0; i< coinArray.length; i++){
		console.log(coinArray[i])


	}
	coinNameEl.textContent=coinArray[0].name
	PriceEl.textContent=coinArray[0].price
	marketcapEl.textContent=coinArray[0].marketCap
	dailyChgEl.textContent=coinArray[0].dailyChg
	DailyPercentEl.textContent=coinArray[0].dailyChgPer

}

var testCoin = function(){
	for(var i=0; i< array.length; i++){
		console.log(array[i])
}}


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
		
		//
		// displayArray(coinArray)
		console.log(coinArray)
		// console.log(coinArray[0])

		// condiontal statement test for type of coin needed


		


		// display the info from selected coin to hmtl page.
		
		
		
		// click event
		showNameEl.addEventListener("click", displayArray)
		
		
	});



// coinNameEl.addEventListener("click", displayArray)



	

