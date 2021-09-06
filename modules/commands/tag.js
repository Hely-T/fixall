
module.exports.config = {
	name: "tag",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Leo", 
	description: "noprefix",
	commandCategory: "System",
	usages: "",
    cooldowns: 1, 
};

module.exports.handleEvent = ({ event, api}) => {
if (event.body.indexOf("@Nguyễn An")==0 || (event.body.indexOf("@Nguyễn An")==0)) {
		return api.sendMessage(`Kêu Admin Của Tao Làm Con Mẹ Gì\nCó việc gì thì vui lòng liên hệ qua fb.com/CHIP2502` , event.threadID, event.messageID)
		}
};

module.exports.run = () => {}