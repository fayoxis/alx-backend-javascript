export default function loadBalancer(chinaDownload, USDownload) {
  const promises = [chinaDownload, USDownload];

  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
}
