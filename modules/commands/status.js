module.exports.config = {
	name: "status",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "HelyT",
	description: "off/on lại bot",
	commandCategory: "admin",
	usages: "[off/on]",
	cooldowns: 0,
	dependencies: {
		"eval": ""
	}
};

module.exports.handleReaction = async ({ event, api, handleReaction, Currencies}) => {
  if (event.userID != handleReaction.author) return;
  if (event.reaction != "👍") return; 
const eval = require("eval");
if (args[0] == "off") {
return api.sendMessage("✅OFF...", event.threadID, () => eval("module.exports = process.exit(0)", true), event.messageID);
}
else if(args[0] == "on") {
return api.sendMessage("✅ON...", event.threadID, () => eval("module.exports = process.exit(1)", true), event.messageID);
}
else {
return api.sendMesssage(`Sai cú pháp.`,event.threadID,event.messageID)
}
}
module.exports.run = async ({ event, api }) => {
api.sendMessage(`Bạn có muốn off bot trong lúc này không, reaction tin nhắn này để xác nhận:\n👍 : đồng ý`, event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
}
