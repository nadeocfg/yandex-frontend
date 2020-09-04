/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
  const initialDate = new Date(date);

  return {
    add: function (number, timeType) {
      if (!number || number < 0) {
        throw new TypeError();
      }

      switch (timeType) {
        case "years":
          initialDate.setFullYear(initialDate.getFullYear() + number);
          break;

        case "months":
          initialDate.setMonth(initialDate.getMonth() + number);
          break;

        case "days":
          initialDate.setDate(initialDate.getDate() + number);
          break;

        case "hours":
          initialDate.setHours(initialDate.getHours() + number);
          break;

        case "minutes":
          initialDate.setMinutes(initialDate.getMinutes() + number);
          break;

        default:
          throw new TypeError();
      }

      return this;
    },
    subtract: function (number, timeType) {
      if (!number || number < 0) {
        throw new TypeError();
      }

      switch (timeType) {
        case "years":
          initialDate.setFullYear(initialDate.getFullYear() - number);
          break;

        case "months":
          initialDate.setMonth(initialDate.getMonth() - number);
          break;

        case "days":
          initialDate.setDate(initialDate.getDate() - number);
          break;

        case "hours":
          initialDate.setHours(initialDate.getHours() - number);
          break;

        case "minutes":
          initialDate.setMinutes(initialDate.getMinutes() - number);
          break;

        default:
          throw new TypeError();
      }

      return this;
    },
    get value() {
      const month = initialDate.getMonth() < 10 ? 0 + String(initialDate.getMonth() + 1) : initialDate.getMonth() + 1;
      const days = initialDate.getDate() < 10 ? 0 + String(initialDate.getDate()) : initialDate.getDate();
      const hours = initialDate.getHours() < 10 ? 0 + String(initialDate.getHours()) : initialDate.getHours();
      const minutes = initialDate.getMinutes() < 10 ? 0 + String(initialDate.getMinutes()) : initialDate.getMinutes();

      return initialDate.getFullYear() + "-" + month + "-" + days + " " + hours + ":" + minutes;
    },
  };
};
