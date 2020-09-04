const emitter = {
  on: function (event, subscriber, handler) {
    notificationsArray.push({
      key: event,
      text: "Произошло новое событие " + event,
    });
    handler.call(subscriber);
  },

  off: function (event, subscriber) {},

  emit: function (event) {},
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

emitter.on("new_notification", notifications, notifications.count).on("new_notification", logger, function () {
  this.logs.push("Произошло новое событие new_notification");
});

console.log(notificationsArray);
console.log(notifications.counter);
