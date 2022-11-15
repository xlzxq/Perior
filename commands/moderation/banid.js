module.exports = ({
    name: "banid",
    code: `
    $ban[$message[1]]
I have managed to ban $username[$message[1]].
$argsCheck[>0;You need to mention a user in order to ban.]
$onlyPerms[ban;Staff can only execute this command!]
$onlyIf[$isBanned[$message[1]]==false;This person is already banned.]
    `
})