export const endpointTracker = new WeakMap();
let requestNumber = 1;

export function callAPI(resource) {
  endpointTracker.set(resource, requestNumber);
  requestNumber++;
  
  const accessCount = endpointTracker.get(resource);
  
  if (accessCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}
