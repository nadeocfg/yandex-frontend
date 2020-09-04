/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
  return hashtags.reduce(checkArr, []).join(", ");
};

function checkArr(res, item) {
  if (!res.includes(item.toLowerCase())) {
    res.push(item.toLowerCase());
  }

  return res;
}
