export const endpointCalls = new WeakMap();

export function makeAPIRequest(url) {
  const requestCount = endpointCalls.get(url) ?? 0;
  
  if (requestCount >= 4) {
    throw new Error('API endpoint is overloaded');
  }
  
  endpointCalls.set(url, requestCount + 1);
}
