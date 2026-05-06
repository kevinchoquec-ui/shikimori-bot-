const config = require("../../config.json")

module.exports = {
    name: "shutdown",
    execute: async (sock, msg, args, sender) => {

        if (!sender.includes(config.owner)) {
            return sock.sendMessage(msg.key.remoteJid, {
                text: "❌ No autorizado"
            })
        }

        await sock.sendMessage(msg.key.remoteJid, {
            text: "🛑 Apagando Shikimori..."
        })

        process.exit()
    }
}
