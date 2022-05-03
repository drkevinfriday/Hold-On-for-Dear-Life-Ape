//Dom elements
var stockNameEl = document.querySelector(".stockName")
var stockPriceEl = document.querySelector(".stockPrice")
var stockMarketcapEl = document.querySelector(".stockMcap")
var stockDailyChgEl = document.querySelector(".stockDayChg")
var stockDailyPercentEl = document.querySelector(".stockPrecentChange")
var showNameEl = document.querySelector(".showName")
var stockArray = [];

const options = {
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
	fetch('https://finshorts.p.rapidapi.com/index.php?q=aapl', options),
	fetch('https://finshorts.p.rapidapi.com/index.php?q=Tsla', options),
    fetch('https://finshorts.p.rapidapi.com/index.php?q=dow', options),
    fetch('https://finshorts.p.rapidapi.com/index.php?q=amzn', options),
    fetch('https://finshorts.p.rapidapi.com/index.php?q=sp', options),


]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {
	// Log the data to the console
	// You would do something with both sets of data here


	
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







// event listners
showNameEl.addEventListener("click", displayArray)










