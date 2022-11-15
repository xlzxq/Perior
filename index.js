const script = require('discordbot-script')
const fs = require('fs')
const commands = fs.readdirSync("./commands/")

const bot = new script({
  token: "TOKEN_HERE",
  prefix: ["p!"]
})

bot.Variables({
    money: "0"
})

bot.Status({
    0: {
        description: "you", 
        type: "LISTENING" 
    }
}, 13000)

bot.MessageEvent()

var amount = 0
for (const files of commands) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))
    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command(command)
        amount += 1
        console.log(`\x1b[31mLoaded \x1b[91m${command.name}.js`)
    }
}
console.log(`\x1b[31m${amount} commands loaded`)