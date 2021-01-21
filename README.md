# bulk-url-requester
BulkUrlRequester is a package that gets an array of URLs that point to json files and returns the content of the json in a promise.

# Usage
```
const bulkUrlRequester = require('bulk-url-requester')

 const urls = [
    "https://en.wikipedia.org/w/api.php?action=query&titles=Albert+Einstein&prop=info&format=json",
    "https://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json",
  ];

const requestMultipleUrls = async()=> {
   const data = await bulkUrlRequester(urls)
    .then(data => console.log(data))
    .catch(e => console.error(e))
}

```
# Dependencies
* [Node-fetch](https://www.npmjs.com/package/node-fetch)

# Dev Dependencies
* [JEST](https://www.npmjs.com/package/jest)

# Test Coverage (JEST)

100% Statements 10/10   
100% Branches 4/4   
100% Functions 2/2   
100% Lines 10/10
