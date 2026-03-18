const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require("pino");

async function startBot() {
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
        caption: `🤖 CT x JB BOT

👑 Owner: JB PAPA 71 ☠️

☑️ .antilink
☑️ .antivirtex
☑️ .group open/close
☑️ .promote
☑️ .demote
☑️ .kick
☑️ .kickall
☑️ .kickadmin
☑️ .antiimage
☑️ .antivideo
☑️ .antiaudio
☑️ .antisticker
☑️ .antipoll
☑️ .antilocation
☑️ .antidocument
☑️ .anticontact
☑️ .antibadword
☑️ .addbadword
☑️ .delbadword
☑️ .listbadword
☑️ .hidetag
☑️ .tagall
☑️ .welcome
☑️ .goodbye
☑️ .groupsts
☑️ .listadmin
☑️ .upgpsts
☑️ .gstatus
☑️ .groupevent
☑️ .adminevent`
      });
    }
  });
}

startBot();
