/**
 * @param {array} urls
 * @return {promise}
 */
const fetch = require("node-fetch");

async function bulkUrlRequester(urls) {
  //function argument should be an array of URLs that point to json data
  if (!Array.isArray(urls) || urls.length === 0) {
    throw new Error("The function input should be an array of strings");
  }
  return await Promise.all(
    urls.map(async item => {
      try {
        const fetchUrl = await fetch(item);
        return await fetchUrl.json();
      } catch (error) {
        throw new Error(`Error in data fetch of this item: ${item}`);
      }
    })
  );
}

module.exports = bulkUrlRequester;
