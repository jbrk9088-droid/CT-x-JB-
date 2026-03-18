echo 'const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require("pino");

async function start() {
const { state, saveCreds } = await useMultiFileAuthState("session");

const sock = makeWASocket({
auth: state,
logger: pino({ level: "silent" })
});

sock.ev.on("creds.update", saveCreds);

sock.ev.on("messages.upsert", async ({ messages }) => {
const msg = messages[0];
if (!msg.message) return;

const text = msg.message.conversation || msg.message.extendedTextMessage?.text;
const from = msg.key.remoteJid;

if (text === ".menu") {
await sock.sendMessage(from, {
image: { url: "https://files.catbox.moe/8maonp.png" },
caption: "🤖 CT x JB BOT\n👑 Owner: JB PAPA 71 ☠️\n\n☑️ .antilink\n☑️ .antivirtex\n☑️ .group open/close\n☑️ .promote\n☑️ .demote\n☑️ .kick\n☑️ .kickall\n☑️ .kickadmin\n☑️ .antiimage\n☑️ .antivideo\n☑️ .antiaudio\n☑️ .antisticker\n☑️ .antipoll\n☑️ .antilocation\n☑️ .antidocument\n☑️ .anticontact\n☑️ .antibadword\n☑️ .addbadword\n☑️ .delbadword\n☑️ .listbadword\n☑️ .hidetag\n☑️ .tagall\n☑️ .welcome\n☑️ .goodbye\n☑️ .groupsts\n☑️ .listadmin\n☑️ .upgpsts\n☑️ .gstatus\n☑️ .groupevent\n☑️ .adminevent"
});
}
});
}

start();' > index.js
