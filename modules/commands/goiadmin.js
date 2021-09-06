module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "626463485") {
    var aid = ["9407855","626463485"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag Admin lần nữa bố ban khỏi dùng","Tag Admin lần nữa tao đấm cho đấy","Đã bảo đừng tag Admin mà, thích ăn đấm hả😠","Đĩ mẹ mày thích tag Admin không con chó 😏"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }