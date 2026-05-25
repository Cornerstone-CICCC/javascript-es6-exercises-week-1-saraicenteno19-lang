const facebookProfile = {
  name: "Sarai",
  friends: 0,
  messages: [],

  postMessage: function (message) {
    this.messages.push(message);
  },

  deleteMessage: function (index) {
    this.messages.splice(index, 1);
  },

  addFriend: function () {
    this.friends += 1;
  },

  removeFriend: function () {
    if (this.friends > 0) {
      this.friends -= 1;
    }
  }
};
facebookProfile.addFriend();
facebookProfile.addFriend();
facebookProfile.postMessage("Hola mundo");
facebookProfile.postMessage("Segundo mensaje");

console.log(facebookProfile);

facebookProfile.deleteMessage(0);
facebookProfile.removeFriend();

console.log(facebookProfile);
