const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'quandl1.p.rapidapi.com',
		'X-RapidAPI-Key': 'b25265300amsh7ebdac809f3a03cp198da9jsne8a87b529796'
	}
};

fetch('https://quandl1.p.rapidapi.com/datasets/AAPL/FB.json', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));