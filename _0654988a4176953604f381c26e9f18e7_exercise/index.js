module.exports = {
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
