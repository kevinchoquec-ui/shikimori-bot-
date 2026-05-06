const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")
const qrcode = require("qrcode-terminal")

const { loadCommands } = require("./utils/loader")
const { handleMessage } = require("./handler")

async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState("session")

    const sock = makeWASocket({
        auth: state
    })

    const commands = loadCommands()

    sock.ev.on("creds.update", saveCreds)

    sock.ev.on("connection.update", ({ connection, qr }) => {
        if (qr) qrcode.generate(qr, { small: true })

        if (connection === "open") {
            console.log("🚀 Shikimori listo")
        }
    })

    sock.ev.on("messages.upsert", async ({ messages }) => {
        await handleMessage(sock, messages[0], commands)
    })
}

startBot()
