const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'finshorts.p.rapidapi.com',
		'X-RapidAPI-Key': '3f322a173bmshcf96baf9a457488p1812bajsn8e668a882dbd'
	}
};

fetch('https://finshorts.p.rapidapi.com/index.php?q=aapl', options)
.then(function (response) {
    return response.json();
})
.then(function(data){
    console.log(data.data)

    console.log(data.data.symbol)
    console.log("DAily Change:  " + data.data.change)
    console.log("DAily % Change:  " + data.data.changePercent)
    console.log("price: " + data.data.latestPrice)
    console.log("MarketCap: " + data.data.marketCap + "USD")

    

})
   
    

fetch('https://finshorts.p.rapidapi.com/index.php?q=Tsla', options)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data.data)

        console.log(data.data.symbol)
        console.log("DAily Change:  " + data.data.change)
        console.log("DAily % Change:  " + data.data.changePercent)
        console.log("price: " + data.data.latestPrice)
        console.log("MarketCap: " + data.data.marketCap + "USD")

        

    })
fetch('https://finshorts.p.rapidapi.com/index.php?q=dow', options)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data.data)

        console.log(data.data.symbol)
        console.log("DAily Change:  " + data.data.change)
        console.log("DAily % Change:  " + data.data.changePercent)
        console.log("price: " + data.data.latestPrice)
        console.log("MarketCap: " + data.data.marketCap + "USD")

        

    })
fetch('https://finshorts.p.rapidapi.com/index.php?q=amzn', options)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data.data)

        console.log(data.data.symbol)
        console.log("DAily Change:  " + data.data.change)
        console.log("DAily % Change:  " + data.data.changePercent)
        console.log("price: " + data.data.latestPrice)
        console.log("MarketCap: " + data.data.marketCap + "USD")

        

    }) 
fetch('https://finshorts.p.rapidapi.com/index.php?q=sp', options)
    .then(function (response) {
        return response.json();
    })
    .then(function(data){
        console.log(data.data)

        console.log(data.data.symbol)
        console.log("DAily Change:  " + data.data.change)
        console.log("DAily % Change:  " + data.data.changePercent)
        console.log("price: " + data.data.latestPrice)
        console.log("MarketCap: " + data.data.marketCap + "USD")

        

    })






