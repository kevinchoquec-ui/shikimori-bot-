const config = require("../../config.json")

module.exports = {
    name: "say",
    execute: async (sock, msg, args, sender) => {

        // verificar owner
        if (!sender.includes(config.owner)) {
            return sock.sendMessage(msg.key.remoteJid, {
                text: "❌ No eres el owner"
            })
        }

        const text = args.join(" ")

        if (!text) {
            return sock.sendMessage(msg.key.remoteJid, {
                text: "⚠️ Escribe algo"
            })
        }

        await sock.sendMessage(msg.key.remoteJid, {
            text: text
        })
    }
}
