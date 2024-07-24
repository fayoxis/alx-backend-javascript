export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // You can add your API call logic here
    // For example, you can use fetch or axios to make the API request
    // and then resolve the Promise with the response data
    // or reject it with an error message

    // For now, let's simulate a successful API response
    const mockResponse = { data: 'This is a mock response from the API' };
    resolve(mockResponse);
  });
}
