const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'finshorts.p.rapidapi.com',
		'X-RapidAPI-Key': '3f322a173bmshcf96baf9a457488p1812bajsn8e668a882dbd'
	}
};

fetch('https://finshorts.p.rapidapi.com/index.php?q=aapl', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

fetch('https://finshorts.p.rapidapi.com/index.php?q=Tsla', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

fetch('https://finshorts.p.rapidapi.com/index.php?q=dow', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

fetch('https://finshorts.p.rapidapi.com/index.php?q=amzn', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    
fetch('https://finshorts.p.rapidapi.com/index.php?q=sp', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));







