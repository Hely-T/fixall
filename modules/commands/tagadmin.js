module.exports.config = {
  name: "tagadmin",
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
    var aid = ["626463485","626463485"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag lần nữa bố ban khỏi dùng"," lần nữa tao đấm cho đấy","Đã bảo đừng tag mà, thích ăn đấm hả😠","Đĩ mẹ mày thích tag không con chó 😏"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  },