#!/usr/bin/node
function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('success');
    }, 1000);
  });
}

export default getResponseFromAPI;
