module.exports.config = {
name: "hearing",
version: "1.0.0",
hasPermssion: 0,
credits: "HelyT",
description: "Thính Việt Nam",
commandCategory: "News",
usages: "gai",
cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const res = await axios.get(`http://le31.glitch.me/poem`);
var thính = res.data.data
return api.sendMessage(` ${thính} `, event.threadID, event.messageID)
}