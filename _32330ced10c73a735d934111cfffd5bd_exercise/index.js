/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
  let arr = collection;

  for (let i = 1; i < arguments.length; i += 1) {
    if (arguments[i].type === "filter") {
      arr = handleFilter(arr, arguments[i].searchKey, arguments[i].searchValue);
    }
  }

  for (let i = 1; i < arguments.length; i += 1) {
    if (arguments[i].type === "select") {
      arr = handleSelect(arr, arguments[i].fields);
    }
  }

  return arr;
}

/**
 * @params {String[]}
 */
function select(...fields) {
  return {
    type: "select",
    fields,
  };
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
  return {
    type: "filter",
    searchKey: property,
    searchValue: values,
  };
}

function handleSelect(arr, fields) {
  const result = [];
  for (const arrItem of arr) {
    const resultElement = {};
    for (const fieldsItem of fields) {
      if (arrItem[fieldsItem]) {
        resultElement[fieldsItem] = arrItem[fieldsItem];
      }
    }
    result.push(resultElement);
  }

  return result;
}

function handleFilter(arr, key, values) {
  const result = [];

  for (const arrItem of arr) {
    if (arrItem[key]) {
      if (values.includes(arrItem[key])) {
        result.push(arrItem);
      }
    }
  }

  return result;
}

module.exports = {
  query: query,
  select: select,
  filterIn: filterIn,
};
