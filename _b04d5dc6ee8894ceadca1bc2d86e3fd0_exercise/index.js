/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
  return tweet.split(" ").reduce(getHashTag, []);
};

function getHashTag(arr, str) {
  if (str[0] === "#") {
    arr.push(str.slice(1, str.length));
  }

  return arr;
}
