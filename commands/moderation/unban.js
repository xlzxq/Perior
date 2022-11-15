module.exports = ({
    name: "unban",
    aliases: ["pardon"],
    code: `
    $unban[$message[1]]
I have managed to unban id $username[$message[1]].
$argsCheck[>0;You need to mention a ID in order to unban.]
$onlyPerms[ban;Staff can only execute this command!]
$onlyIf[$isBanned[$message[1]]==false;This person is not banned.]
    `
})