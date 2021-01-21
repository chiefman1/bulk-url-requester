# bulk-url-requester
![npm](https://img.shields.io/npm/v/bulk-url-requester)   

`BulkUrlRequester` is a package that gets an array of URLs that point to json files and returns the content of the json in a promise.

## Install

[Download BulkUrlRequester](https://github.com/chiefman1/bulk-url-requester/archive/main.zip)

```
npm install bulk-url-requester
```

## Usage example
```
const bulkUrlRequester = require('bulk-url-requester')

 const urls = [
    "https://en.wikipedia.org/w/api.php?action=query&titles=Albert+Einstein&prop=info&format=json",
    "https://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json",
  ];

const requestMultipleUrls = async()=> {
    let data;
    try {
        data = await bulkUrlRequester(urls);
    } catch (e) {
        console.log(e.message);
    }
    console.log(data)
}

```
## Dependencies
* [Node-fetch](https://www.npmjs.com/package/node-fetch)

## Dev Dependencies
* [JEST](https://www.npmjs.com/package/jest)

## Test Coverage (JEST)

```
npm install
jest --coverage
```

100% Statements 10/10   
100% Branches 4/4   
100% Functions 2/2   
100% Lines 10/10
