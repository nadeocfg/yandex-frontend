const emitter = {
  on: function (event, subscriber, handler) {
    // notificationsArray.push({
    //   key: event,
    //   text: "Произошло новое событие " + event,
    // });
    handler.call(subscriber);

    return this;
  },

  off: function (event, subscriber) {
    return this;
  },

  emit: function (event) {
    return this;
  },
};

// Определим объект для счетчика нотификаций
var notifications = {
  counter: 0,
  count: function () {
    this.counter++;
  },
};

// Определим для хранения логов
var logger = {
  logs: [],
};

const notificationsArray = [];

emitter
  .on("new_notification", notifications, notifications.count)
  .on("new_notification", logger, function () {
    this.logs.push("Произошло новое событие new_notification");
  })
  .on("new_notification", logger, function () {
    // this указывает на logger
    this.logs.push("Добавлена новая нотификация. Количество - " + notifications.counter);
  })
  .emit("new_notification");

// console.log(logger);
// console.log(notifications.counter);
