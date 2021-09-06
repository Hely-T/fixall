
module.exports.config = {
  name: "lyric",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Tìm kiếm lyric bài hát theo tên",
  commandCategory: "Media",
  usages: "lyric Em có nghe",
    cooldowns: 5,
    dependencies: {
      "axios": ""
    }
};

 module.exports.run = async function({ api, event, args }) {
    if(args.length == 0) api.sendMessage("Vui lòng nhập tên bài hát cần xem lời !",event.threadID,event.messageID)
    else {
    let content = args.join("%20");
    const axios = require('axios');
          let res = await axios.get(encodeURI(`http://le31.glitch.me/lyrics-nct?q=${content}`));
       console.log(res)
       api.sendMessage(res.data.name+ "\r\n" + res.data.lyrics,event.threadID,event.messageID)
     }
    }