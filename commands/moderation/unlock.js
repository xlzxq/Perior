module.exports = ({
    name: "unlock",
    aliases: ["unfreeze"],
    code: `
    $deletecommand
    $modifyChannelPerms[$channelID[];+sendmessages;$guildID]
    This channel has been unlocked.
    $onlyAdmin[Staff can only execute this command!]
    `
})