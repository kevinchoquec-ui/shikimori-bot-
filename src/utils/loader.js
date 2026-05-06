const fs = require("fs")
const path = require("path")

function loadCommands() {
    const commands = new Map()
    const files = fs.readdirSync(path.join(__dirname, "../commands"))

    for (let file of files) {
        const cmd = require(`../commands/${file}`)
        commands.set(cmd.name, cmd)
    }

    return commands
}

module.exports = { loadCommands }
