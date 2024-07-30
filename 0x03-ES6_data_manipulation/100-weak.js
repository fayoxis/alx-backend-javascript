export const endpointUsage = new WeakMap();

export function fetchFromAPI(url) {
  const usageCount = endpointUsage.get(url) ?? 0;
  
  if (usageCount >= 4) {
    throw new Error('API endpoint is overloaded');
  }
  
  endpointUsage.set(url, usageCount + 1);
}
