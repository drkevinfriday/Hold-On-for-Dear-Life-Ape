const finnhub = 'finnhub';

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = ""
const finnhubClient = new finnhub.DefaultApi()

finnhubClient.symbolSearch('AAPL','DOW', (error, data, response) => {
  console.log(data)
});