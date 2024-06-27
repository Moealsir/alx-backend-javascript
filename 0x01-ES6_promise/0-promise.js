#!/usr/bin/node
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
    }, 1000);
  });
}

export default getResponseFromAPI;