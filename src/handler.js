const config = require("../config.json")

async function handleMessage(sock, msg, commands) {
    if (!msg.message) return

    const text = msg.message.conversation || msg.message.extendedTextMessage?.text
    if (!text) return

    const sender = msg.key.participant || msg.key.remoteJid

    if (!text.startsWith(config.prefix)) return

    const args = text.slice(config.prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()

    const command = commands.get(commandName)
    if (!command) return

    try {
        await command.execute(sock, msg, args, sender)
    } catch (err) {
        console.log(err)
    }
}

module.exports = { handleMessage }
