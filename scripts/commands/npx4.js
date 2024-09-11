const fs = require("fs");
module.exports = {
  config:{
  name: "npx4",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.imgur.com/NVfSArO.mp4','https://i.imgur.com/fUyXti1.mp4','https://i.imgur.com/4oT45qR.mp4',
      { responseType: 'stream' }
    )
  ).data;

  if (body.indexOf("💖")==0 || body.indexOf("🤍")==0 || body.indexOf("🩷")==0 || body.indexOf("🤎")==0 || body.indexOf("💜")==0 || body.indexOf("💝")==0 || body.indexOf("💘")==0 || body.indexOf("💟")==0 || body.indexOf("💗")==0 || body.indexOf("🖤")==0) {
    var msg = {
        body: " -•|•সঠিক মানুষের চোখে তুমি সব সময় সুন্দর!_//-🤍🌸",
        attachment: media
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤",event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {
  }
}

