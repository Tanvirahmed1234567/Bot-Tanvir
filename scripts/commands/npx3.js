const fs = require("fs");
module.exports = {
  config:{
	name: "npx3",
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
  const NAYAN = ['https://i.imgur.com/63QdDLD.mp4','https://i.imgur.com/63QdDLD.mp4','https://i.imgur.com/1NxJY4e.mp4','https://i.imgur.com/7vI8RG9.mp4','https://i.imgur.com/AmqaXI9.mp4','https://i.imgur.com/8SWnNyk.mp4']
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("🥵")==0 || body.indexOf("🫦")==0 || body.indexOf("👅")==0 || body.indexOf("💋")==0 || body.indexOf("🤤")==0 || body.indexOf("👄")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: " •┈✤⋆⃝🥵লু্ঁচ্চা্ঁগু্ঁলা্ঁ সঁর্ এ্ঁনঁতে্ঁ•✤'⋆⃝💚😘 ",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🫦", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
