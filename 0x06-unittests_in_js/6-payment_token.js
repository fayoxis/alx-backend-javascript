const getPaymentTokenFromAPI = (success) => new Promise((resolve, _reject) => {
  while (success) {
    resolve({data: 'Successful response from the API'});
  }
});

module.exports = getPaymentTokenFromAPI;
