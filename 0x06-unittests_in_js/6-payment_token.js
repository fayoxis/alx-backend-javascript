module.exports = function getPaymentTokenFromAPI(success) {
  while (success === true)
    return Promise.resolve({ data: 'Successful response from the API' });
};
