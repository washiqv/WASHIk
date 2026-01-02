const fs = global.nodemodule["fs-extra"];
const path = global.nodemodule["path"];

module.exports.config = {
  name: "autoreplybot",
  version: "6.0.2",
  hasPermssion: 0,
  credits: "𝑾𝒂𝒔𝒉𝒊𝒌",
  description: "Auto-response bot with specified triggers",
  commandCategory: "No Prefix",
  usages: "[any trigger]",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body) return; 
  const name = await Users.getNameUser(senderID);
  const msg = body.toLowerCase().trim();

  const responses = {
    "miss you": "𝑨𝒎𝒊 𝒕𝒖𝒎𝒂𝒓𝒆 𝑹𝒂𝒊𝒕𝒆 𝑩𝒉𝒂𝒍𝒐𝒃𝒂𝒔𝒉𝒊😶👻😘",
    "kiss de": "𝒐𝒔𝒍𝒊𝒍 𝒌𝒐𝒕𝒉𝒂 𝒌𝒐𝒊𝒍𝒆 𝑳𝒊𝒇𝒕 𝑵𝒊𝒎𝒖🤬",
    "👍": "𝑾𝒂𝒔𝒉𝒊𝒌 𝑩𝒐𝒔𝒔 𝑮𝒄 𝒕𝒆 𝑯𝒂𝒕 𝒎𝒂𝒓𝒕𝒆 𝑴𝒂𝒏𝒂 𝒌𝒐𝒓𝒄𝒉𝒆..!🐸🤣👍⛏️",
    "help": "𝑷𝒓𝒆𝒇𝒊𝒙 𝑫𝒆 𝑯𝒂𝒍𝒂",
    "hi": " 𝑩𝒚𝒆 𝑷𝒂𝒌𝒉𝒊 𝑯𝒊 𝒌𝒐𝒊𝒍𝒆 𝒌𝒐𝒕𝒉𝒂 𝒌𝒐𝒊𝒕𝒂𝒎 𝒏𝒂..!😜🫵",
    "bc": "𝑺𝒂𝒎𝒆 𝒕𝒐 𝒚𝒐𝒖😊",
    "pro": "𝑵𝒂 𝒂𝒎𝒊 𝒑𝒓𝒐 𝑴𝒂𝒙 😂",
  };

  if (responses[msg]) {
    return api.sendMessage(responses[msg], threadID, messageID);
  }
};

module.exports.run = async function ({ api, event, args, Users }) {
  return this.handleEvent({ api, event, Users });
};
