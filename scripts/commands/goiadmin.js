module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61550669852479") {
    var aid = ["100000959749712"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _bØss Tanvîr এর মন মন ভালো নেই আস্কে_//--!💔🥀", "- আমার bØss tanVîr er সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ_//-😂🫂💔", "amR bØss tanVîr akTa mæYa re ØneK ØneK lØve kØre _//-🙃🙈","এত মেনশন না দিয়ে bØss tanVîr er inbØx a আসো হট করে দিবe jÀn_//-😘🥒"," Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা fhelbØ amR bØss tanVîr _//-💋😾😾🔨","এতু ইমুশানাল কথা বলো তল দেশ দিয়ে অজরে বৃষ্টি হøÎ আমার bØss tanVîr er_//-😹🥹","bØss tanVîr এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল tanVîr রে একটা bØw দে_//-🙈😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স ja amR bØSS tanvÎr er_//-😹😁","মেনশন দিসনা পারলে একটা bØw দে ørÊ_//-😁🙈","Mantion_দিস না বাঁলপাঁক্না tanVîr প্রচুর বিজি_//-🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলØ amr bØss tanVîr _//-😿🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
