module.exports.config = {
	name: "cosplay",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "HelyT",
	description: "Ramdom ảnh Cosplay Tính Phí",
	commandCategory: "random-img",
	usages: "cosplay",
	cooldowns: 1
};

module.exports.run = async ({ api, event, Currencies }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 1000) {
		axios.get('https://web-api-teammucode.ga/cosplay.php').then(res => {
		var callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + '/cache/cosplay.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/cosplay.jpg'), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + '/cache/cosplay.jpg')).on("close", callback).then(Currencies.setData(event.senderID, options = {money: money - 1000}));
			})
	} else return api.sendMessage("Bạn cần 1000 đô ?",event.threadID,event.messageID);
}