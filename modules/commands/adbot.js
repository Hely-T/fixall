module.exports.config = {
    name: "adbot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "HelyT",
    description: "",
    commandCategory: "info",
    usages: "",
    cooldowns: 3,
    dependencies: {
        "axios": "",
        "fs-extra": ""
    }
    
};

module.exports.languages = {
    "vi": {
        "INFOADMIN": "🖐Xin chào %1\n🔰 Tên admin: %2 ✅\n⚛️ UID: %3\n🔗 Link FB: %4\n🚻 Giới tính: %5\n💠 Username: %6\n❄️Kết bạn ADMIN : %7\n🥺 Zalo: 0911023689\n✡️ Sở thích: Ngủ, Nghe nhạc\n👩‍❤️‍👨 Đã có Bồ"
    }
}

module.exports.run = async({ api, event, args, Users, getText }) => {
    const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
    var nameid= (await Users.getData(event.senderID)).name;
    let data = await api.getUserInfo(global.config.ADMINBOT[0]);
    let url = data[global.config.ADMINBOT[0]].profileUrl;
    let b = data[global.config.ADMINBOT[0]].isFriend == false ? "không !" : data[global.config.ADMINBOT[0]].isFriend == true ? "có !" : "Đéo";
    let sn = data[global.config.ADMINBOT[0]].vanity;
    let name = await data[global.config.ADMINBOT[0]].name;
    var sex = await data[global.config.ADMINBOT[0]].gender;
    var uid = global.config.ADMINBOT[0]
    var gender = sex == 2 ? "Nam ♂️" : sex == 1 ? "Nữ ♀" : "Trần Đức Bo";
    var getimg = (await axios.get(`https://4boxvn.com/api/avt?s=${global.config.ADMINBOT[0]}`, {responseType: "arraybuffer"})).data;
    fs.writeFileSync(__dirname + `/cache/1.png`, Buffer.from(getimg, "utf-8")); 
    return api.sendMessage({body: getText("INFOADMIN", nameid, name, uid, url, gender, sn, b), attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
    
    }
 





  