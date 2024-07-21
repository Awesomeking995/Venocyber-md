//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "255625774543";
global.owner = process.env.OWNER_NUMBER || "255625774543";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "false";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9UM05lL3drZm4vNUtId1Z2R3dmSm1NbTFDaTRmNUtEVmpyZmN0SklYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVVrOFdVNnJ1Y2NjUTR0QXVtV1dZUnZpSEgrZEZTTzFkT0tQcVFXWGhWTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQVk2b1dOWWx6MXJYYzFla2xSVWo3bEdEWG1vMUl1T3h4RFZuWlR4Rkd3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhMnB4d2dSeExqTmN2RXI1S1ZWa3NqR002L0x6NUZGbmNmcUZDQ3kxV1FFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9LaEVEeXdDeXJCOEVEdXRIbGlGa3VpU1F3YjhvNkFLMzd6MnFjWnlnM0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllyZ1hlUVFWOGJTelRCYTdScUVmNU51aGFEQTJXYXFGYXdyWXNBQ0RCZ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0FobThsdmI2OTNjcWFrU1ErM1BiTVdUM3Y1Y1NpWlI5WmJCSDNRN0psOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2dna3cva2NjT1FCUWhtMTdmMmZldHM4UnNGVzkwaG94d1dsRGxYcHd5OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRFcDczdU1xTHQ4YmFlWW5tNDJGY01sSG9yaitsZ0lpQmVqWFhOYjRGN1JCYmd4eEp0bnpTYlNEL1RXZXI3N3cvZ3JpM2NteGs4TThRTFRDMVV3NERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA0LCJhZHZTZWNyZXRLZXkiOiJyekxqTEREZGFNa2lyNmhnS3l6VDEySXp2N3RXMnRIWkp2ZHMvT2RDMklnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJQTGs0cDNEaVJ0U2dESFFFbEZ3QmJ3IiwicGhvbmVJZCI6Ijg3NDRlYjRkLTczOWEtNDhhNS04MDFmLWQ5ZmQwNjJlOWEyZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzMC9LQkMrdFFENUF3TjV2ZG1UYnRuTytLdEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3RZNDk1SlAyaXJGUnNreVVmL2k1SDQvU05NPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik03TTU2M0E1IiwibWUiOnsiaWQiOiIyMzQ4MTQ3MjE0NTg3OjMyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKYlQ4dGNERU9qQzliUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrSXlvcVc1QThNT1J6MWNmbVoxKzVBTTQ2ejJ1TDhiNGgrN003b204aHpjPSIsImFjY291bnRTaWduYXR1cmUiOiJjMXdtWllhODNjMTg3djE5UmJWSmhRMmZnOXo4MkIyTUZ6MlE3Mks0MDROdHFlblY2ZmxZZU40WVpUQndZL1pOdWRTNTVqMFYySDdybzByY1pPUkVEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMFZkTmtzUHRGejNWWXlVdElKbEVlM3dvZThnOEQwd3RSQUhkSmdndVM1dlZ5NTdlTHIyUFhLYVNXekhYdTRKaEFYQ1NoQkpDMFpZQ0RiOGd4aDY0QXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQ3MjE0NTg3OjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpDTXFLbHVRUEREa2M5WEg1bWRmdVFET09zOXJpL0crSWZ1ek82SnZJYzMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE1OTAxMzMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTEQvIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑-𝐌𝐃 ╠════ need support then ☞ https://rb.gy/izabex ═════╣",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
