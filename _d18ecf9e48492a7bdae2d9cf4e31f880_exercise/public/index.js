// Телефонная книга
var book = [];

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
  var commandArr = command.split(" ");

  switch (commandArr[0]) {
    case "ADD":
      return addContact(commandArr[1], commandArr[2], book);

    case "REMOVE_PHONE":
      return removePhone(commandArr[1], book);

    case "SHOW":
      return showAllContacts(book);
  }
};

function addContact(name, phones, phoneBook) {
  var phonesArr = phones.split(",");

  const filteredPhoneBook = phoneBook.filter(function (item) {
    return item.name === name;
  });

  if (filteredPhoneBook.length === 0) {
    phoneBook.push({
      name,
      phones: phonesArr,
    });

    return;
  }

  for (item of phoneBook) {
    if (item.name === name) {
      item.phones = item.phones.concat(phonesArr);
    }
  }
}

function removePhone(phone, phoneBook) {
  var res = false;

  for (item of phoneBook) {
    const newArr = item.phones.reduce(function (acc, item) {
      if (item === phone) {
        res = true;
      } else {
        acc.push(item);
      }

      return acc;
    }, []);

    item.phones = newArr;
  }

  book = phoneBook.filter(function (item) {
    return item.phones.length > 0;
  });

  return res;
}

function showAllContacts(phoneBook) {
  const res = phoneBook
    .sort(function (item1, item2) {
      if (item1.name > item2.name) {
        return 1;
      } else {
        return -1;
      }
    })
    .reduce(function (acc, item) {
      acc.push(item.name + ": " + item.phones.join(", "));
      return acc;
    }, []);

  return res;
}
