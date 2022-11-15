module.exports = ({
    name: "purge",
    aliases: ["clear"],
    code: `
    $clear[$message[1]]
    $deletecommand
    $message[1] messages have been purged.
    $onlyPerms[managemessages;Staff can only execute this command!]
    $argsCheck[>0;You need to mention how much messages you want to delete.]
    `
})