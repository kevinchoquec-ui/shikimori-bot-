module.exports = {
    name: "menu",
    execute: async (sock, msg) => {
        const menu = `
╭───〔 Shikimori 〕
│
│ ✦ !ping
│ ✦ !menu
│
╰──────────────
        `
        await sock.sendMessage(msg.key.remoteJid, { text: menu })
    }
}
