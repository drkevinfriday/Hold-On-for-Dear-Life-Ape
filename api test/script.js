//Domelments




var coinArray = [];

var testArray = [];

let myObject= {}




// this function creates objcts from the api call and pushes them to the coin array

var createobj = function(assetInfo){

// create an object for api call info




let myObject= {}

	
	myObject.name = assetInfo.name;
	myObject.price = assetInfo.current_price;
	myObject.dailyChgPer = assetInfo.price_change_percentage_24h;
	myObject.dailyChg = assetInfo.price_change_24h;
	myObject.marketCap = assetInfo.market_cap;


	// coinArray.push(myObject)
	return myObject


}

var displayArray = function(array){
for (var i = 0; i < array.length; i++){
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
		displayArray(coinArray)
		console.log(coinArray)



	
	});
	console.log(coinArray)

	

