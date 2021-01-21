const bulkUrlRequester = require("../index");

describe("Input Structure Tests", () => {
  const isArrayError = "The function input should be an array of strings";

  test("Returns an error if the function input is a signle URL string", async () => {
    const testCase = "https://tools.learningcontainer.com/sample-json.json";
    try {
      await bulkUrlRequester(testCase);
    } catch (error) {
      expect(error.message).toEqual(isArrayError);
    }
  });

  test("Returns an error if the function input is an empty array", async () => {
    const testCase = [];
    try {
      await bulkUrlRequester(testCase);
    } catch (error) {
      expect(error.message).toEqual(isArrayError);
    }
  });
});

describe("Array of JSON URLs Input Tests", () => {
  test("Returns an error if we do not pass the correct url", async () => {
    const testCase = [
      "https://en.wikipedia.org/w/api.php?action=query&titles=Albert+Einstein&prop=info&format=json",
      "https://google.com",
      "https://tools.learningcontainer.com/sample-json.json",
    ];
    const dataError = `Error in data fetch of this item: ${testCase[1]}`;
    try {
      await bulkUrlRequester(testCase);
    } catch (error) {
      expect(error.message).toEqual(dataError);
    }
  });

  test("Returns the content of json from the array of URLs that point to json files", async () => {
    const testCase = [
      "https://jsonplaceholder.typicode.com/todos/1",
      "https://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json"
    ];
    const testData = [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "fruit": "Apple",
        "size": "Large",
        "color": "Red"
      }
    ];

    const resultData = await bulkUrlRequester(testCase);
    expect(JSON.stringify(resultData)).toEqual(JSON.stringify(testData));
  });
});
