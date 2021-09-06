module.exports.config = {
	name: "sexy",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Random Anime",
	commandCategory: "random-img",
	usages: "sexy",
	cooldowns: 60
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://api.vangbanlanhat.tk/image?type=sexy').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/sexy.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sexy.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/sexy.${ext}`)).on("close", callback);
			})
}