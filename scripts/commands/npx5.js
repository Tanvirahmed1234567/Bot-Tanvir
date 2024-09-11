const fs = require("fs");
module.exports = {
  config:{
	name: "npx5",
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
      'https://i.imgur.com/Rcha7U5.mp4','https://i.imgur.com/Nu9xuHR.mp4','https://i.imgur.com/Q99P3FT.mp4','https://i.imgur.com/kwhKEQm.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("🌺")==0 || body.indexOf("🌹")==0 || body.indexOf("🥀")==0 || body.indexOf("💐")==0 || body.indexOf("🌸")==0 || body.indexOf("🏵️")==0 || body.indexOf("🌸")==0 || body.indexOf("🌻")==0 || body.indexOf("🪷")==0 || body.indexOf("🌼")==0) {
		var msg = {
				body: "-একজন বিশ্বস্ত যত্নশীল মানুষ, ফুলের চেয়েও বেশি সুন্দর_//-🙃🌸",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🌺", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}

