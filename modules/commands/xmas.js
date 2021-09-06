module.exports.config = {
        name: "xmas",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "Leo",
        description: "Kiểm tra thời gian tới NOEL",
        commandCategory: "system",
        cooldown: 5,
 };
 
 
 module.exports.run = async ({api, event}) => {
        var now = new Date();
        var xmasDay = new Date(now.getFullYear(),11,25);
        var offset = xmasDay.getTime() - now.getTime();
        var days = Math.floor(offset/1000/60/60/24);
        offset-= days*1000*60*60*24;
        var hours = Math.floor(offset/1000/60/60);
        offset-= hours*1000*60*60;
        var minutes = Math.floor(offset/1000/60);
        offset-= minutes*1000*60;
        var second = Math.floor(offset/1000);
        return api.sendMessage("",event.threadID, () => api.sendMessage(`Còn ${days} ngày ${hours} giờ ${minutes} phút ${second} giây là tới NOEL`, event.threadID, event.messageID));
 }