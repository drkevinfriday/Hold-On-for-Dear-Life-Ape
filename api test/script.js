const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'coingecko.p.rapidapi.com',
		'X-RapidAPI-Key': '3f322a173bmshcf96baf9a457488p1812bajsn8e668a882dbd'
	}
};

fetch('https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=100&order=market_cap_desc', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));