module.exports.config = {
	name: "bot",
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

module.exports.run = async function({ api, event, args }) {
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