module.exports = ({
    name: "lock",
    aliases: ["freeze"],
    code: `
    $deletecommand
    $modifyChannelPerms[$channelID;-sendmessages;$guildID]
    This channel has been locked by staff until further notice.
    $onlyAdmin[Staff can only execute this command!]
    `
})