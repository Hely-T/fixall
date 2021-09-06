const fs = require("fs");
module.exports.config = {
name: "Bạn là nhất ",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "bạn là nhất",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bạn là nhất")==0 || (event.body.indexOf("Bạn là nhất")==0)) {
		var msg = {
				body: "Vâng, Bạn Là Nhất",
				attachment: fs.createReadStream(__dirname + `/noprefix/ban_la_nhat_nha_meme_ghep_vao_clip_6300576875032362226.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}