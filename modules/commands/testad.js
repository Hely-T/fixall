const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "testad",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Lệnh này chỉ fix thôi",
  commandCategory: "Info",
  usages: "testad",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
{body:`🤩ADMIN BOT🤩
\n🔰 Tên: Hà Mạc Trường Giang ✅
\n✅ Biệt danh:HelyT
\n⚛️ UID: 626463485
\n🔗 Link FB: https://www.facebook.com/DVFB.HMTG2
\n🚻 Giới tính: Nam
\n💠 Username: DVFB.HMTG2
\n🥺 Zalo: 0911023689
\n✡️ Sở thích: Nghe nhạc
\n👩‍❤️‍👨 Đã có Bồ 
\n👉 Profile: https://truonggiangprocoder.github.io/profile/index.html`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${626463485}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };