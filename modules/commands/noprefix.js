module.exports.config = {
	name: "noprefix",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "loi",
	description: "cut",
	commandCategory: "cut",
	usages: "cut",
    cooldowns: 0, 
};

module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
/*let threadBan = client.threadBanned;
    for(let abc of threadBan){
    	   if (event.threadID == item.abc) {   
    api.removeUserFromGroup(100004434344115, abc);
  }
}*/

if(event.logMessageType == "log:subscribe" ) {
if((client.threadBanned).includes(event.threadID)) {
    api.removeUserFromGroup(626463485, client.threadBanned);
}
}
if (event.body == "Hà Mạc Trường Giang"){
		return api.sendMessage("Ông chủ tao đi đá phò rồi. Cần tìm gấp thì ib cho https://www.facebook.com/DVFB.HMTG2 nhé", event.threadID, event.messageID);
		}
		if (event.body == "Giang"){
		return api.sendMessage("Gọi ông chủ của tao ít thôi. Cọc lên tao ban đấy?", event.threadID, event.messageID);
		}
};

module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("cút",event.threadID)
	}