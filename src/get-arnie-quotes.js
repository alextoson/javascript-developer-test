const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const results = [];

  const getUrls = urls.map((url) => {
    return httpGet(url);
  });

  await Promise.all(getUrls).then((responses) => {
    responses.forEach((response) => {
      const message = JSON.parse(response.body).message;

      if (response.status === 200) {
        results.push({ "Arnie Quote": message });
      } else {
        results.push({ FAILURE: message });
      }
    });
  });

  return results;
};

module.exports = {
  getArnieQuotes,
};
