module.exports = ({
    name: "ban",
    code: `
    $ban[$mentioned[1]]
I have managed to ban $mentioned[1].
$argsCheck[>0;You need to mention a user in order to ban.]
$onlyPerms[ban;Staff can only execute this command!]
$onlyIf[$isBanned[$mentioned[1]]==false;This person is already banned.]
    `
})