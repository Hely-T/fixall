const fs = require("fs");
module.exports.config = {
	name: "Luật bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "HelyT", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yêu bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Luật bot")==0 || (event.body.indexOf("luật bot")==0)) {
		var msg = {
				body: "MỜI BOT VÀO NHÓM /rankup 2 LẦN ĐỂ TẮT THÔNG BÁO LÊN CẤP !!!!!\n++++ KICK BOT = BAN BOX ++++\n\nDo sự thiếu hiểu biết của thành viên trong nhóm hoặc do cả quản trị viên cũng đéo có ý thức nên chả ai quản được để thành ra bot bị ăn block tin nhắn hoặc có thể bay acc bot (t bay lần thứ n rồi đấy.-.) hoặc do một số đứa ngu k biết sài bot lại bảo bot ngu thiểu năng và bảo bot dởm(nếu dởm thì kick t ra kiếm bot khác mà sài nhé._.).\nThứ 2\nAdd bot vô box mà không xin phép 🤔 rồi phá bot xong kick bot hãm loz vừa thôi nhé 🐧\nThứ 3\nNhiều thành phần có 1,2 lệnh cách 5s spam một lần máy cũng không chịu nổi._.\nThứ 4\nCó 1 số thành phần bảo dùng máy vippro no 1 ip12prx samsung abcxyz gì đó xong bảo bot vào nhắn tin lag hết cả máy thì t nghĩ nên đi thay máy mới hoặc đập cmn đi .-.\nThứ 5\nAdmin sẽ vào kiểm tra đột xuất nếu box nào dưới 10 người và không có ảnh hoặc tên thì auto out box.\nThứ 6\nMột box chỉ sài 1 bot thôi nhé nhiều bot dẫn đến loãng box và ảnh hưởng đến các bot phát hiện có 2 bot hoặc bla bla thì out + ban.\nThứ 7\nVà lần cuối t nói ai sài được bot t thì sài không sài t không ép đừng kiểu thêm vô box rồi chê đủ kiểu bảo bot dởm xong chửi đòi war với bot ._.\nChủ nhật\nChờ update thêm 🌚🌚🌚",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}